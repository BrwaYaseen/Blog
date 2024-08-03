import { db } from "@/db/db";
import { postsTable, SelectPost } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const postId = parseInt(params.id, 25);
    if (isNaN(postId)) {
      throw new Error("Invalid postId");
    }

    const onePost = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, postId))
      .limit(1);

    const post = onePost.length ? onePost[0] : null;

    if (!post) {
      return NextResponse.json({ error: "Post Not Found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch post from database with ID" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId, sessionClaims } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, thumbnail, content, category } = (await req.json()) as Partial<
    Omit<SelectPost, "id">
  >;
  try {
    const postId = parseInt(params.id, 25);
    if (isNaN(postId)) {
      throw new Error("Invalid PostID");
    }

    const onePost = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, postId))
      .limit(1);

    const post = onePost.length ? onePost[0] : null;

    if (!post) {
      return NextResponse.json({ error: "Post Not Found" }, { status: 404 });
    }

    if (post.userId !== userId && sessionClaims?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await db
      .update(postsTable)
      .set({ title, thumbnail, content, category })
      .where(eq(postsTable.id, postId));

    return NextResponse.json({ message: "Post Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to Update Post" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { userId, sessionClaims } = auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const postId = parseInt(params.id, 25);

    if (isNaN(postId)) {
      return NextResponse.json({ error: "Invalid PostID" }, { status: 400 });
    }

    const onePost = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, postId))
      .limit(1);

    const post = onePost.length ? onePost[0] : null;

    if (!post) {
      return NextResponse.json({ error: "Post Not Found" }, { status: 404 });
    }

    if (post.userId !== userId && sessionClaims?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    await db.delete(postsTable).where(eq(postsTable.id, postId));
    return NextResponse.json({ message: "Post Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete the post" },
      { status: 500 }
    );
  }
}
