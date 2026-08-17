"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/97471722484"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white shadow-lg animate-wa-pulse transition-all duration-300 hover:scale-110 md:w-16 md:h-16"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
    </a>
  );
}
