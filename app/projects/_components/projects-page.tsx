"use client";

import { allProjects } from "contentlayer/generated";
import CardProject from "./card-project";
import { motion } from "framer-motion";

export function PageProjects() {
  const projectReal = allProjects.filter((e) => e.label === "real");
  const projectDummy = allProjects.filter((e) => e.label === "dummy");

  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 py-14 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-7xl mx-auto">
        <motion.header initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl">Past Project Experience</h2>
          <p className="text-[var(--text-secondary)] lg:text-lg md:text-base text-sm mt-3">{"Explore the Project I've worked on so far"}</p>
        </motion.header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectReal.map((project) => (
            <CardProject project={project} key={project._id} />
          ))}
        </div>

        {projectDummy.length > 0 && (
          <section className="mt-20">
            <motion.header
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="font-bold lg:text-4xl md:text-3xl text-2xl">Project Learning Experience</h2>
              <p className="text-[var(--text-secondary)] lg:text-lg md:text-base text-sm mt-3">{"Explore the Project I've learned so far"}</p>
            </motion.header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectDummy.map((project) => (
                <CardProject project={project} key={project._id} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};