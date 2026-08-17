import Image from "next/image";

interface Product {
  name: string;
  image: string;
  price: string;
  originalPrice: string;
}

const products: Product[] = [
  {
    name: "الصقرُ الثلجي",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/IMG_3899-600x800.png",
    price: "٦٤٩",
    originalPrice: "٨٤٩",
  },
  {
    name: "أجنحةٌ الفراشه الماسيّة",
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
    <section id="products" className="py-16 md:py-24 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="group rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden hover:border-[var(--accent-primary)] transition-all duration-300 hover:shadow-glow"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-4 md:p-5">
                <h3
                  className="text-base font-bold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {product.name}
                </h3>
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
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
            style={{ color: "var(--accent-primary)" }}
          >
            مشاهدة جميع التصاميم ←
          </a>
        </div>
      </div>
    </section>
  );
}
