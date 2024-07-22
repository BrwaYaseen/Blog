"use client";

import Link from "next/link";
/* import { Input } from "@/components/ui/input"
 */ import React from "react";
import Image from "next/image";

export default function Component() {
  return (
    <React.Fragment>
      <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="#"
            className="flex items-center space-x-2"
            prefetch={false}
          >
            <FeatherIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Blog</span>
          </Link>
          <div className="flex items-center space-x-4">
            <nav className="hidden space-x-4 md:flex">
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm font-medium hover:underline"
                prefetch={false}
              >
                Contact
              </Link>
            </nav>
            <div className="relative w-full max-w-md">
              <Input
                type="search"
                placeholder="Search blog..."
                className="h-9 w-full rounded-md border border-gray-300 bg-white px-4 text-sm shadow-sm transition-colors focus:border-gray-400 focus:outline-none dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50"
              />
              <SearchIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <div className="order-2 md:order-1">
              <Image
                src="/placeholder.svg"
                alt="Featured Blog Post"
                width={600}
                height={400}
                className="aspect-[3/2] w-full rounded-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Featured
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mastering React Hooks: A Comprehensive Guide
                </h2>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Discover the power of React Hooks and how they can transform
                your development workflow. From useState to useEffect, dive deep
                into the world of modern React.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Read More
                </Link>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarDaysIcon className="h-4 w-4" />
                  <span>May 20, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            <div className="group">
              <Link href="#" prefetch={false}>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Blog Post 1"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Unleashing the Power of TypeScript: A Beginner&apos;s Guide
                  </h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Explore the benefits of TypeScript and how it can improve
                    your JavaScript development experience. From basic types to
                    advanced features, this guide has you covered.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group">
              <Link href="#" prefetch={false}>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Blog Post 2"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Optimizing Your Next.js App: Performance Techniques
                  </h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Discover the best practices for optimizing your Next.js
                    applications. From code splitting to image optimization,
                    learn how to create lightning-fast web experiences.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group">
              <Link href="#" prefetch={false}>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Blog Post 3"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Mastering Responsive Design with CSS Grid and Flexbox
                  </h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Learn how to create responsive and adaptive layouts using
                    the powerful combination of CSS Grid and Flexbox. Unlock the
                    full potential of modern CSS.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group">
              <Link href="#" prefetch={false}>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Blog Post 4"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Building Accessible Web Applications with ARIA
                  </h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Dive into the world of ARIA (Accessible Rich Internet
                    Applications) and learn how to create inclusive web
                    experiences for users with disabilities.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group">
              <Link href="#" prefetch={false}>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Blog Post 5"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Exploring the World of Serverless with AWS Lambda
                  </h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Discover the benefits of serverless computing and how AWS
                    Lambda can help you build scalable and cost-effective
                    applications without managing infrastructure.
                  </p>
                </div>
              </Link>
            </div>
            <div className="group">
              <Link href="#" prefetch={false}>
                <div className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src="/placeholder.svg"
                    alt="Blog Post 6"
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-semibold transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-50">
                    Mastering State Management with Redux
                  </h3>
                  <p className="text-gray-500 line-clamp-2 dark:text-gray-400">
                    Dive deep into the world of Redux, the popular state
                    management library for React. Learn how to manage complex
                    application state and improve the overall user experience.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-6 dark:bg-gray-800">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; 2024 Blog. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </React.Fragment>
  );
}

function CalendarDaysIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function FeatherIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  );
}

function SearchIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function XIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
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
