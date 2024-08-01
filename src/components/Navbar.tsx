import { SearchIcon, Snail } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { ModeToggle } from "./toggle-button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Snail className="h-6 w-6" />
          <span className="text-lg font-bold">Triverse</span>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden space-x-4 md:flex">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link
              href="/sports"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Sports
            </Link>
            <Link
              href="/science"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Science
            </Link>
            <Link
              href="/story"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Stories
            </Link>
          </nav>
          <div className="relative w-full max-w-md">
            <Input
              type="search"
              placeholder="Search blog..."
              className="h-9 w-full pr-10"
            />
            <SearchIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
          <div className=" ml-3 mr-3">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
