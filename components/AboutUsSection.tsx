"use client";

import CenteredContainer from "./CenteredContainer";
import { TeamMember } from "./TeamMember";

const teamMembers = [
  {
    name: "Edoardo Gambacorta",
    role: "Sales & Marketing",
    bio: "MSc in Mechanical Engineering & Entrepreneurship, focusing on AI-driven marketing solutions."
  },
  {
    name: "Simon Siegenthaler",
    role: "AI Engineer",
    bio: "Specialist in cybersecurity, front-end development & AI workflow engineering."
  }
];

export function AboutUsSection() {
  return (
    <section id="about" className="py-16 bg-secondary text-primary">
      <CenteredContainer>
        <h2 className="text-4xl font-bold mb-12 text-center text-accent">About Us</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg">
          We bring cutting-edge AI innovations to Swiss marketing—faster and more creatively than traditional agencies.
          Our team combines expertise in AI-driven marketing solutions, sales strategies, and advanced AI engineering
          to deliver premium Swiss reliability and innovative solutions tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              className="bg-primary text-secondary"
            />
          ))}
        </div>
      </CenteredContainer>
    </section>
  );
}
