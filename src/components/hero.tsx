"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lumina-hero texture-noise"
    >
      {/* Cinematic ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary orange glow — dramatic center light */}
        <div
          className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full animate-orb-1"
          style={{ background: "radial-gradient(circle, rgba(232,89,12,0.12) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[50%] right-[5%] w-[600px] h-[600px] rounded-full animate-orb-2"
          style={{ background: "radial-gradient(circle, rgba(232,89,12,0.06) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-full animate-orb-3"
          style={{ background: "radial-gradient(circle, rgba(232,89,12,0.08) 0%, transparent 60%)" }}
        />
        {/* Gold ambient accent */}
        <div
          className="absolute top-[15%] right-[20%] w-[350px] h-[350px] rounded-full animate-orb-3"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 60%)" }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(232,89,12,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,89,12,0.4) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-12">
        {/* LUMINA Logo — The Focal Point */}
        <div className="mb-10 animate-text-reveal">
          <div className="relative inline-block">
            {/* Glow behind logo */}
            <div
              className="absolute inset-0 blur-3xl scale-150"
              style={{ background: "radial-gradient(circle, rgba(232,89,12,0.2) 0%, transparent 60%)" }}
            />
            <Image
              src="https://luminamajestic.com/wp-content/uploads/2025/10/cropped-Logo-description_20250909_135324_0000_page-0001.jpg"
              alt="LUMINA Majestic"
              width={180}
              height={180}
              className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mx-auto object-contain animate-logo-glow"
              unoptimized
            />
          </div>
          {/* Brand name beneath logo */}
          <h2
            className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.3em] uppercase"
            style={{ color: "var(--accent-primary)" }}
          >
            LUMINA
          </h2>
          <p
            className="mt-1 text-xs sm:text-sm tracking-[0.25em] uppercase"
            style={{ color: "var(--accent-champagne)" }}
          >
            Majestic
          </p>
        </div>

        {/* Ornamental gold divider */}
        <div className="ornament-divider mb-8 animate-text-reveal" style={{ animationDelay: "0.2s" }}>
          <div className="w-2 h-2 rotate-45" style={{ background: "var(--accent-gold)" }} />
        </div>

        {/* Headline — dramatic luxury typography */}
        <div className="animate-text-reveal" style={{ animationDelay: "0.4s" }}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
            <span style={{ color: "var(--text-primary)" }}>فن مُضاء</span>
            <br />
            <span
              className="inline-block bg-gradient-to-l from-[#E8590C] via-[#F06E1F] to-[#E8590C] bg-clip-text text-transparent animate-gradient-shift"
              style={{ backgroundSize: "200% 200%" }}
            >
              يُحوّل جدرانك
            </span>
            <br />
            <span style={{ color: "var(--text-primary)" }}>
              إلى تجربة{" "}
              <span style={{ color: "var(--accent-gold)" }}>فاخرة</span>
            </span>
          </h1>
        </div>

        {/* Subheadline */}
        <p
          className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed animate-text-reveal"
          style={{ color: "var(--text-muted)", animationDelay: "0.6s" }}
        >
          لوحات فنية مضيئة مصنوعة من بورسلين فاخر، مصممة خصيصًا لتعكس هوية
          المكان وشخصية صاحبه. كل قطعة من{" "}
          <span className="font-bold" style={{ color: "var(--accent-primary)" }}>
            LUMINA
          </span>{" "}
          تُقدَّم كإصدار خاص لا يتكرر.
        </p>

        {/* CTAs — premium buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-text-reveal" style={{ animationDelay: "0.8s" }}>
          <Button
            asChild
            className="bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-xl gap-2 text-base font-bold h-14 px-10 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <a
              href="https://wa.me/97471722484"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل معنا عبر واتساب
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--accent-gold)] text-[var(--accent-champagne)] hover:bg-[rgba(212,175,55,0.1)] hover:text-[var(--accent-gold)] hover:border-[var(--accent-gold)] rounded-xl gap-2 text-base font-medium h-14 px-10 transition-all duration-300 hover:scale-105 shadow-gold"
          >
            <a href="#products">اكتشف التصاميم</a>
          </Button>
        </div>

        {/* Luxury trust line */}
        <div className="mt-14 flex items-center justify-center gap-3 animate-text-reveal" style={{ animationDelay: "1s" }}>
          <div className="w-12 h-px bg-gradient-to-l from-[var(--accent-gold)] to-transparent" />
          <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase" style={{ color: "var(--accent-champagne)" }}>
            بورسلين &middot; كريستال &middot; LED
          </span>
          <div className="w-12 h-px bg-gradient-to-r from-[var(--accent-gold)] to-transparent" />
        </div>
      </div>

      {/* Scroll indicator — elegant */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-5 h-9 rounded-full border flex items-start justify-center pt-2" style={{ borderColor: "rgba(212,175,55,0.25)" }}>
          <div className="w-1 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-champagne)" }} />
        </div>
      </div>
    </section>
  );
}
