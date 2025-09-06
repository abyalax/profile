import ToggleTheme from "@/components/ui/ToggleThemes";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass dark:glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold gradient-text">Portfolio</div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/#home"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Blogs
            </Link>
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}
