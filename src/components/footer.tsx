import { MessageCircle, Instagram, Globe, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #0A0604 0%, #0E0907 100%)", borderTop: "1px solid rgba(212,175,55,0.06)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10">
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
              {/* WhatsApp — big button */}
              <Button
                asChild
                className="bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-lg gap-3 text-base font-semibold h-14 px-5 w-full justify-start transition-all duration-300 hover:scale-[1.02] shadow-[0_6px_24px_rgba(37,211,102,0.3)]"
              >
                <a
                  href="https://wa.me/97471722484"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6" strokeWidth={2.2} />
                  تواصل عبر واتساب
                </a>
              </Button>

              {/* Instagram — enlarged */}
              <a
                href="https://www.instagram.com/lumina.qa"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 h-14 px-4 rounded-lg border border-[rgba(212,175,55,0.12)] hover:border-[rgba(212,175,55,0.35)] transition-all duration-300 hover:pl-5"
                style={{ color: "var(--text-primary)", background: "rgba(22,16,13,0.4)" }}
              >
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-lg text-white transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg, #F58529 0%, #F77737 25%, #E4405F 50%, #C13584 75%, #833AB4 100%)",
                  }}
                >
                  <Instagram className="w-6 h-6" strokeWidth={2.2} />
                </span>
                <span className="text-base font-medium">@lumina.qa</span>
              </a>

              {/* Website — enlarged */}
              <a
                href="https://luminamajestic.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 h-14 px-4 rounded-lg border border-[rgba(212,175,55,0.12)] hover:border-[rgba(212,175,55,0.35)] transition-all duration-300 hover:pl-5"
                style={{ color: "var(--text-primary)", background: "rgba(22,16,13,0.4)" }}
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg text-white transition-transform duration-300 group-hover:scale-110 bg-[var(--accent-primary)]">
                  <Globe className="w-6 h-6" strokeWidth={2.2} />
                </span>
                <span className="text-base font-medium">luminamajestic.com</span>
              </a>
            </div>
          </div>

          {/* QR Code — brand-colored landing page link */}
          <div className="flex flex-col items-center md:items-start">
            <h4
              className="text-xs font-bold tracking-[0.25em] uppercase mb-6"
              style={{ color: "var(--accent-champagne)" }}
            >
              امسح للزيارة
            </h4>
            <a
              href="https://lumina-landing-page-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-transform duration-300 hover:scale-[1.04]"
              aria-label="امسح الباركود لزيارة صفحة LUMINA"
            >
              <div className="relative rounded-2xl p-1.5 border border-[rgba(212,175,55,0.25)] hover:border-[rgba(212,175,55,0.55)] shadow-gold-lg transition-all duration-300">
                <Image
                  src="/lumina-qr.png"
                  alt="باركود LUMINA — امسح للوصول للصفحة"
                  width={170}
                  height={185}
                  className="rounded-xl w-[170px] h-auto block"
                  priority={false}
                />
              </div>
            </a>
            <div className="mt-3 flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
              <ScanLine className="w-3.5 h-3.5" style={{ color: "var(--accent-primary)" }} />
              <span>للوصول السريع عبر الموبايل</span>
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
