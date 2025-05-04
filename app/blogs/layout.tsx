import Navbar from "@/components/fragments/Navbar";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <section className="min-h-screen min-w-screen dark:bg-black bg-slate-100">
            <Navbar />
            <div className="xl:px-32 lg:px-24 md:px-20 sm:px-10 px-5 py-0 w-full">
            {children}
            </div>
        </section>
    )
}