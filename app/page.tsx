import Navbar from "@/components/fragments/Navbar";
import LandingPage from "@/components/pages/landing-page";
import { config } from "@/utils/config";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Abya's Profile",
  description: "Explore Abya's personal website showcasing development projects, technical blogs, and more.",
  authors: [{ name: "Abya Lacks", url: config.base_url }],
  keywords: [
    "Profile Developer",
    "Personal Website",
    "Fullstack Developer",
    "Abya Lacks",
    "Software Engineer Portfolio"
  ],
  creator: "Abya Lacks",
  publisher: "Abya Lacks",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Abya's Profile",
    description: "Discover innovative web and software development projects by Abya.",
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
    title: "Abya's Profile",
    description: "Software engineer, web developer, and digital creator. Explore my work.",
    site: "@abya_dev",
    creator: "@abya_dev",
    images: ["/profile/profile-2.png"],
  },
}

export default function Home() {

  return (
    <section className="dark:text-gray-700 dark:bg-black text-gray-900 bg-slate-100">
      <Navbar />
      <LandingPage />
    </section>
  );
}
