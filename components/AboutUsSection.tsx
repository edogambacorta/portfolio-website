"use client";

import CenteredContainer from "./CenteredContainer";
import { TeamMember } from "./TeamMember";

const teamMembers = [
  {
    name: "Dr. Anna Schmidt",
    role: "AI Research Lead",
    bio: "Ph.D. in Machine Learning, 10+ years experience in AI development.",
    imageUrl: "/images/team/anna-schmidt.jpg"
  },
  {
    name: "Marc Dubois",
    role: "Creative Director",
    bio: "Award-winning creative with a passion for merging art and technology.",
    imageUrl: "/images/team/marc-dubois.jpg"
  },
  {
    name: "Lena Müller",
    role: "Marketing Strategist",
    bio: "Former CMO with expertise in data-driven marketing strategies.",
    imageUrl: "/images/team/lena-muller.jpg"
  },
  {
    name: "Thomas Keller",
    role: "AI Engineer",
    bio: "Specialist in natural language processing and computer vision.",
    imageUrl: "/images/team/thomas-keller.jpg"
  }
];

export function AboutUsSection() {
  return (
    <section id="about" className="py-16 bg-secondary text-primary">
      <CenteredContainer>
        <h2 className="text-4xl font-bold mb-12 text-center text-accent">About Us</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-lg">
          We bring cutting-edge AI innovations to Swiss marketing—faster and more creatively than traditional agencies.
          Our team of expert AI engineers, creative directors, and marketing strategists combine advanced AI technology
          with creative strategy to deliver premium Swiss reliability.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              {...member}
              className="bg-primary text-secondary"
            />
          ))}
        </div>
      </CenteredContainer>
    </section>
  );
}
