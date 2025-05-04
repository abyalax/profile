"use client"

import Link from "next/link";
import ToggleTheme from "../ui/ToggleThemes";

const Navbar = () => {
    return (
        <div className="sticky top-0 px-6 pb-4 lg:px-20 md:px-20 sm:px-8 dark:text-gray-700 dark:bg-black text-gray-900 bg-slate-100 z-50" id="navbar">
            <div className="flex flex-row h-20 justify-between items-center py-7 border-b-2 dark:border-gray-500 border-gray-500">
                <div className="h-full dark:text-white text-gray-900 font-extrabold text-2xl">
                    <h2 className="lg:block md:block hidden">Abya</h2>
                </div>
                <div className="flex flex-row items-center lg:gap-16 md:gap-10 gap-4 sm:gap-8 h-full w-full justify-center sm:justify-center md:justify-end lg:justify-end dark:text-white text-gray-900 sm:font-semibold">
                    <Link href="/#home" className="h-full dark:hover:text-yellow-500 hover:text-blue-500 hover:underline-offset-2 hover:underline">Home</Link>
                    <Link href="/#skill" className="h-full dark:hover:text-yellow-500 hover:text-blue-500 hover:underline-offset-2 hover:underline">Skills</Link>
                    <Link href="/#about" className="h-full dark:hover:text-yellow-500 hover:text-blue-500 hover:underline-offset-2 hover:underline">About</Link>
                    <Link href="/projects" className="h-full dark:hover:text-yellow-500 hover:text-blue-500 hover:underline-offset-2 hover:underline">Projects</Link>
                    <Link href="/blogs" className="h-full dark:hover:text-yellow-500 hover:text-blue-500 hover:underline-offset-2 hover:underline">Blogs</Link>
                    <ToggleTheme />
                </div>
            </div>
        </div>
    )
};

export default Navbar;