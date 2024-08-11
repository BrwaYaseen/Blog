"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import React from "react";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
export default function Component() {
  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/*   <div className="container grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
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
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Mastering React Hooks: A Comprehensive Guide
                </h2>
              </div>
              <p className="text-muted-foreground">
                Discover the power of React Hooks and how they can transform
                your development workflow. From useState to useEffect, dive deep
                into the world of modern React.
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Read More
                </Link>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <CalendarDaysIcon className="h-4 w-4" />
                  <span>May 20, 2024</span>
                </div>
              </div>
            </div>
          </div> */}
          <SignInButton />
        </SignedOut>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
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
                <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                  Unleashing the Power of TypeScript: A Beginner&apos;s Guide
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the benefits of TypeScript and how it can improve your
                  JavaScript development experience. From basic types to
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
                  alt="Blog Post 1"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                  Unleashing the Power of TypeScript: A Beginner&apos;s Guide
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the benefits of TypeScript and how it can improve your
                  JavaScript development experience. From basic types to
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
                  alt="Blog Post 1"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                  Unleashing the Power of TypeScript: A Beginner&apos;s Guide
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the benefits of TypeScript and how it can improve your
                  JavaScript development experience. From basic types to
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
                  alt="Blog Post 1"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                  Unleashing the Power of TypeScript: A Beginner&apos;s Guide
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the benefits of TypeScript and how it can improve your
                  JavaScript development experience. From basic types to
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
                  alt="Blog Post 1"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                  Unleashing the Power of TypeScript: A Beginner&apos;s Guide
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the benefits of TypeScript and how it can improve your
                  JavaScript development experience. From basic types to
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
                  alt="Blog Post 1"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
                  Unleashing the Power of TypeScript: A Beginner&apos;s Guide
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  Explore the benefits of TypeScript and how it can improve your
                  JavaScript development experience. From basic types to
                  advanced features, this guide has you covered.
                </p>
              </div>
            </Link>
          </div>
          {/* Repeat the above structure for the other 5 blog posts */}
        </div>
      </section>
    </main>
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
