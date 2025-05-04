"use client"

import { allProjects, Project } from "@/.contentlayer/generated";
import CardProject from "./CardProject";

const Featured = () => {

    const projects: Project[] = allProjects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <section className="dark:text-slate-300 text-gray-900">
            <div>
                <h2 className="dark:text-slate-200 text-gray-900 lg:text-5xl sm:text-3xl text-xl my-6  text-center font-semibold">Featured Projects</h2>
                <p className=" text-gray-800 dark:text-[#808080] lg:text-lg md:text-base sm:text-xs text-center mt-4 lg:mb-10 mb-4">
                    This project showcases my expertise in web development using JavaScript and TypeScript, <br />
                    with an approach focused on performance and scalability.
                </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-16 px-4">
                {projects.map((project) => (
                    <CardProject project={project} key={project._id}/>
                ))}
            </div>
        </section>

    )
};

export default Featured;