import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  image: string;
  price: string;
  originalPrice: string;
  storeUrl: string;
}

const products: Product[] = [
  {
    name: "أجنحةٌ الفراشه الماسيّة",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/IMG_3899-600x800.png",
    price: "649",
    originalPrice: "849",
    storeUrl: "https://luminamajestic.com/product/هيبةُ-الخريف/",
  },
  {
    name: "الصقرُ الثلجي",
    image: "/IMG_3902-scaled.webp",
    price: "649",
    originalPrice: "849",
    storeUrl: "https://luminamajestic.com/product/الصقر-الثلجي/",
  },
  {
    name: "طيف النمر",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/IMG_3904-1-600x800.png",
    price: "649",
    originalPrice: "849",
    storeUrl: "https://luminamajestic.com/product/صهيل-الأفق/",
  },
  {
    name: "دلالُ الغزال",
    image:
      "https://luminamajestic.com/wp-content/uploads/2026/01/IMG_3855-1067x800.png",
    price: "649",
    originalPrice: "849",
    storeUrl: "https://luminamajestic.com/product/شموخُ-الغزال/",
  },
  {
    name: "سحرُ الطاوسُ",
    image:
      "https://luminamajestic.com/wp-content/uploads/2026/01/IMG_3865-1067x800.png",
    price: "649",
    originalPrice: "849",
    storeUrl: "https://luminamajestic.com/product/رونقُ-الطاووس/",
  },
  {
    name: "بريقُ الأسد",
    image: "/IMG_3940-scaled.webp",
    price: "649",
    originalPrice: "849",
    storeUrl: "https://luminamajestic.com/product/جلالةُ-الأسد/",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 md:py-28 bg-lumina-products relative overflow-hidden texture-noise">
      {/* Ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[5%] right-[10%] w-[400px] h-[400px] rounded-full animate-orb-3"
          style={{ background: "radial-gradient(circle, rgba(232,89,12,0.08) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] rounded-full animate-orb-1"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — luxury gallery feel */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--accent-champagne)" }}
          >
            المجموعة الحصرية
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            تصاميم تُضيء{" "}
            <span style={{ color: "var(--accent-gold)" }}>ذوقك</span>
          </h2>
          {/* Ornamental divider */}
          <div className="ornament-divider mt-6">
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--accent-gold)" }} />
          </div>
        </div>

        {/* Product grid — luxury art pieces */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="group luxury-card relative rounded-2xl overflow-hidden transition-all duration-700"
              style={{
                border: "1px solid rgba(212,175,55,0.08)",
                background: "linear-gradient(180deg, rgba(14,9,7,0.7) 0%, rgba(10,6,4,0.9) 100%)",
              }}
            >
              {/* Art piece frame — gold inner border */}
              <div className="absolute inset-[3px] rounded-2xl pointer-events-none z-20"
                style={{ border: "1px solid rgba(212,175,55,0.06)", transition: "border-color 0.5s" }}
              />
              <div className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ border: "1px solid rgba(212,175,55,0.2)" }}
              />

              {/* Image — art piece presentation */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                {/* Dramatic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0604] via-[rgba(10,6,4,0.4)] to-transparent" />

                {/* Hover light effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(232,89,12,0.04) 0%, transparent 70%)" }}
                />

                {/* Product name — elegant typography */}
                <div className="absolute bottom-0 right-0 left-0 p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-1" style={{ color: "var(--text-primary)" }}>
                    {product.name}
                  </h3>
                  {/* Limited edition label */}
                  <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--accent-champagne)" }}>
                    إصدار محدود
                  </span>
                </div>
              </div>

              {/* Info bar — refined luxury */}
              <div className="p-4 md:p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="text-lg font-bold"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    {product.price} ر.ق
                  </span>
                  <span
                    className="text-sm line-through"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {product.originalPrice} ر.ق
                  </span>
                </div>

                {/* View in store — refined button */}
                <Button
                  asChild
                  size="sm"
                  className="rounded-lg gap-1.5 text-xs font-medium h-9 px-4 transition-all duration-300 hover:scale-105"
                  style={{ background: "var(--accent-primary)", color: "#fff" }}
                >
                  <a
                    href={product.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    مشاهدة في المتجر
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA — luxury style */}
        <div className="text-center mt-14">
          <a
            href="https://luminamajestic.com/shop/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-medium transition-all duration-300 hover:gap-4"
            style={{ color: "var(--accent-champagne)" }}
          >
            <span className="w-8 h-px" style={{ background: "var(--accent-gold)" }} />
            مشاهدة جميع التصاميم
            <span className="w-8 h-px" style={{ background: "var(--accent-gold)" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
