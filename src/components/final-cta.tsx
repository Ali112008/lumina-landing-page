import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-[var(--bg-base)] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span
          className="inline-block text-sm font-medium tracking-widest uppercase mb-4"
          style={{ color: "var(--accent-primary)" }}
        >
          تواصل معنا
        </span>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          اجعل جدرانك تحكي قصة التميز
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          تواصل معنا عبر واتساب للاستفسار عن التصاميم المتاحة أو لطلب تصميم
          خصيص يعكس ذوقك. كل قطعة من LUMINA تُصنع بعناية فائقة لتكون إصدارًا
          حصريًا لا يتكرر.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <Button
            asChild
            className="bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-lg gap-3 text-lg font-bold h-14 px-10 animate-wa-pulse"
          >
            <a
              href="https://wa.me/97471722484"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-6 h-6" />
              تواصل عبر واتساب
            </a>
          </Button>
        </div>

        {/* Phone number */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <Phone className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
          <span
            className="text-lg font-medium tracking-wider"
            style={{ color: "var(--text-primary)" }}
          >
            +974 7172 2484
          </span>
        </div>

        {/* Decorative separator */}
        <div className="flex items-center justify-center gap-4">
          <div
            className="w-24 h-px"
            style={{ background: "var(--border-default)" }}
          />
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: "var(--accent-primary)" }}
          />
          <div
            className="w-24 h-px"
            style={{ background: "var(--border-default)" }}
          />
        </div>
      </div>
    </section>
  );
}
