"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Hand, ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="container px-4 md:px-6 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 py-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter"
          >
            Crafting Beautiful & <br />
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent bg-size-200 inline-block h-[40px] md:h-[50px]">
              <TypeAnimation
                sequence={[
                  "Functional Web Experiences",
                  2000,
                  "Responsive Web Applications",
                  2000,
                  "User-Friendly Interfaces",
                  2000,
                  "Scalable Web Solutions",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                deletionSpeed={60}
                repeat={Number.POSITIVE_INFINITY}
                cursor={true}
                className="text-3xl md:text-4xl lg:text-5xl font-bold"
              />
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <Button
              size="sm"
              className="rounded-full"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop,
                    behavior: "smooth",
                  });
                }
              }}
            >
              <Hand className="mr-2 h-4 w-4" /> Let&apos;s Connect
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=1M-SXl9jCNc8qORvPXKdfZKSePnB0aiGC"
                download
              >
                <Download className="mr-2 h-4 w-4" /> My Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down animation */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <span className="text-sm text-pink-200 mb-2">Scroll Down</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        >
          <ChevronDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>

      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-background to-transparent"></div>

      {/* Curved horizon line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] w-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 80%)",
          height: "300px",
          transform: "translateY(50%)",
        }}
      />
    </section>
  );
}
