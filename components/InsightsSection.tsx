"use client";

import CenteredContainer from "./CenteredContainer";

export function InsightsSection() {
  return (
    <section id="insights" className="py-16 bg-gray-900">
      <CenteredContainer>
        <h2 className="text-3xl font-bold mb-8 text-center">Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add blog post previews here */}
          {/* Example:
          <BlogPostPreview
            title="The Future of AI in Marketing"
            excerpt="Explore how AI is revolutionizing the marketing landscape..."
            imageUrl="/images/blog/ai-marketing.jpg"
            date="2025-02-15"
          />
          */}
        </div>
      </CenteredContainer>
    </section>
  );
}
