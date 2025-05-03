"use client";

import { Project } from "@/.contentlayer/generated";
import { format } from "date-fns/format";
import { parseISO } from "date-fns/parseISO";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

const Card = ({ project }: { project: Project }) => {

    const Content = getMDXComponent(project.body.code) as React.FC;

    return (
        <div className="mb-8">
            <h2 className="text-md">
                <Link
                    href={project.url}
                    className="text-blue-700 hover:text-blue-900">
                    {project.title}
                </Link>
            </h2>
            <time dateTime={project.date} className="block mb-2 text-xs text-gray-600">
                {format(parseISO(project.date), "LLLL d, yyyy")}
            </time>
            <Content />
        </div>
    );
}

export default Card