import { db } from "@/db/db";
import { InsertPost, postsTable, usersTable } from "@/db/schema";
import { currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

class ValidaionError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "ValidationError";
    this.status = 400;
  }
}

class DatabaseError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = "DatabaseError";
    this.status = 500;
  }
}

export async function POST(req: Request) {
  try {
    const { title, thumbnail, content, category } =
      (await req.json()) as InsertPost;

    const user = await currentUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!title || !thumbnail || !content || !category) {
      throw new ValidaionError(
        "Title, Thumbnail, Content and Category are required"
      );
    }

    await db.insert(postsTable).values({
      title,
      thumbnail,
      content,
      category,
      userId: user.id,
    });

    return NextResponse.json({ message: "Post Created" }, { status: 200 });
  } catch (error) {
    throw new DatabaseError("Failed to Created post in the database");
  }
}

export async function GET() {
  try {
    const posts = await db
      .select({
        id: postsTable.id,
        title: postsTable.title,
        thumbnail: postsTable.thumbnail,
        content: postsTable.content,
        category: postsTable.category,
        createdAt: postsTable.createdAt,
        updatedAt: postsTable.updatedAt,
        userId: postsTable.userId,
        userEmail: usersTable.email,
        userRole: usersTable.role,
      })
      .from(postsTable)
      .leftJoin(usersTable, eq(postsTable.userId, usersTable.id));

    return NextResponse.json(posts);
  } catch (error) {
    throw new DatabaseError("Failed to fetch the post from database");
  }
}
