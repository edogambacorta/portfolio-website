"use client";

import { ShimmerButton } from "./ui/shimmer-button";
import CenteredContainer from "./CenteredContainer";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-28 bg-black">
      <CenteredContainer>
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-sans">
              Get in Touch
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-sans">
              Have a role in mind? Let&apos;s talk about it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-lg mx-auto"
          >
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-300 font-sans"
                >
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 font-sans"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-300 font-sans"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 font-sans"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2 text-gray-300 font-sans"
                >
                  Company{" "}
                  <span className="text-gray-500 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 font-sans"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-300 font-sans"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about what you're building..."
                  className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 font-sans placeholder-gray-600 resize-none"
                  required
                />
              </div>
              <div className="flex justify-center pt-2">
                <ShimmerButton
                  type="submit"
                  className="text-black font-semibold text-sm w-full sm:w-auto"
                  shimmerColor="rgba(255, 255, 255, 0.4)"
                  shimmerDuration="2s"
                >
                  Send Message
                </ShimmerButton>
              </div>
            </form>
          </motion.div>

          {/* Direct contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 mb-4 text-sm font-sans">
              Or reach me directly:
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400 text-sm">
              <a
                href="mailto:edoardo.gambacorta@gmail.com"
                className="hover:text-accent transition-colors duration-200"
              >
                📧 edoardo.gambacorta@gmail.com
              </a>
              <span className="hover:text-accent transition-colors duration-200">
                📱 +41 76 775 20 97
              </span>
              <span>📍 Basel, Switzerland</span>
            </div>
          </motion.div>
        </div>
      </CenteredContainer>
    </section>
  );
}
