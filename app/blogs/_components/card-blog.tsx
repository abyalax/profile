'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Date } from '../../../components/ui/Date';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Blog = {
  _id: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string | null;
};

export default function CardBlog({ blog }: { blog: Blog }) {
  const { push } = useRouter();
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      onClick={() => push(`blogs/${blog.slug}`)}
      className="project-card glass cursor-pointer dark:glass-dark rounded-2xl overflow-hidden flex flex-col"
    >
      <Link href={`/blogs/${blog.slug}`} className="block">
        <div className="aspect-video w-full bg-gradient-to-r from-[#123c57] to-[#68aafa]">
          {blog.image ? (
            <Image width={500} height={500} src={blog.image} alt={blog.title} className="w-full h-full object-cover mix-blend-overlay" />
          ) : null}
        </div>
      </Link>
      <div className="p-5 flex-1 flex flex-col">
        <Date date={blog.date} className="text-xs text-[var(--text-secondary)]" />
        <Link href={`/blogs/${blog.slug}`} className="mt-1">
          <h3 className="text-lg font-semibold leading-snug">{blog.title}</h3>
        </Link>
        <p className="text-sm text-[var(--text-secondary)] mt-2 line-clamp-3">{blog.description}</p>
        <div className="mt-4">
          <Link href={`/blogs/${blog.slug}`} className="text-[var(--brand-contrast)] hover:text-[var(--accent)] transition-colors text-sm">
            Read more →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
