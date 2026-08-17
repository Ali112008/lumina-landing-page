import { MessageCircle, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-surface)] border-t border-[var(--border-default)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span
              className="text-3xl font-bold tracking-wider"
              style={{ color: "var(--accent-primary)" }}
            >
              LUMINA
            </span>
            <p
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-muted)" }}
            >
              أول علامة متخصصة في قطر تقدم لوحات فنية مضيئة مصنوعة من
              البورسلين الفاخر والمُرصّعة بالكريستال والألماس مع إضاءة LED
              ذكية.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "var(--accent-primary)" }}
            >
              روابط سريعة
            </h4>
            <ul className="space-y-3">
              {[
                { label: "الرئيسية", href: "#hero" },
                { label: "من نحن", href: "#about" },
                { label: "المنتجات", href: "#products" },
                { label: "تواصل معنا", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200 hover:text-[var(--accent-primary)]"
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
              className="text-sm font-bold tracking-widest uppercase mb-5"
              style={{ color: "var(--accent-primary)" }}
            >
              تواصل معنا
            </h4>
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/97471722484"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[var(--color-whatsapp)]"
                style={{ color: "var(--text-muted)" }}
              >
                <MessageCircle className="w-5 h-5" />
                <span>واتساب: +974 7172 2484</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/lumina.qa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[var(--color-instagram)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram: @lumina.qa</span>
              </a>

              {/* Website */}
              <a
                href="https://luminamajestic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-[var(--accent-primary)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Globe className="w-5 h-5" />
                <span>luminamajestic.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 border-t border-[var(--border-default)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} LUMINA Majestic. جميع الحقوق محفوظة.
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            متخصصين في اللوحات الفنية المضيئة — قطر 🇶🇦
          </p>
        </div>
      </div>
    </footer>
  );
}
