"use client";

import CenteredContainer from "./CenteredContainer";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16">
      <CenteredContainer>
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio</h2>
        <p className="text-center mb-8">Showcasing our AI-driven projects and success stories.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add portfolio items here */}
          {/* Example:
          <PortfolioItem
            title="AI-Driven Marketing Campaign"
            description="Leveraged AI to optimize ad targeting and increase ROI by 250%"
            imageUrl="/images/portfolio/project1.jpg"
          />
          */}
        </div>
      </CenteredContainer>
    </section>
  );
}
