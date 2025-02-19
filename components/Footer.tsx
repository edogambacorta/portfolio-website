"use client";

import CenteredContainer from "./CenteredContainer";

export function Footer() {
  return (
    <footer className="py-12 bg-primary text-secondary">
      <CenteredContainer>
        <nav className="mb-8 flex flex-wrap justify-center">
          <a href="#" className="mx-4 my-2 hover:text-accent transition-colors duration-200">Home</a>
          <a href="#services" className="mx-4 my-2 hover:text-accent transition-colors duration-200">Services</a>
          <a href="#portfolio" className="mx-4 my-2 hover:text-accent transition-colors duration-200">Portfolio</a>
          <a href="#insights" className="mx-4 my-2 hover:text-accent transition-colors duration-200">Insights</a>
          <a href="#about" className="mx-4 my-2 hover:text-accent transition-colors duration-200">About</a>
          <a href="#contact" className="mx-4 my-2 hover:text-accent transition-colors duration-200">Contact</a>
        </nav>
        <div className="text-center">
          <p className="text-sm">&copy; 2025 TheFactory AI Agency. All rights reserved.</p>
          <p className="mt-2 text-sm text-accent">Powered by Swiss Innovation</p>
        </div>
      </CenteredContainer>
    </footer>
  );
}
