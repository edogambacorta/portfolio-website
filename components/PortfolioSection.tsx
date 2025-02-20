"use client";

import { useRef } from "react";
import CenteredContainer from "./CenteredContainer";
import { PortfolioItem } from "./PortfolioItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const portfolioItems = [
  {
    title: "AI-Driven Marketing Campaign",
    description: "Leveraged AI to optimize ad targeting and increase ROI by 250%",
    imageUrl: "/images/portfolio/project1.jpg",
  },
  {
    title: "Chatbot Implementation",
    description: "Developed an AI chatbot that improved customer satisfaction by 40%",
    imageUrl: "/images/portfolio/project2.jpg",
  },
  {
    title: "Predictive Analytics Solution",
    description: "Created a predictive model that increased sales forecasting accuracy by 30%",
    imageUrl: "/images/portfolio/project3.jpg",
  },
  {
    title: "AI-Generated Content Strategy",
    description: "Implemented AI-generated content that boosted engagement rates by 150%",
    imageUrl: "/images/portfolio/project4.jpg",
  },
  {
    title: "Machine Learning for Personalization",
    description: "Developed a recommendation engine that increased cross-sell revenue by 60%",
    imageUrl: "/images/portfolio/project5.jpg",
  },
];

export function PortfolioSection() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section id="portfolio" className="py-16 bg-secondary text-primary">
      <CenteredContainer>
        <h2 className="text-4xl font-bold mb-12 text-center text-primary font-sans">Portfolio</h2>
        <p className="text-center mb-12 text-lg font-sans">Showcasing our AI-driven projects and success stories.</p>
        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {portfolioItems.map((item, index) => (
              <div key={index} className="px-2">
                <PortfolioItem
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  className="bg-primary text-secondary"
                />
              </div>
            ))}
          </Slider>
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-accent text-secondary p-2 rounded-full z-10"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-accent text-secondary p-2 rounded-full z-10"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </CenteredContainer>
    </section>
  );
}
