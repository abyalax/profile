'use client';

import { faChevronDown, faExternalLinkAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { DownloadButton } from '@/components/ui/DownloadButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import profile from '@/assets/img/profile/profile-4.png';
import { allProjects } from '@/.contentlayer/generated';
import { FormEvent, useState } from 'react';
import Magnet from '@/components/animations/magnet';
import { motion, Variants } from 'framer-motion';
import TypingAnimation from '@/utils/typing';
import { useRouter } from 'next/navigation';
import { sosmed, techStack } from './data';
import { TechStack } from './tech-stack';
import { Profile } from './ide-profile';
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';

export function PageLanding() {
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const badges = [
    'bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200',
    'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
    'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200',
  ];
  const dateAgo = new Date();
  dateAgo.setMonth(dateAgo.getMonth() - 24);
  const latestProjects = allProjects
    .filter((project) => new Date(project.date) > dateAgo)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      phone: formData.get('phone'),
    };

    try {
      toast(`Thanks ${(data.name as string).split(' ')[0]}!! Email Sending...`, { type: 'info' });
      await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_USER_ID,
          template_params: {
            to_name: 'Abya',
            from_name: data.name,
            from_email: data.email,
            from_phone: data.phone,
            message: data.message,
          },
        }),
      });

      toast('Thank you for your message! I will get back to you soon.', { type: 'success' });
      form.reset();
    } catch (error) {
      toast('Failed to send email, please try again', { type: 'error' });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

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

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0, 0, 0.58, 1] } },
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center hero-bg relative overflow-hidden">
        <div id="hero-canvas" className="absolute inset-0 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div className="text-center" variants={container} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
            {/* Avatar */}
            <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} className="mb-8">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-[#123c57] to-[#68aafa] p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                  {/* <FontAwesomeIcon icon={faLinkedinIn} className="text-6xl text-gray-600 dark:text-gray-400" /> */}
                  <Image src={profile} width={800} height={800} alt="Abya" className="w-full h-full object-cover object-center-top" />
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I&apos;m <span className="gradient-text">Abya Bahari Wafdulloh .S</span>
            </motion.h1>

            {/* Subheading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              <TypingAnimation text={['Full Stack Developer', 'Software Developer', 'Frontend Engineer', 'Backend Engineer']} />
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            >
              <TypingAnimation
                delay={4000}
                speed={20}
                text={[
                  ` I am a Computer Engineering student who is detail-oriented and impact-driven, combining controlled perfectionism with long-term
              thinking. I prioritize efficiency by working fast while maintaining quality, and I continuously research technologies to ensure the best
              fit for each project. I am also a fast learner, able to adapt quickly to new tools and challenges, with a strong interest in full-stack
              development.`,
                ]}
              />
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="flex justify-center space-x-6 mb-12"
            >
              {sosmed.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${item.color} text-white transition-all hover:scale-110`}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.a>
              ))}
            </motion.div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <Magnet magnetStrength={4}>
                <motion.button
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  className="px-8 py-3 bg-gradient-to-r from-[#123c57] to-[#68aafa] text-white rounded-full hover:from-[#0e2e42] hover:to-[#7bb6ff] transition-all transform hover:scale-105"
                >
                  View My Work
                </motion.button>
              </Magnet>
              <Magnet magnetStrength={4}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  className="px-8 py-3 bg-gradient-to-r to-[#123c57] from-[#68aafa] text-white rounded-full hover:from-[#0e2e42] hover:to-[#7bb6ff] transition-all transform hover:scale-105"
                >
                  <DownloadButton fileUrl="/cv.pdf" fileName="CV_Abya.pdf">
                    Download CV
                  </DownloadButton>
                </motion.div>
              </Magnet>
            </div>
          </motion.div>
        </div>

        {/* Chevron bounce */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <FontAwesomeIcon icon={faChevronDown} className="text-2xl text-gray-400" />
        </motion.div>
      </section>

      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Here are some of my recent projects that showcase my skills and expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 ">
            {latestProjects.map((project, index) => (
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                key={index}
                className="glass cursor-pointer dark:glass-dark rounded-2xl p-6"
                onClick={() => push(`/projects/${project.slug}`)}
              >
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <div className={`w-full h-48 rounded-lg flex items-center justify-center`}>
                    <Image src={project.image} width={500} height={500} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techstack.map((tag, tagIndex) => (
                    <span key={tagIndex} className={`px-3 py-1 ${badges[tagIndex]} rounded-full text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link href={project.urlweb ?? '/'} className="text-blue-600 hover:text-blue-800 transition-colors">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="mr-1" />
                    Live Demo
                  </Link>
                  <Link href={project.urlgithub ?? '/'} className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors">
                    <FontAwesomeIcon icon={faGithub} className="mr-1" />
                    Code
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Technologies and tools I work with to bring ideas to life</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <TechStack key={index} tech={tech} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Get to know more about my background and journey</p>
          </div>

          <div className="max-w-8xl mx-auto">
            <div className="glass dark:glass-dark rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 col-span-2">
                  <Profile />
                </div>
                <div className="col-span-1">
                  <h3 className="text-2xl font-bold mb-6 gradient-text">My Story</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    I&apos;m a passionate full-stack developer with 1 years of experience creating digital solutions that make a difference. My journey began with curiosity
                    about how things work, which led me to explore the endless possibilities of code.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    I specialize in modern web technologies and enjoy building scalable applications that provide exceptional user experiences. When I&apos;m not coding,
                    you&apos;ll find me exploring new technologies and learning about the latest trends in the industry.
                  </p>

                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                      <div className="text-sm text-gray-500">Projects</div>
                    </div>
                    {/* <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">3+</div>
                      <div className="text-sm text-gray-500">Clients</div>
                    </div> */}
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">1+</div>
                      <div className="text-sm text-gray-500">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Have a project in mind? Let&apos;s work together to bring your ideas to life</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="glass dark:glass-dark rounded-3xl p-8" id="contact-form">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#123c57] to-[#68aafa] text-white rounded-lg hover:from-[#0e2e42] hover:to-[#7bb6ff] transition-all transform hover:scale-[1.02] font-medium"
              >
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
