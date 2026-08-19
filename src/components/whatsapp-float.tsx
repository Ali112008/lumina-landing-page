"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Instagram, Globe, X } from "lucide-react";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">
      {/* Expanded contact buttons */}
      <div
        className={`flex flex-col items-start gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/97471722484"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
          className="group flex items-center gap-3"
        >
          <span className="order-2 text-sm font-medium text-white bg-[#0E0907]/95 backdrop-blur px-4 py-2 rounded-full border border-[rgba(212,175,55,0.25)] shadow-gold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
            واتساب
          </span>
          <span className="order-1 flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] animate-wa-pulse transition-all duration-300 hover:scale-110">
            <MessageCircle className="w-9 h-9" strokeWidth={2.2} />
          </span>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/lumina.qa"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تابعنا على إنستجرام"
          className="group flex items-center gap-3"
        >
          <span className="order-2 text-sm font-medium text-white bg-[#0E0907]/95 backdrop-blur px-4 py-2 rounded-full border border-[rgba(212,175,55,0.25)] shadow-gold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
            إنستجرام
          </span>
          <span
            className="order-1 flex items-center justify-center w-16 h-16 rounded-full text-white shadow-[0_8px_30px_rgba(228,64,95,0.35)] transition-all duration-300 hover:scale-110"
            style={{
              background:
                "linear-gradient(135deg, #F58529 0%, #F77737 25%, #E4405F 50%, #C13584 75%, #833AB4 100%)",
            }}
          >
            <Instagram className="w-9 h-9" strokeWidth={2.2} />
          </span>
        </a>

        {/* Website */}
        <a
          href="https://luminamajestic.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="زيارة الموقع"
          className="group flex items-center gap-3"
        >
          <span className="order-2 text-sm font-medium text-white bg-[#0E0907]/95 backdrop-blur px-4 py-2 rounded-full border border-[rgba(212,175,55,0.25)] shadow-gold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:inline-block">
            الموقع
          </span>
          <span className="order-1 flex items-center justify-center w-16 h-16 rounded-full bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white shadow-[0_8px_30px_rgba(232,89,12,0.4)] transition-all duration-300 hover:scale-110">
            <Globe className="w-9 h-9" strokeWidth={2.2} />
          </span>
        </a>
      </div>

      {/* Toggle button — main FAB */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "إغلاق قائمة التواصل" : "افتح قائمة التواصل"}
        aria-expanded={open}
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white shadow-[0_10px_40px_rgba(232,89,12,0.55)] transition-all duration-300 hover:scale-110"
      >
        {open ? (
          <X className="w-9 h-9" strokeWidth={2.4} />
        ) : (
          <MessageCircle className="w-9 h-9" strokeWidth={2.4} />
        )}
      </button>
    </div>
  );
}
