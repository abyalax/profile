"use client"

import { allBlogs } from ".contentlayer/generated"
import CardBlog from "./card-blog"

export function PageBlogs() {

    return (
        <main className="px-4 sm:px-6 lg:px-8 pb-14 pt-20 bg-[var(--bg-primary)] text-[var(--text-primary)]">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-12">
                    <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl">Latest Blogs</h2>
                    <p className="text-[var(--text-secondary)] lg:text-lg md:text-base text-sm mt-3">Insights, tutorials, and development notes.</p>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allBlogs.map((blog) => (
                        <CardBlog blog={blog} key={blog._id} />
                    ))}
                </div>
            </div>
        </main>
    )
}