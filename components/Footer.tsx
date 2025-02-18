"use client";

export function Footer() {
  return (
    <footer className="py-8 px-8 bg-black text-white text-center">
      <nav className="mb-4">
        <a href="#" className="mx-2 hover:text-[var(--color-accent)]">Home</a>
        <a href="#" className="mx-2 hover:text-[var(--color-accent)]">Services</a>
        <a href="#" className="mx-2 hover:text-[var(--color-accent)]">Portfolio</a>
        <a href="#" className="mx-2 hover:text-[var(--color-accent)]">Insights</a>
        <a href="#" className="mx-2 hover:text-[var(--color-accent)]">About</a>
        <a href="#" className="mx-2 hover:text-[var(--color-accent)]">Contact</a>
      </nav>
      <p>&copy; 2025 TheFactory AI Agency. All rights reserved.</p>
      <p className="mt-2">Powered by Swiss Innovation</p>
    </footer>
  );
}
