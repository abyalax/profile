import { allBlogs } from "contentlayer/generated"
// import { Date } from "@/components/ui/Date"
import { Date } from "../../../components/ui/Date"
import MDXContent from "../../../components/ui/MdxContent"
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
        <div className="pb-12">
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
            <Date date={blog.date} />
            <Suspense fallback={<div>Loading...</div>}>
                <MDXContent code={blog.body.code} />
            </Suspense>
        </div>
    )
}