"use client";

import CenteredContainer from "./CenteredContainer";

export function AboutUsSection() {
  return (
    <section id="about" className="py-16">
      <CenteredContainer>
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          We bring cutting-edge AI innovations to Swiss marketing—faster and more creatively than traditional agencies.
          Our team of expert AI engineers, creative directors, and marketing strategists combine advanced AI technology
          with creative strategy to deliver premium Swiss reliability.
        </p>
        {/* Add team member information or company details here if needed */}
      </CenteredContainer>
    </section>
  );
}
