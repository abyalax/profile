"use client";

import { Project } from "@/.contentlayer/generated";
import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";
import Link from "next/link";

const Card = ({ project }: { project: Project }) => {

    return (
        <div className="mb-8">
            <h2 className="text-md">
                <Link
                    href={`/projects/${project.slug}`}
                    className="text-blue-700 hover:text-blue-900">
                    {project.title}
                </Link>
            </h2>
            <time dateTime={project.date} className="block mb-2 text-xs text-gray-600">
                {format(parseISO(project.date), "LLLL d, yyyy")}
            </time>
        </div>
    );
}

export default Card