import React, { useMemo } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import {motion} from "framer-motion";
import kira from "../assets/kira.png"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import avator from "../assets/avator.png"



const socials = [
  {Icon: FaXTwitter, label: "X", href: ""},
  {Icon: FaLinkedin, label: "Linkedin", href: ""},
  {Icon: FaGithub, label: "Github", href: "https://github.com/shifat01"},
]

const glowVariants = {
  initial: {scale: 1, y : 0, filter: "drop-shadow(0 0 0 rgba(0,0,0,0))"},
  hover: {
    scale: 1.2, y: -3,
    filter: "drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))",
    trnstition: {type: "spring", stiffness: 300, damping: 15}
  },
  tap: {scale: 0.95, y: 0, transition: {duration: 0.08}}
}

export default function Home(){

  const roles = useMemo(() => ["Web Developer", "MERN Stack Developer", "FullStack Developer"], []);

  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);
  React.useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if(!deleting && subIndex < current.length) setSubIndex(v => v + 1);
      else if(!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1000);
      else if (deleting && subIndex > 0) setSubIndex(v => v -1 );
      else if (deleting && subIndex === 0) {setDeleting(false); setIndex(p => (p + 1) % roles.length)}
    }, deleting? 40: 60);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]); 

  return(
    <section id="home" className="w-full h-screen relative bg-black overflow-hidden">
      <ParticlesBackground/>
      <div>
        <div className="absolute inset-0"></div>
        <div className="absolute -top-32 -left-32 w-[70vw] sm:"></div>
      </div>

      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">

        {/* details section */}
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative mt-14 sm:mt-6">
          <div className="w-full lg:pr-24 mx-auto max-w[48rem] lg:ml-30">
            <motion.div
              className="mb-3 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{opacity:0, y: 12}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6}}
            >
              <span>
                {roles[index].substring(0, subIndex)}
              </span>
              <span className="inline-block ml-1 bg-white animate-pulse align-middle" style={{height:"1em", width: "2px"}}>

              </span>
              

              <motion.h1
                className="text-4xl sm:text-5xl mt-3 md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#1cd8d2] via-[#00bfaf] to-[#302ba3] drop-shadow-lg"
                initial={{opacity: 0}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1}}
              >
                Hello, I'm
                <br />
                <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                  Shifat
                </span>
              </motion.h1>
              <motion.p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 hidden md:block"
                initial={{opacity:0, y: 20}}
                animate={{opacity:1, y: 0}}
                transition={{delay: 0.4, duration: 0.8}}
              >
                I turn complex ideas into seamless, high-impact web experiences
              </motion.p>
              <motion.div
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6"

                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay: 0.8, duration: 0.8}}
              >
                <a href="#projects" className="px-6 py-3 rounded-full text-lg font-medium text-white bg-linear-to-r  from-[#1cd8d2] via-[#00bf8f] to-[#302b68] shadow-lg hover:scale-105 transition-all">View My Work</a>
                <a href="/Resume.pdf" download className="px-6 py-3 rounded-full text-lg font-medium text-black bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all">My Resume</a>
              </motion.div>

              
              <div className="mt-10 flex gap-8 text-2xl md:text-3xl justify-center lg:justify-start">
                {socials.map(({Icon, label, href}) => (
                  <motion.a 
                    href={href}
                    key={label}
                    target="_blank"
                    aria-label={label}
                    rel="noopener noreferrer"
                    variants={glowVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="text-gray-300"
                  >
                    <Icon/>
                  </motion.a>
                ))}
              </div>

            </motion.div>

          </div>

        </div>

        {/* image section */}
        <div className="relative hidden lg:block mr-10">

            {/* bg animation */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                right: "10px", width: "min(22vw, 410px)", height: "min(40vw, 760px)", borderRadius: "50%",
                filter: "blur(38px)", opacity: 0.32,
                background: "conic-gradient(from 0deg, #800080, #0000ff, #000000, #800080)"
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />


            <motion.img src={avator} alt="Shifat's profile"
              className="absolute top-1/2 -translate-y-1/2 object-contain select-none pointer-events-none"
              style={{
                right: "-30px", width: "min(45vw, 780px)", maxHeight: "90vh"
              }}

              initial={{opacity:0, y: 40, scale: 0.98}}
              animate={{opacity:1, y:0, scale: 1}}
              transition={{delay: 0.2, duration:0.8}}
            />
        </div>

      </div>
    </section>
  )
}