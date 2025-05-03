import { compareDesc } from "date-fns";
import { allProjects, Project } from "contentlayer/generated";
import Card from "@/components/Card";

export default function Home() {

  const projects = allProjects.sort((a: Project, b: Project) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  console.log(projects.map((e) => e.title));

  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">

      <div className="bg-black text-white border border-red-400 p-6">
        <h2 className="">
          Ini Non Prose
        </h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt vitae pariatur excepturi praesentium laudantium quae ab accusamus asperiores commodi! Libero illo a veniam odio, voluptate quos fugiat perferendis ullam maiores!</p>
      </div>

      <div className="prose">
        <h1>Testing Typography</h1>
        <h2>Testing Typography</h2>
        <h3>Testing Typography</h3>
      </div>
      <main className="prose">
        {projects?.map((project: Project, idx: number) => (
          <Card key={idx} project={project} />
        ))}
      </main>

    </div>
  );
}
