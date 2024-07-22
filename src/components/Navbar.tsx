import { FeatherIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950 dark:text-gray-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center space-x-2" prefetch={false}>
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
  );
};

export default Navbar;
