"use client";

import { ShimmerButton } from "./ui/shimmer-button";

export function ContactSection() {
  return (
    <section className="py-16 px-8 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Ready to Transform Your Marketing?</h2>
      <p className="mb-8 text-white">Chat with our expert team and discover what AI can do for your brand.</p>
      <ShimmerButton
        onClick={() => window.open("https://calendly.com/edoardo-gambacorta/", "_blank")}
        className="text-black font-semibold"
        shimmerColor="rgba(255, 255, 255, 0.4)"
        shimmerDuration="2s"
      >
        Book a Call
      </ShimmerButton>
    </section>
  );
}
