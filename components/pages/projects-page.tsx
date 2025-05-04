import { allProjects } from "contentlayer/generated";
import CardProject from "../fragments/CardProject";

const ProjectPage = () => {

    const projectReal = allProjects.filter(e => e.label === "real");
    const projectDummy = allProjects.filter(e => e.label === "dummy");

    return (
        <main className="flex content-center flex-col gap-5">
            <div>
                <h2 className="dark:text-white text-gray-900 font-semibold lg:text-3xl md:text-xl sm:text-base text-center">Past Project Experience</h2>
                <p className="dark:text-[#808080] text-slate-600 lg:text-lg md:text-base sm:text-xs text-center mt-4 lg:mb-10 mb-4">{"Explore the Project I've worked on so far"}</p>
                <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:w-full sm:flex-wrap sm:gap-4 lg:gap-6">
                    {projectReal.map((project) => (
                        <CardProject project={project} key={project._id} />
                    ))}
                </div>
            </div>
            {projectDummy.length > 0 && (
                <div className="mt-24">
                    <h2 className="dark:text-white text-gray-900 font-semibold lg:text-3xl md:text-xl sm:text-base text-center">Project Learning Experience</h2>
                    <p className="dark:text-[#808080] text-slate-600 lg:text-lg md:text-base sm:text-xs text-center mt-4 lg:mb-10 mb-4">{"Explore the Project I've learned so far"}</p>
                    <div className="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:flex sm:w-full sm:flex-wrap sm:gap-4 lg:gap-6">
                        {projectDummy.map((project) => (
                            <CardProject project={project} key={project._id} />
                        ))}
                    </div>
                </div>
            )}
        </main>
    )
}

export default ProjectPage