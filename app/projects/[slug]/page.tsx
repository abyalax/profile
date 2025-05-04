import { allProjects, Project } from "@/.contentlayer/generated"
import { Suspense } from "react";
import MDXContent from "@/components/ui/MdxContent";
import { Date } from "@/components/ui/Date";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = allProjects.find(p => p.slug === slug)
    if (!project) return { title: 'Not Found' }

    return {
        title: project.title,
        description: project.description,
    }

}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const project = allProjects.find(e => e.slug === slug) as Project;

    return (
        <main className="w-full">
            <h2 className="text-white text-3xl">{project.title}</h2>
            <Date date={project.date} className="text-xs text-white" />
            <div className="p-4 w-full">
                <Suspense fallback={<div>Loading...</div>}>
                    <MDXContent code={project.body.code} />
                </Suspense>
            </div>
        </main>
    )

}