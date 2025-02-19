"use client";

import CenteredContainer from "./CenteredContainer";
import { BlogPostPreview } from "./BlogPostPreview";

const blogPosts = [
  {
    title: "The Future of AI in Marketing",
    excerpt: "Explore how AI is revolutionizing the marketing landscape and what it means for businesses in 2025 and beyond.",
    imageUrl: "/images/blog/ai-marketing.jpg",
    date: "2025-02-15",
  },
  {
    title: "Ethical Considerations in AI Development",
    excerpt: "A deep dive into the ethical challenges facing AI developers and how to address them responsibly.",
    imageUrl: "/images/blog/ai-ethics.jpg",
    date: "2025-03-01",
  },
  {
    title: "AI-Driven Personalization: A Case Study",
    excerpt: "Learn how our client achieved a 200% increase in customer engagement through AI-powered personalization.",
    imageUrl: "/images/blog/ai-personalization.jpg",
    date: "2025-03-15",
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-16 bg-primary text-secondary">
      <CenteredContainer>
        <h2 className="text-4xl font-bold mb-12 text-center text-accent">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostPreview
              key={index}
              {...post}
              className="bg-secondary text-primary"
            />
          ))}
        </div>
      </CenteredContainer>
    </section>
  );
}
