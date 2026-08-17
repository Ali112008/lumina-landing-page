import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-lumina-cta relative overflow-hidden texture-noise">
      {/* Cinematic ambient light */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full animate-orb-1"
          style={{ background: "radial-gradient(circle, rgba(232,89,12,0.08) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] rounded-full animate-orb-2"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[50%] right-[5%] w-[300px] h-[300px] rounded-full animate-orb-3"
          style={{ background: "radial-gradient(circle, rgba(37,211,102,0.03) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span
          className="inline-block text-xs font-medium tracking-[0.25em] uppercase mb-5"
          style={{ color: "var(--accent-champagne)" }}
        >
          تواصل معنا
        </span>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          اجعل جدرانك تحكي{" "}
          <span style={{ color: "var(--accent-gold)" }}>قصة التميز</span>
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          تواصل معنا عبر واتساب للاستفسار عن التصاميم المتاحة أو لطلب تصميم
          خصيص يعكس ذوقك. كل قطعة من LUMINA تُصنع بعناية فائقة لتكون إصدارًا
          حصريًا لا يتكرر.
        </p>

        {/* WhatsApp CTA — premium */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            asChild
            className="bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-xl gap-3 text-lg font-bold h-15 px-12 shadow-lg transition-all duration-300 hover:scale-105 animate-wa-pulse"
          >
            <a
              href="https://wa.me/97471722484"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
              تواصل عبر واتساب الآن
            </a>
          </Button>
        </div>

        {/* Social links — refined */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <a
            href="https://www.instagram.com/lumina.qa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm font-medium transition-all duration-300 hover:gap-3"
            style={{ color: "var(--text-muted)" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.773 1.682 4.92 4.92.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.682 4.773-4.92 4.92-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.253-.149-4.773-1.682-4.92-4.92-.058-1.265-.07-1.645-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.668-4.772 4.92-4.92 1.265-.06 1.645-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span>@lumina.qa</span>
          </a>
          <a
            href="https://luminamajestic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-sm font-medium transition-all duration-300 hover:gap-3"
            style={{ color: "var(--text-muted)" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
            <span>luminamajestic.com</span>
          </a>
        </div>

        {/* Ornamental gold separator */}
        <div className="ornament-divider mt-14">
          <div className="w-2 h-2 rotate-45" style={{ background: "var(--accent-gold)" }} />
        </div>
      </div>
    </section>
  );
}
