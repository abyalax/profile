import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen min-w-screen dark:bg-[#0a0a0a] bg-slate-100 xl:px-32 lg:px-24 md:px-20 sm:px-10 px-5 pt-11 flex justify-center w-full">
      {children}
    </section>
  );
}
