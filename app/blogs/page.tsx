import BlogsPage from "@/components/pages/blogs-page";
import { config } from "@/utils/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abya's Blogs",
  description: "Explore Abya's portfolio Blogs, technical blogs, and more.",
  authors: [{ name: "Abya Lacks", url: config.base_url }],
  openGraph: {
    title: "Abya's Blogs",
    description: "Discover innovative web and software development Blogs by Abya.",
    url: config.base_url,
    siteName: "Abya's Portfolio",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/profile/profile-2.png",
        width: 1200,
        height: 630,
        alt: "Abya's Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abya's Blogs",
    description: "Software engineer, web developer, and digital creator. Explore my work.",
    site: "@abya_dev",
    creator: "@abya_dev",
    images: ["/profile/profile-2.png"],
  },
}

export default function Page() {
    return (
        <BlogsPage />
    )
}