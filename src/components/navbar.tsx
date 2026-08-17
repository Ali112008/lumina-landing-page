"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "من نحن", href: "#about" },
  { label: "التصاميم", href: "#products" },
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
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0A0604]/95 backdrop-blur-xl border-b border-[rgba(212,175,55,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo — luxury wordmark */}
          <a href="#hero" className="flex items-center gap-2.5">
            <span
              className="text-xl sm:text-2xl font-bold tracking-[0.25em] uppercase"
              style={{ color: "var(--accent-primary)" }}
            >
              LUMINA
            </span>
            <span
              className="hidden sm:inline text-[10px] font-medium tracking-[0.15em] uppercase mt-1"
              style={{ color: "var(--accent-champagne)" }}
            >
              Majestic
            </span>
          </a>

          {/* Desktop Nav — elegant links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA — refined */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              className="bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-lg gap-2 text-sm font-medium h-10 px-5 transition-all duration-300 hover:scale-105"
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
            className="md:hidden p-2 transition-colors"
            style={{ color: "var(--text-primary)" }}
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

      {/* Mobile Menu — luxury full screen */}
      {isMobileOpen && (
        <div className="md:hidden bg-[#0A0604]/98 backdrop-blur-xl border-t border-[rgba(212,175,55,0.08)]">
          <div className="px-6 py-8 space-y-5">
            {/* Mobile logo */}
            <div className="pb-4 mb-4 border-b border-[rgba(212,175,55,0.1)]">
              <span className="text-2xl font-bold tracking-[0.25em]" style={{ color: "var(--accent-primary)" }}>
                LUMINA
              </span>
              <span className="ml-2 text-[10px] tracking-[0.15em] uppercase" style={{ color: "var(--accent-champagne)" }}>
                Majestic
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="block text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors text-lg font-medium py-2 tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-xl gap-2 text-base font-bold h-13 mt-6"
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
