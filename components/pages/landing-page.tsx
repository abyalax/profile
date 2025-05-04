"use client";

import TypingAnimation from "@/utils/typing";
import Magnet from "@/components/animations/magnet";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";
import { techStack } from "@/utils/getter";
import { toast } from "react-toastify";
import profile1 from "@/assets/img/profile/profile-1.png";
import profile2 from "@/assets/img/profile/profile-2.jpg"
import { useTheme } from "next-themes";

const SplitText = dynamic(() => import("../animations/text/split"), { ssr: false });
const Featured = dynamic(() => import("@/components/fragments/Featured"), { ssr: false });
const TechStack = dynamic(() => import("@/components/ui/TechStack"), { ssr: false });
const GradientText = dynamic(() => import("@/components/animations/text/gradient"), { ssr: false });
const shakeAxis = [0, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, -4, 4, 0]

const LandingPage = () => {

    const [visible, setVisible] = useState(false);
    const [shake, setShake] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [visibleSkill, setVisibleSkill] = useState(false);
    const {theme} = useTheme()
    const gradientLight = ["#081a27", "#2475aa", "#18242c"]
    const gradientDark = ["#e3f032", "#32f091", "#5ef032"]
    const [formState, setForm] = useState({
        to_name: "Abya",
        from_name: "",
        from_email: "",
        from_phone: "",
        message: "",
    });
    const handleScroll = () => {
        if (document.scrollingElement?.scrollTop) {
            if (document.scrollingElement.scrollTop > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        e.preventDefault();
        try {
            fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
                    template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
                    user_id: process.env.NEXT_PUBLIC_USER_ID,
                    template_params: formState
                })
            }).then((result) => {
                if (result.ok) {
                    toast("Email sent successfully", { type: 'success' });
                } else {
                    toast("Failed to send email, please try again", { type: 'error' });
                }
            })
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
            setForm({
                to_name: "Abya",
                from_name: "",
                from_email: "",
                from_phone: "",
                message: "",
            });
        }
    }
    useEffect(() => {
        document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setShake(true);
            setTimeout(() => setShake(false), 2000);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="dark:text-gray-700 dark:bg-black text-gray-900 bg-slate-100">

            {/* Scroll to top */}
            <motion.a
                href="#navbar"
                className="fixed bottom-10 right-10 dark:bg-white dark:text-black bg-black text-white p-2 rounded-full z-50 shadow-lg"
                initial={{ opacity: 0 }}
                animate={visible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                </svg>
            </motion.a>

            {/* Beranda */}
            <div className="flex flex-col-reverse sm:p-10 lg:pr-32 lg:pl-0 sm:flex-col-reverse lg:flex-row pt-6" id="home">
                <div className="flex flex-col gap-2 px-6 sm:px-12 md:px-16 lg:px-20">
                    <div className="flex items-center">
                        <span className="text-3xl lg:block hidden">👋</span>
                        <SplitText
                            className="text-3xl text-gray-900 dark:text-white font-bold my-3 sm:mt-4 md:text-left lg:text-left sm:text-center lg:block hidden"
                            text={`Hello Buddy`}
                            textAlign="left"
                            delay={150}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="0px"
                            onLetterAnimationComplete={() => { }}
                        />
                    </div>
                    <h2 className="lg:text-6xl font-bold text-gray-900 dark:text-white md:text-left lg:text-left sm:text-center sm:text-3xl">{"I'am "}</h2>
                    <GradientText
                        className="lg:text-6xl font-bold md:text-left lg:text-left sm:text-center sm:text-3xl"
                        colors={theme === "dark" ? gradientDark : gradientLight}
                        animationSpeed={2}>
                        {"Abya Bahari Wafdulloh"}
                    </GradientText>
                    <p className="lg:text-xl sm:text-lg font-semibold sm:mb-5 md:mb-10 bg-gradient-to-r dark:from-green-400 dark:via-blue-500 dark:to-blue-800 from-blue-400 via-blue-950 to-blue-400 inline-block text-transparent bg-clip-text">|
                        <TypingAnimation text={["Fullstack developer", "Web developer", "Frontend developer", "Backend developer", "Fullstack developer", "Backend developer"]} speed={50} />
                    </p>
                    <hr className="dark:text-[#808080] text-slate-500 w-1/3" />
                    <p className="lg:text-xl sm:text-lg dark:text-[#808080] text-slate-500 font-semibold">
                        Computer Engineering student who is enthusiastic and has a passion for the software development.
                        Known as a perfectionist and meticulous person, with strong analytical skills.
                        Always try to provide the best results in every project undertaken, with a focus on improving technical skills and knowledge in the computer field.
                        Committed to continuing to learn and develop in the dynamic technology industry.
                    </p>
                    <div className="mt-7 flex gap-5 sm:flex-row flex-col items-center">
                        <Magnet>
                            <Link className="dark:bg-green-500 bg-blue-500 font-semibold text-white lg:text-xl sm:text-lg px-11 py-3 rounded-md hover:scale-90 hover:transition-transform"
                                href={"https://drive.google.com/file/d/1IPN0mfaWpRJgCVz8pIy7MYnVtGL1bp-t/view?usp=drive_link"} target="_blank">
                                Donwload CV
                            </Link>
                        </Magnet>
                        <Magnet>
                            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="dark:bg-transparent bg-gray-400 border text-white font-semibold lg:text-xl sm:text-lg px-11 py-3 rounded-md hover:scale-90 hover:transition-transform">
                                Details
                            </button>
                        </Magnet>
                    </div>
                </div>

                <div className="flex flex-col relative items-center justify-center lg:min-w-96">
                    <div className="shape" />
                    <Image priority src={profile1} width={300} height={400} alt="Profile" className="relative object-cover object-center z-10 lg:w-full sm:w-72 sm:h-72 lg:h-96 rounded-full border-4 border-slate-500 shadow-2xl dark:shadow-amber-400 shadow-blue-400" />
                    <h2 className="relative text-2xl text-gray-900 dark:text-white font-bold lg:block hidden">{"Let's Connect"}</h2>
                    <h2 className="relative text-2xl text-gray-900 dark:text-white font-bold sm:block lg:hidden">{"Let's Connect Buddy"}</h2>
                    <div className="relative flex gap-3 mt-2 text-gray-900 dark:text-white">
                        <svg onClick={() => window.open("https://www.instagram.com/abya.xc/profilecard/?igsh=ZzVpeGUzZGNjczBi", "_blank")} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                            className="bi bi-instagram cursor-pointer dark:text-white text-black" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-twitter cursor-not-allowed" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                        </svg>
                        <svg onClick={() => window.open("https://www.linkedin.com/in/abyalaxx3541241-profile/", "_blank")} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                            className="bi bi-linkedin cursor-pointer dark:text-white text-black" viewBox="0 0 16 16">
                            <path
                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg>
                        <svg onClick={() => window.open("https://api.whatsapp.com/send?phone=6287765290292&text=Hello%20Abya%2C%20I%20am%20interested%20in%20your%20skills%20from%20your%20web%20profile.%20can%20we%20meet%3F", "_blank")} xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentC" className="bi bi-whatsapp cursor-pointer dark:text-white text-black" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Featured Projects */}
            <Featured />

            {/* Tech Stack */}
            <div className="w-full flex flex-col items-center" id="skill">
                <div className="mt-10 md:px-44 sm:px-20 px-4 flex flex-col gap-8">
                    <div className="md:my-10 sm:my-4 my-0 mx-auto text-center text-wrap max-w-[60vw]">
                        <h2 className="text-gray-900 dark:text-white md:text-5xl sm:text-3xl text-2xl my-3 font-semibold">Tech Stack</h2>
                        <p className="mx-5 dark:text-[#808080] text-slate-500 lg:text-lg md:text-base sm:text-xs text-center">
                            This section highlights the technologies and tools I use to build high-quality web applications. From frontend frameworks like React and Next.js for SSR to backend solutions with Nest.js scallable backend framework, my tech stack ensures efficiency, scalability, and modern development practices.
                        </p>
                    </div>
                    <div className="md:flex md:flex-row sm:grid sm:grid-cols-3 sm:gap-4 flex flex-wrap justify-center items-center gap-4 px-8 sm:px-16">
                        {techStack.highlight.map((item, index) => (
                            <TechStack src={item.url} title={item.title} description={item.description} key={index} />
                        ))}
                    </div>
                    <motion.button
                        className="dark:text-slate-200 text-gray-950 text-lg px-3 py-2 dark:bg-[#0a0a0a] bg-transparent border dark:border-[#404040] border-slate-800 rounded-3xl cursor-pointer mx-auto"
                        onClick={() => setVisibleSkill(!visibleSkill)}
                        whileHover={{ scale: 1.4, x: shakeAxis }}
                        animate={shake ? { x: [0, -2, 2, -2, 2, 0] } : {}}
                        transition={{ duration: 1 }}
                    >
                        {visibleSkill ? "See less" : "See more"}
                    </motion.button>
                    <motion.div
                        className="flex flex-col gap-6"
                        initial={{ height: 0, opacity: 0 }}
                        animate={visibleSkill ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <div className="md:flex md:flex-row sm:grid sm:grid-cols-3 sm:gap-4 flex flex-wrap justify-center items-center gap-4 px-8 sm:px-16">
                            {techStack.hidden.map((item, index) => (
                                <TechStack src={item.url} title={item.title} description={item.description} key={index} />
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* About Me */}
            <div className="xl:px-44 lg:px-44 md:px-20 sm:px-10 px-5 py-0" id="about">
                <h2 className="text-gray-900 dark:text-white md:text-5xl sm:text-2xl text-xl my-6 sm:my-10  text-center font-semibold">About Me</h2>
                <div className="md:grid md:grid-cols-3 sm:flex sm:flex-col gap-4">
                    <div className="col-span-1 text-gray-900 dark:text-white p-8 relative">
                        <Image blurDataURL={"/blur.webp"} placeholder="blur" alt="profile" src={profile2} className=" w-full max-h-96 object-cover rounded-3xl" width={600} height={900} />
                        <span className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-slate-700 to-transparent " />
                    </div>
                    <div className="col-span-2 text-gray-900 dark:text-white overflow-hidden">
                        <h2 className="mb-4 dark:text-[#808080] text-slate-500 md:text-lg sm:text-base text-xs">
                            A developer who cannot be separated from a laptop screen and a cup of coffee, always ready to face new challenges while sipping the sensation of coffee to keep the spirits high.
                        </h2>
                        <table className="md:text-lg sm:text-base text-xs">
                            <tbody>
                                <tr >
                                    <td className="pr-4 py-2 font-semibold text-gray-900 dark:text-white">Name</td>
                                    <td className="py-2 dark:text-[#808080]">Abya Bahari Wafdulloh Sulkhan</td>
                                </tr>
                                <tr>
                                    <td className="pr-4 py-2 font-semibold text-gray-900 dark:text-white">Date of Birth</td>
                                    <td className="py-2 dark:text-[#808080]">21 March 2005</td>
                                </tr>
                                <tr>
                                    <td className="pr-4 py-2 font-semibold text-gray-900 dark:text-white">Status</td>
                                    <td className="py-2 dark:text-[#808080]">Student At Universitas Islam Kadiri-Kediri ( On-Going )</td>
                                </tr>
                                <tr>
                                    <td className="pr-4 py-2 font-semibold text-gray-900 dark:text-white">Major</td>
                                    <td className="py-2 dark:text-[#808080]">Computer Engineering</td>
                                </tr>
                                <tr>
                                    <td className="pr-4 py-2 font-semibold text-gray-900 dark:text-white">Phone</td>
                                    <td className="py-2 dark:text-[#808080]">087765290292</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>

            {/* Contact Me */}
            <div className="pb-20">
                <h2 className="text-gray-900 dark:text-white lg:text-5xl sm:text-3xl text-xl my-6  text-center font-semibold">Contact Me</h2>
                <div className="md:px-44 lg:flex lg:flex-row md:flex md:gap-16 flex flex-col min-h-96">
                    <div className="w-full text-gray-900 dark:text-white p-4">
                        <h2 className="sm:text-3xl text-lg my-6 font-semibold mb-4 text-center">{"Let's Get in Touch"}</h2>
                        <p className="text-center mt-4 sm:mb-12 mb-2 dark:text-[#808080] text-slate-500 text-sm sm:text-base">
                            {"I’m currently looking for any new opportunities, my inbox is always open.Whether you have a question or just want to say hi, I’ll try my best to get back to you!"}
                        </p>
                        <h2 className="font-semibold sm:my-2 sm:text-lg text-sm text-center">Address</h2>
                        <p className="text-center dark:text-[#808080] text-slate-500 text-sm sm:text-base">Plemahan Sub-district, Kediri Regency, East Java, Indonesia</p>
                        <h2 className="font-semibold sm:my-2 sm:text-lg text-sm text-center">Phone</h2>
                        <p className="text-center dark:text-[#808080] text-slate-500 text-sm sm:text-base">+62 877 6529 0292</p>
                        <h2 className="font-semibold sm:my-2 sm:text-lg text-sm text-center">Email</h2>
                        <p className="text-center dark:text-[#808080] text-slate-500 text-sm sm:text-base">abyalaxx@gmail.com</p>
                    </div>

                    <div className=" w-full shadow-2xl shadow-black text-gray-900 dark:text-white">
                        <form className="flex flex-col gap-6 sm:p-10 p-6" onSubmit={handleSubmit}>
                            <input className="min-h-11 bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" name="name" type="text" placeholder="Your Name" onChange={(e) => setForm({ ...formState, from_name: e.target.value })} />
                            <input className="min-h-11 bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" type="email" name="email" placeholder="Your Email" onChange={(e) => setForm({ ...formState, from_email: e.target.value })} />
                            <input className="min-h-11 bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" type="number" min={9} name="phone" placeholder="Your Phone" onChange={(e) => setForm({ ...formState, from_phone: e.target.value })} />
                            <textarea className="bg-transparent focus:outline-none border-b-2 border-slate-500 appearance-none" name="message" placeholder="Your Message" onChange={(e) => setForm({ ...formState, message: e.target.value })} />

                            <button className="bg-slate-500 hover:bg-slate-400 font-semibold text-lg px-11 py-3 rounded-md disabled:cursor-not-allowed" type="submit" disabled={isLoading}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default LandingPage