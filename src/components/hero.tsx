"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#050505]">
        {/* Radial gold glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full animate-glow-pulse"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.08) 0%, rgba(201,169,110,0.02) 40%, transparent 70%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Top ambient light */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(201,169,110,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-surface)] mb-8">
          <Sparkles className="w-4 h-4" style={{ color: "var(--accent-primary)" }} />
          <span className="text-sm font-medium" style={{ color: "var(--accent-primary)" }}>
            أول علامة متخصصة في قطر
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          <span style={{ color: "var(--text-primary)" }}>فن مُضاء…</span>
          <br />
          <span style={{ color: "var(--accent-primary)" }}>
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
            className="bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-[#050505] rounded-lg gap-2 text-base font-bold h-13 px-8 shadow-glow transition-all duration-300 hover:shadow-glow-lg"
          >
            <a
              href="https://wa.me/97471722484"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              تواصل معنا الآن
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--accent-primary)] text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-[#050505] rounded-lg gap-2 text-base font-medium h-13 px-8 transition-all duration-300"
          >
            <a href="#products">اكتشف تصاميمنا</a>
          </Button>
        </div>

        {/* Decorative line */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-16 h-px" style={{ background: "var(--border-default)" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "var(--accent-primary)" }} />
          <div className="w-16 h-px" style={{ background: "var(--border-default)" }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2" style={{ borderColor: "var(--text-muted)" }}>
          <div className="w-1 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-primary)" }} />
        </div>
      </div>
    </section>
  );
}
