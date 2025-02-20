"use client";

import { ShimmerButton } from "./ui/shimmer-button";
import CenteredContainer from "./CenteredContainer";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-primary text-secondary">
      <CenteredContainer>
        <h2 className="text-4xl font-bold mb-12 text-center text-white font-sans">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 font-sans">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-secondary text-primary border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent font-sans" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 font-sans">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-secondary text-primary border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent font-sans" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 font-sans">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 bg-secondary text-primary border border-accent rounded-md focus:outline-none focus:ring-2 focus:ring-accent font-sans" required></textarea>
            </div>
            <div className="flex justify-center">
              <ShimmerButton
                type="submit"
                className="bg-accent text-black font-semibold text-sm w-auto rounded-md hover:bg-opacity-90 transition-colors duration-200 relative overflow-hidden"
                shimmerColor="rgba(255, 255, 255, 0.4)"
                shimmerDuration="2s"
              >
                Send Message
              </ShimmerButton>
            </div>
          </form>
        </div>
        <div className="mt-12 text-center flex flex-col items-center">
          <p className="mb-4 font-sans">Or book a call with our expert team:</p>
          <ShimmerButton
            onClick={() => window.open("https://calendly.com/edoardo-gambacorta/", "_blank")}
            className="text-black font-semibold text-sm w-auto"
            shimmerColor="rgba(255, 255, 255, 0.4)"
            shimmerDuration="2s"
          >
            Book Call
          </ShimmerButton>
        </div>
      </CenteredContainer>
    </section>
  );
}
