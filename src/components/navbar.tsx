"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "المنتجات", href: "#products" },
  { label: "تواصل معنا", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-[#1E1E1E]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <span
              className="font-[var(--font-playfair)] text-2xl sm:text-3xl font-bold tracking-wider"
              style={{ color: "var(--accent-primary)" }}
            >
              LUMINA
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-lg gap-2 text-sm font-medium h-10 px-5"
            >
              <a
                href="https://wa.me/97471722484"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                واتساب
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[var(--text-primary)] p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="القائمة"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#050505]/98 backdrop-blur-lg border-t border-[#1E1E1E]">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors text-base font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-lg gap-2 text-base font-medium h-12 mt-4"
            >
              <a
                href="https://wa.me/97471722484"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل عبر واتساب
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
