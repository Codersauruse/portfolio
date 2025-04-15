"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GradientText } from "./gradient-text";

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "MyToDoList",
      description:
        "A full-stack To-Do List app built with Spring Boot and React, featuring JWT authentication for secure task management.",
      features: [
        "JWT-based user authentication and secure API access.",
        "Switch between weekly, monthly, and yearly views for better task planning",
        "Responsive and clean UI with smooth user experience.",
      ],
      image: "/todolist.png?height=400&width=600",
      technologies: ["ReactJS", "Springboot", "Bootstrap", "Mysql"],
      github: "https://github.com/Codersauruse/Todo-List-App",
      live: "#",
    },
    {
      id: 2,
      title: "MosqGuarD",
      description:
        "MosqGuard is a Spring Boot and React app for mosquito control, enabling real-time issue reporting and tracking.",
      features: [
        "Secure role-based login for MOH, PHIs, and public users.",
        "Mobile app for public complaints with photo and location.",
        "Real-time news and alerts from MOH.",
      ],
      image: "/MosQGuard.png?height=400&width=600",
      technologies: ["ReactJS", "Tailwind CSS", "SpringBoot", "flutter"],
      github: "https://github.com/ksdkaveesha/Dengue-Shield-Webapp_Backend",
      live: "#",
    },
    {
      id: 3,
      title: "Astra ride.",
      description:
        "A full-stack bus management system built with the MERN stack, enabling seat booking, payments, and real-time schedule tracking.",
      features: [
        "Bus timetable view with date-based filtering.",
        "Seat booking system with real-time availability using Firebase.",
        "payment management system",
      ],
      image: "/AstraRide.png?height=400&width=600",
      technologies: [
        "ReactJS",
        "Tailwind CSS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Firebase",
      ],
      github: "https://github.com/Codersauruse/AstraRide",
      live: "#",
    },
    {
      id: 4,
      title: "RUHUNIX",
      description:
        "A collaborative freelancing platform designed for university students",
      features: [
        "Student profiles with skill tags and project portfolios.",
        "Backend tested with Postman; version control via GitHub.",
        "Clean UI designed in Figma and organized via Trello.",
      ],
      image: "/ruhunix.png?height=400&width=600",
      technologies: [
        "ReactJS",
        "Tailwind CSS",
        "NodeJS",
        "Express JS",
        "MongoDB",
      ],
      github: "https://github.com/CSB-DEVELOPMENTS",
      live: "https://www.ruhnix.csbodima.lk/",
    },
  ];

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
      id="projects"
      className="min-h-screen py-16 md:py-24 bg-muted/30 flex items-center"
    >
      <div className="container px-4 md:px-6">
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
          className="flex flex-col items-center mb-12"
        >
          <motion.div variants={textAnimation} className="overflow-hidden">
            <motion.h2
              variants={textAnimation}
              className="text-sm font-semibold text-muted-foreground uppercase tracking-wide"
            >
              EXPLORE MY CREATIONS
            </motion.h2>
          </motion.div>
          <motion.div variants={textAnimation} className="overflow-hidden mt-2">
            <motion.h3
              variants={textAnimation}
              className="text-4xl md:text-5xl font-bold"
            >
              <GradientText>Projects</GradientText>
            </motion.h3>
          </motion.div>
        </motion.div>

        <div ref={containerRef} className="space-y-[50vh]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Update the ProjectCard component to match the design in the image
function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        opacity,
        y,
      }}
      className="project-card border-2 rounded-xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-5xl mx-auto   md:h-[400px]"
    >
      <div className="grid md:grid-cols-[1fr_1fr] h-full">
        <div className="p-6 flex flex-col bg-background/80">
          <div className="mb-4">
            <h4 className="text-xl font-bold">{project.title}</h4>
            <p className="text-muted-foreground text-sm mt-2">
              {project.description}
            </p>
          </div>

          <ul className="space-y-1 mb-6 text-sm">
            {project.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2 text-primary">-</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-medium border bg-muted flex items-center gap-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-4">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-full"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button asChild size="sm" className="rounded-full">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Site
              </a>
            </Button>
          </div>
        </div>
        <div className="relative h-[200px] md:h-full overflow-hidden bg-[#0a0a1b] rounded-b-xl md:rounded-none">
          <div className="absolute inset-0 transition-all duration-300 ease-out transform">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
