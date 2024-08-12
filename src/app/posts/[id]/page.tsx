import Image from "next/image";
import { format } from "date-fns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import parse from "html-react-parser";
import { fetchPost } from "@/app/api/posts";

interface PostProps {
  params: {
    id: string;
  };
}

type Post = {
  id: number;
  title: string;
  content: string;
  thumbnail: string;
  userId: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};

const Page = async ({ params }: PostProps) => {
  const postId = parseInt(params.id, 10);
  const post = (await fetchPost(postId)) as Post | null;

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-2xl">
          <CardContent className="pt-6">
            <p className="text-center text-gray-500 dark:text-gray-400">
              No post found with ID: {postId}
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-6 mb-16">
      <Card className="w-full max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl sm:text-4xl font-bold">
            {post.title}
          </CardTitle>
          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
            <p>
              Created:{" "}
              {post.createdAt
                ? format(new Date(post.createdAt), "PPpp")
                : "Unknown"}
            </p>
            {post.updatedAt && post.updatedAt !== post.createdAt && (
              <p>Last updated: {format(new Date(post.updatedAt), "PPpp")}</p>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {post.thumbnail && (
            <div className="relative w-full h-48 sm:h-64 md:h-80 mb-4">
              <Image
                src={post.thumbnail}
                alt="Thumbnail"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
          )}
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
