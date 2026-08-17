import { MessageCircle, Instagram, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0A0604 0%, #0E0907 100%)", borderTop: "1px solid rgba(212,175,55,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <span
              className="text-3xl font-bold tracking-[0.25em] uppercase"
              style={{ color: "var(--accent-primary)" }}
            >
              LUMINA
            </span>
            <span
              className="ml-2 text-xs tracking-[0.15em] uppercase"
              style={{ color: "var(--accent-champagne)" }}
            >
              Majestic
            </span>
            <p
              className="mt-5 text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-muted)" }}
            >
              أول علامة متخصصة في قطر تقدم لوحات فنية مضيئة مصنوعة من
              البورسلين الفاخر والمُرصّعة بالكريستال والألماس مع إضاءة LED
              ذكية.
            </p>
            {/* Gold divider */}
            <div className="w-16 h-px mt-6" style={{ background: "linear-gradient(90deg, var(--accent-gold), transparent)" }} />
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "var(--accent-champagne)" }}
            >
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "#hero" },
                { label: "من نحن", href: "#about" },
                { label: "التصاميم", href: "#products" },
                { label: "تواصل معنا", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "var(--accent-champagne)" }}
            >
              تواصل معنا
            </h4>
            <div className="space-y-4">
              {/* WhatsApp */}
              <Button
                asChild
                className="bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-lg gap-2 text-sm font-medium h-10 px-4 w-full justify-start transition-all duration-300 hover:scale-[1.02]"
              >
                <a
                  href="https://wa.me/97471722484"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  تواصل عبر واتساب
                </a>
              </Button>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/lumina.qa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-all duration-300 hover:gap-4"
                style={{ color: "var(--text-muted)" }}
              >
                <Instagram className="w-5 h-5" />
                <span>@lumina.qa</span>
              </a>

              {/* Website */}
              <a
                href="https://luminamajestic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-all duration-300 hover:gap-4"
                style={{ color: "var(--text-muted)" }}
              >
                <Globe className="w-5 h-5" />
                <span>luminamajestic.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar — refined */}
        <div
          className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(212,175,55,0.06)" }}
        >
          <p className="text-xs tracking-wide" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} LUMINA Majestic. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs tracking-wide" style={{ color: "var(--accent-champagne)" }}>
            متخصصين في اللوحات الفنية المضيئة &mdash; قطر
          </p>
        </div>
      </div>
    </footer>
  );
}
