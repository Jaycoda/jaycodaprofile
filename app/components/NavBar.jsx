"use client";

import { useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-gray-800 mb-2 h-14 flex items-center justify-between px-4 sticky top-0 z-50">
      {/* Logo Placeholder */}
      <div className="text-xl font-bold text-white">LOGO</div>
      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-8 text-white">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/setting">Setting</Link>
      </div>
      {/* Mobile Burger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={handleMenuToggle}
          className="focus:outline-none text-white"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <span className="text-2xl">&#10005;</span> // X icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Burger icon
          )}
        </button>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 md:hidden shadow-lg animate-fade-in z-40">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-white text-lg">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white text-lg">About</Link>
          <Link href="/setting" onClick={() => setMenuOpen(false)} className="text-white text-lg">Setting</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
