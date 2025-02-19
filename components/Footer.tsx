"use client";

import CenteredContainer from "./CenteredContainer";

export function Footer() {
  return (
    <footer className="py-8 bg-black text-white">
      <CenteredContainer>
        <nav className="mb-4 flex flex-wrap justify-center">
          <a href="#" className="mx-2 my-1 hover:text-[var(--color-accent)]">Home</a>
          <a href="#" className="mx-2 my-1 hover:text-[var(--color-accent)]">Services</a>
          <a href="#" className="mx-2 my-1 hover:text-[var(--color-accent)]">Portfolio</a>
          <a href="#" className="mx-2 my-1 hover:text-[var(--color-accent)]">Insights</a>
          <a href="#" className="mx-2 my-1 hover:text-[var(--color-accent)]">About</a>
          <a href="#" className="mx-2 my-1 hover:text-[var(--color-accent)]">Contact</a>
        </nav>
        <div className="text-center">
          <p>&copy; 2025 TheFactory AI Agency. All rights reserved.</p>
          <p className="mt-2">Powered by Swiss Innovation</p>
        </div>
      </CenteredContainer>
    </footer>
  );
}
