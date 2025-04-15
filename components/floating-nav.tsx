"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Home, ImageIcon, FileText, Mail, Linkedin, Github, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function FloatingNav() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100 // Add offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      })
    }
  }

  const navItems = [
    { icon: <Home className="h-5 w-5" />, href: "home", label: "Home" },
    { icon: <ImageIcon className="h-5 w-5" />, href: "about", label: "About" },
    { icon: <FileText className="h-5 w-5" />, href: "projects", label: "Projects" },
    { icon: <Mail className="h-5 w-5" />, href: "contact", label: "Contact" },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/shehan-jayaranga-890987227/",
      label: "LinkedIn",
      external: true,
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Codersauruse",
      label: "GitHub",
      external: true,
    },
  ]

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 px-4 py-2 rounded-full border-2 border-primary/30 bg-background/90 backdrop-blur-md shadow-md"
      >
        {navItems.map((item, index) => (
          <div key={index} className="relative group">
            {item.external ? (
              <a
                href={item.href}
                className="p-2 rounded-full hover:bg-muted transition-colors flex items-center justify-center"
                aria-label={item.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ) : (
              <button
                onClick={() => scrollToSection(item.href)}
                className={`p-2 rounded-full hover:bg-muted transition-colors flex items-center justify-center ${
                  activeSection === item.href ? "bg-primary/20 text-primary" : ""
                }`}
                aria-label={item.label}
              >
                {item.icon}
              </button>
            )}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-background/90 text-xs py-1 px-2 rounded-md shadow-sm border border-border whitespace-nowrap">
                {item.label}
              </div>
            </div>
          </div>
        ))}
        <div className="relative group">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {mounted && (resolvedTheme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
          </button>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="bg-background/90 text-xs py-1 px-2 rounded-md shadow-sm border border-border whitespace-nowrap">
              Toggle Theme
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
