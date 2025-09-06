import { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

interface TechProps {
  image: string;
  name: string;
  color: string;
  title: string;
  description: string;
}

export function TechStack({ tech }: { tech: TechProps }) {
  const [show, setShow] = useState(false);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0, 0, 0.58, 1],
      },
    },
  };

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      whileHover={{ scale: 1.05 }}
      className="relative text-center p-4 glass dark:glass-dark flex justify-center flex-col items-center rounded-3xl cursor-pointer hover:shadow-xl dark:hover:shadow-yellow-400 hover:shadow-blue-400"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {/* Tooltip */}
      <div
        id="tooltip-default"
        role="tooltip"
        className={`absolute text-center bottom-full mb-2 px-3 py-2 font-medium text-white bg-gray-700 rounded-lg shadow-lg transition-opacity duration-300 ${
          show ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <h2 className="text-lg my-0">{tech.title}</h2>
        <p className="text-sm">{tech.description}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#374151"
          className="bi bi-triangle-fill absolute top-[90%] rotate-180 left-1/2 transform -translate-x-1/2"
          viewBox="0 0 16 16"
        >
          <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767z" />
        </svg>
      </div>

      {/* Image */}
      <div className={`text-4xl mb-3 ${tech.color}`}>
        <Image src={tech.image} width={128} height={128} alt={tech.name} />
      </div>

      <span className="font-medium">{tech.name}</span>
    </motion.div>
  );
}
