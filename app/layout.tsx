import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Toaster from "@/components/ui/Toaster";
import Footer from "@/components/fragments/Footer";
import { config } from "@/utils/config";
import Theme from "@/provider/theme";

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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Theme>
          <Toaster />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
