"use client"

import { allBlogs } from ".contentlayer/generated"
import { Date } from "../ui/Date"
import { useRouter } from "next/navigation"
const BlogsPage = () => {

    const { push } = useRouter()

    return (
        <div>
            {allBlogs.map((blog) => (
                <div key={blog._id} onClick={() => push(`/blogs/${blog.slug}`)}>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                    <Date date={blog.date} />
                </div>
            ))}
        </div>
    )
}

export default BlogsPage