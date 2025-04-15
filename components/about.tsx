"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { GradientText } from "./gradient-text";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiFigma,
  SiDocker,
  SiSpringboot,
  SiMysql,
  SiSwagger,
} from "react-icons/si";

export function About() {
  const techStack = [
    {
      name: "HTML",
      icon: <SiHtml5 className="h-4 w-4 text-[#E34F26]" />,
      category: "frontend",
    },
    {
      name: "CSS",
      icon: <SiCss3 className="h-4 w-4 text-[#1572B6]" />,
      category: "frontend",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="h-4 w-4 text-[#F7DF1E]" />,
      category: "frontend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="h-4 w-4 text-[#3178C6]" />,
      category: "frontend",
    },
    {
      name: "ReactJS",
      icon: <SiReact className="h-4 w-4 text-[#61DAFB]" />,
      category: "frontend",
    },
    {
      name: "NextJS",
      icon: <SiNextdotjs className="h-4 w-4" />,
      category: "frontend",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-4 w-4 text-[#06B6D4]" />,
      category: "frontend",
    },
    {
      name: "NodeJS",
      icon: <SiNodedotjs className="h-4 w-4 text-[#339933]" />,
      category: "backend",
    },
    {
      name: "ExpressJS",
      icon: <SiExpress className="h-4 w-4" />,
      category: "backend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="h-4 w-4 text-[#47A248]" />,
      category: "backend",
    },
    {
      name: "MySQL",
      icon: <SiMysql className="h-4 w-4 text-[#4479A1]" />,
      category: "backend",
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="h-4 w-4 text-[#6DB33F]" />,
      category: "backend",
    },
    {
      name: "Docker",
      icon: <SiDocker className="h-4 w-4 text-[#2496ED]" />,
      category: "tools",
    },
    {
      name: "Swagger",
      icon: <SiSwagger className="h-4 w-4 text-[#85EA2D]" />,
      category: "tools",
    },
    {
      name: "Git",
      icon: <SiGit className="h-4 w-4 text-[#F05032]" />,
      category: "tools",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="h-4 w-4" />,
      category: "tools",
    },
    {
      name: "Vercel",
      icon: <SiVercel className="h-4 w-4" />,
      category: "tools",
    },
    {
      name: "Postman",
      icon: <SiPostman className="h-4 w-4 text-[#FF6C37]" />,
      category: "tools",
    },
    {
      name: "Figma",
      icon: <SiFigma className="h-4 w-4 text-[#F24E1E]" />,
      category: "tools",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen py-16 md:py-24 flex items-center"
    >
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex flex-col items-center mb-36"
        >
          <motion.div variants={textAnimation} className="overflow-hidden">
            <motion.h2
              variants={textAnimation}
              className="text-sm font-semibold text-muted-foreground uppercase tracking-wide"
            >
              GET TO KNOW ME
            </motion.h2>
          </motion.div>
          <motion.div variants={textAnimation} className="overflow-hidden mt-2">
            <motion.h3
              variants={textAnimation}
              className="text-4xl md:text-5xl font-bold"
            >
              <GradientText>About Me</GradientText>
            </motion.h3>
          </motion.div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center md:items-start md:text-left"
          >
            <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-full border-4 border-primary/20 bg-muted/50">
              <Image
                src="/images/shehan.png?height=192&width=192"
                alt="Shehan Jayaranga"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
            <h4 className="text-lg font-semibold mb-2">
              Hey, I&apos;m Shehan Jayaranga
            </h4>
            <p className="text-sm mb-3  max-w-md">
              I&apos;m a passionate Full-Stack Developer who loves building
              dynamic, user-friendly applications. I thrive on solving problems,
              creating seamless experiences, and continuously expanding my
              skills. Always eager to learn and grow, I&apos;m currently looking
              for new opportunities to contribute and innovate.
            </p>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Kalutara, Sri Lanka</span>
            </div>
          </motion.div>
          <div className="hidden md:block w-px h-72 bg-white/20 mx-2 rounded-full" />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-[50%] mt-8 md:mt-0"
          >
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">Education</h4>
                <div className="border-b pb-4 bg-card/50 p-4 rounded-lg">
                  <div className="flex justify-between mb-1">
                    <h5 className="font-medium text-sm">
                      University of Ruhuna
                    </h5>
                    <span className="text-muted-foreground text-xs">
                      2022 - 2024
                    </span>
                  </div>
                  <p className="text-xs mb-1">Computer Science</p>
                  <p className="text-xs text-muted-foreground">GPA: 3.85</p>
                </div>
              </div>

              {/* Vertical line between Education and Tech Stack */}
              {/* <div className="w-full h-px bg-border my-6"></div> */}

              <div>
                <h4 className="text-lg font-semibold mb-4">Tech Stack</h4>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {techStack.map((tech) => (
                    <motion.span
                      key={tech.name}
                      variants={item}
                      className="tech-badge bg-card/50"
                    >
                      {tech.icon}
                      <span className="text-xs">{tech.name}</span>
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
