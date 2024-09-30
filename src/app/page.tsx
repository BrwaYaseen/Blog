import Link from "next/link";
import React from "react";
import parse from "html-react-parser";
import Image from "next/image";
import { fetchPost, fetchPosts } from "./api/posts";
import { CalendarDaysIcon } from "lucide-react";

export default async function Component() {
  const mainPost = await fetchPost(1001);
  const allPosts = await fetchPosts();

  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <div className="order-2 md:order-1">
            <Image
              src={mainPost?.thumbnail!}
              alt="Featured Blog Post"
              width={600}
              height={400}
              className="aspect-[3/2] w-full rounded-lg object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Featured
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {mainPost?.title}
              </h2>
            </div>

            <p className="text-muted-foreground">
              {parse(mainPost?.content?.substring(0, 150)!)}...
            </p>

            <div className="flex items-center space-x-4">
              <Link
                href={`/posts/${mainPost?.id}`}
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Read More
              </Link>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CalendarDaysIcon className="h-4 w-4" />
                <span>
                  {mainPost?.createdAt &&
                    new Date(mainPost.createdAt).toDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {allPosts.map((post) => (
            <div key={post.id} className="group">
              <Link href={`/posts/${post.id}`} prefetch={false}>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={post.thumbnail || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    {parse(post.content)}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
