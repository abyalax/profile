"use client";

import { Project } from "contentlayer/generated";
import Image from "next/image"
import { useRouter } from "next/navigation";

const CardProject = ({ project, className }: { project: Project, className?: string }) => {

    const { push } = useRouter()

    return (
        <div onClick={() => push(`/projects/${project.slug}`)} key={project._id} className={`max-w-96 w-fit p-4 lg:mx-3 sm:mx-2 mx-1 rounded-xl flex flex-col shadow-xl dark:shadow-yellow-400 shadow-blue-400 hover:transform hover:scale-105 duration-300 ${className}`}>
            <div className="cursor-pointer flex justify-center items-start flex-col">
                {project.image ? (
                    <Image alt="" width={400} height={200} src={project.image} className="rounded-md " />
                ) : (
                    <div className="flex justify-center items-center w-full h-full rounded-md bg-slate-300">
                        <h2>Image Preview Not Available</h2>
                    </div>
                )}

                <div className="w-full h-1/2 text-wrap">
                    <h2 className="dark:text-white text-gray-900 text-center text-lg mt-2">{project.title}</h2>
                    <p className="text-gray-800 dark:text-[#808080] text-balance my-4">{project.description}</p>
                </div>
            </div>

            <div>
                <p className="dark:text-yellow-500 text-blue-700 text-sm mt-2 mb-4">{project.techstack.join(", ")}</p>
                <div className="border-t border-slate-600 flex gap-2 justify-end items-center pt-2 pr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github dark:text-white text-gray-900 mt-2" viewBox="0 0 20 20">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-box-arrow-up-right dark:text-white text-gray-900" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}


export default CardProject