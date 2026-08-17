import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  name: string;
  image: string;
  price: string;
  originalPrice: string;
}

const products: Product[] = [
  {
    name: "أجنحةٌ الفراشه الماسيّة",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/IMG_3899-600x800.png",
    price: "٦٤٩",
    originalPrice: "٨٤٩",
  },
  {
    name: "الصقرُ الثلجي",
    image:
      "https://luminamajestic.com/wp-content/uploads/2026/01/IMG_3905-600x800.png",
    price: "٦٤٩",
    originalPrice: "٨٤٩",
  },
  {
    name: "طيف النمر",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/IMG_3904-1-600x800.png",
    price: "٦٤٩",
    originalPrice: "٨٤٩",
  },
  {
    name: "دلالُ الغزال",
    image:
      "https://luminamajestic.com/wp-content/uploads/2026/01/IMG_3855-1067x800.png",
    price: "٦٤٩",
    originalPrice: "٨٤٩",
  },
  {
    name: "سحرُ الطاوسُ",
    image:
      "https://luminamajestic.com/wp-content/uploads/2026/01/IMG_3865-1067x800.png",
    price: "٦٤٩",
    originalPrice: "٨٤٩",
  },
  {
    name: "بريقُ الأسد",
    image:
      "https://luminamajestic.com/wp-content/uploads/2021/08/IMG_3848-1067x800.png",
    price: "٦٤٩",
    originalPrice: "٨٤٩",
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-16 md:py-24 bg-lumina-products relative overflow-hidden">
      {/* Decorative orb */}
      <div
        className="absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full animate-orb-3 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-primary)" }}
          >
            منتجات مميزة
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            تصاميم تُضيء ذوقك
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((product, i) => (
            <div
              key={i}
              className="group rounded-xl border border-[var(--border-default)] bg-[rgba(12,12,16,0.5)] backdrop-blur-sm overflow-hidden hover:border-[rgba(201,169,110,0.4)] transition-all duration-500 hover:shadow-glow"
            >
              {/* Image with label overlay */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-[rgba(6,6,8,0.3)] to-transparent" />

                {/* Product name label on image */}
                <div className="absolute bottom-0 right-0 left-0 p-4">
                  <h3 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {product.name}
                  </h3>
                </div>
              </div>

              {/* Info bar */}
              <div className="p-4 flex items-center justify-between">
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

                {/* WhatsApp inquiry button */}
                <Button
                  asChild
                  size="sm"
                  className="bg-[var(--color-whatsapp)] hover:bg-[#20BD5A] text-white rounded-lg gap-1.5 text-xs font-medium h-8 px-3 transition-all duration-200 hover:scale-105"
                >
                  <a
                    href={`https://wa.me/97471722484?text=${encodeURIComponent(`مرحباً، أرغب في الاستفسار عن لوحة "${product.name}"`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    استفسار
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-10">
          <a
            href="https://luminamajestic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 hover:underline"
            style={{ color: "var(--accent-primary)" }}
          >
            مشاهدة جميع التصاميم ←
          </a>
        </div>
      </div>
    </section>
  );
}
