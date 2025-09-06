import { allProjects, Project } from "contentlayer/generated"
import { Suspense } from "react";
import MDXContent from "@/components/ui/MdxContent";
import { Date } from "@/components/ui/Date";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = allProjects.find(p => p.slug === slug)
    if (!project) return { title: 'Not Found' }
    const metadata: Metadata = {
        title: project.title,
        description: project.description,
        keywords: [project.title, project.description, project.slug],
        robots: "index, follow",
        openGraph: {
            title: project.title,
            description: project.description,
            url: project.urlweb,
            siteName: "Abya's Portfolio",
            type: "website",
            images: [
                {
                    url: project.image,
                    alt: project.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            site: "@abya_dev",
            creator: "@abya_dev",
        },
    }
    return metadata
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const project = allProjects.find(e => e.slug === slug) as Project;

    return (
        <main className="w-full dark:text-white text-slate-900 pt-11">
            <h2 className=" text-3xl">{project.title}</h2>
            <Date date={project.date} className="text-xs" />
            <div className="p-4 w-full">
                <Suspense fallback={<div>Loading...</div>}>
                    <MDXContent code={project.body.code} />
                </Suspense>
            </div>
        </main>
    )

}