"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-lumina-hero"
    >
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[20%] left-[15%] w-[300px] h-[300px] rounded-full animate-orb-1"
          style={{ background: "radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full animate-orb-2"
          style={{ background: "radial-gradient(circle, rgba(10,22,40,0.3) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[10%] left-[40%] w-[250px] h-[250px] rounded-full animate-orb-3"
          style={{ background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.4) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-default)] bg-[rgba(201,169,110,0.06)] mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4" style={{ color: "var(--accent-primary)" }} />
          <span className="text-sm font-medium" style={{ color: "var(--accent-primary)" }}>
            أول علامة متخصصة في قطر
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span style={{ color: "var(--text-primary)" }}>فن مُضاء…</span>
          <br />
          <span className="inline-block bg-gradient-to-l from-[#C9A96E] via-[#D9BC84] to-[#C9A96E] bg-clip-text text-transparent animate-gradient-shift"
            style={{ backgroundSize: "200% 200%" }}
          >
            يُحوّل جدرانك
          </span>
          <br />
          <span style={{ color: "var(--text-primary)" }}>إلى تجربة فاخرة</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--text-muted)" }}>
          لوحات فنية مضيئة مصنوعة من بورسلين فاخر، مصممة خصيصًا لتعكس هوية
          المكان وشخصية صاحبه. كل قطعة من{" "}
          <span className="font-bold" style={{ color: "var(--accent-primary)" }}>
            LUMINA
          </span>{" "}
          تُقدَّم كإصدار خاص لا يتكرر.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            className="bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-xl gap-2 text-base font-bold h-13 px-8 shadow-lg transition-all duration-300 hover:scale-105"
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
            className="border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-[#060608] rounded-xl gap-2 text-base font-medium h-13 px-8 transition-all duration-300 hover:scale-105"
          >
            <a href="#products">اكتشف تصاميمنا</a>
          </Button>
        </div>

        {/* Decorative */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-16 h-px bg-gradient-to-l from-[var(--accent-primary)] to-transparent" />
          <div className="w-2 h-2 rounded-full animate-glow-pulse" style={{ background: "var(--accent-primary)" }} />
          <div className="w-16 h-px bg-gradient-to-r from-[var(--accent-primary)] to-transparent" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor: "rgba(201,169,110,0.3)" }}>
          <div className="w-1 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-primary)" }} />
        </div>
      </div>
    </section>
  );
}
