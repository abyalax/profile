'use client';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export type Project = {
  _id: string;
  title: string;
  description: string;
  techstack: string[];
  urlgithub?: string | null;
  urlweb?: string | null;
  image?: StaticImageData | string | null;
  slug: string;
  tags?: string[];
  tagColors?: string[];
  repository?: string;
  app?: string;
  date?: string
};

export default function CardProject({ project }: { project: Project }) {
  const { push } = useRouter();
  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="project-card cursor-pointer glass dark:glass-dark rounded-2xl overflow-hidden flex flex-col"
      onClick={() => push(`/projects/${project.slug}`)}
    >
      <div className="aspect-video w-full relative">
        {project.image && <Image src={project.image} width={500} height={500} alt={project.title} className="w-full h-full object-cover" />}
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
        <p className="text-muted mb-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techstack?.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs bg-[rgba(18,60,87,0.12)] text-[var(--brand-contrast)] dark:bg-[rgba(104,170,250,0.12)]"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-4 text-sm">
          {project.urlweb && (
            <Link href={project.urlweb} className="text-[var(--brand-contrast)] hover:text-[var(--accent)] transition-colors" target="_blank">
              <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" /> Live
            </Link>
          )}
          {project.urlgithub && (
            <Link href={project.urlgithub} className="text-muted hover:text-text transition-colors" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="mr-1" /> Code
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
