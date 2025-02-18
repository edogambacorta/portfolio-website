"use client";

import { CTAButton } from "./CTAButton";

export function ContactSection() {
  return (
    <section className="py-16 px-8 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Marketing?</h2>
      <p className="mb-8">Chat with our expert team and discover what AI can do for your brand.</p>
      <CTAButton href="https://calendly.com/edoardo-gambacorta/">
        Book Your Free AI Strategy Session
      </CTAButton>
    </section>
  );
}
