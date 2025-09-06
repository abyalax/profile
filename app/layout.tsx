import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Toaster from "@/components/ui/Toaster";
import { config } from "@/utils/config";
import Theme from "@/provider/theme";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abya's Profile",
  description: "Developer Profile",
  metadataBase: new URL(config.base_url),
  authors: [{ name: "Abya Lacks", url: config.base_url }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/a.svg" type="image/svg+xml" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        <Theme>
          <Toaster />
          <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            {children}
            <Footer />
          </section>
        </Theme>
      </body>
    </html>
  );
}
