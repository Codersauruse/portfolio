"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { GradientText } from "./gradient-text"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // In a real application, you would send this data to your backend
      // This is a simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted:", formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
  }

  return (
    <section id="contact" className="min-h-screen py-16 md:py-24 flex items-center">
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
              GET IN TOUCH
            </motion.h2>
          </motion.div>
          <motion.div variants={textAnimation} className="overflow-hidden mt-2">
            <motion.h3 variants={textAnimation} className="text-4xl md:text-5xl font-bold">
              <GradientText>Contact Me</GradientText>
            </motion.h3>
          </motion.div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border rounded-xl p-6 md:p-8 bg-card/80 backdrop-blur-sm"
          >
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <a
                href="mailto:shehanjayaranga2020@gmail.com"
                className="flex items-center justify-center gap-2 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">shehanjayaranga2020@gmail.com</span>
              </a>
              <a
                href="https://wa.me/1234567890"
                className="flex items-center justify-center gap-2 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>

            <div className="text-center mb-6">
              <p className="text-muted-foreground text-sm">Or send a message</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-muted/30 text-sm"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-muted/30 text-sm"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] bg-muted/30 text-sm"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <p className="text-green-500 text-sm text-center mt-2">
                  Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">
                  There was an error sending your message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
