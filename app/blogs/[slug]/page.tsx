import { allBlogs } from "contentlayer/generated"
import { Date } from "@/components/ui/Date"
import MDXContent from "@/components/ui/MdxContent"
import { Suspense } from "react"

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params
    const blog = allBlogs.find(e => e.slug === slug)

    if (!blog) return (
        <div>
            <h1>Not Found</h1>
        </div>
    )

    return (
        <article className="pt-20 px-4 sm:px-6 lg:px-8 pb-10 bg-[var(--bg-primary)] text-[var(--text-primary)]">
            <header className="max-w-3xl mx-auto mb-8">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">{blog.title}</h1>
                <p className="text-[var(--text-secondary)] mt-2">{blog.description}</p>
                <Date date={blog.date} className="block mt-2 text-xs text-[var(--text-secondary)]" />
            </header>
            <section className="max-w-3xl mx-auto">
                <Suspense fallback={<div>Loading...</div>}>
                    <MDXContent code={blog.body.code} />
                </Suspense>
            </section>
        </article>
    )
}