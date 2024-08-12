import Image from "next/image";
import { fetchPosts } from "../api/posts";
import Link from "next/link";

export default async function SportsPage() {
  const storyPosts = await fetchPosts("story");
  return (
    <div className="container mx-auto p-4 lg:flex lg:space-x-6 mb-40">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        {storyPosts.map((post) => (
          <div key={post.id} className="bg-card p-4 rounded-md">
            <Link href={`/posts/${post.id}`}>
              <Image
                src={post.thumbnail}
                alt="Post Thumbnail"
                className="w-full h-auto rounded-md"
                width={400}
                height={300}
              />
              <h2 className="text-xl font-bold mt-4">{post.title}</h2>
            </Link>
          </div>
        ))}
      </div>

      {/* Sidebar area */}
      <aside className="w-full lg:w-1/3 mt-6 lg:mt-0">
        <div className="bg-muted p-4 rounded-md">
          <h3 className="text-lg font-bold mb-4">Sidebar Title</h3>
          {/* Add sidebar content here, such as recent posts, categories, etc. */}
          <p className="text-muted-foreground">
            This is the sidebar content. You can add widgets, recent posts, or
            other useful links here.
          </p>
        </div>
      </aside>
    </div>
  );
}

function ReplyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
