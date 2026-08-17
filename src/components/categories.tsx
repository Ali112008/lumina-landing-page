import Image from "next/image";

interface Category {
  nameAr: string;
  nameEn: string;
  image: string;
  storeUrl: string;
}

const categories: Category[] = [
  {
    nameAr: "مركبات فارهة",
    nameEn: "LUXURY VEHICLE",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-4.png",
    storeUrl: "https://luminamajestic.com/product-category/⁠سيارات-فارهه-luxury-cars/",
  },
  {
    nameAr: "فن إسلامي",
    nameEn: "ISLAMIC ART",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-2-1.png",
    storeUrl: "https://luminamajestic.com/product-category/⁠فن-إسلامي-islamic-art/",
  },
  {
    nameAr: "واجهة المدينة",
    nameEn: "SKYLINE",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-1-1.png",
    storeUrl: "https://luminamajestic.com/product-category/واجهه-المدينه-skyline/",
  },
  {
    nameAr: "طبيعة فنية",
    nameEn: "ARTISTIC NATURE",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-3.png",
    storeUrl: "https://luminamajestic.com/product-category/⁠الطبيعه-الفنيه-artistic-nature/",
  },
];

export default function Categories() {
  return (
    <section className="py-20 md:py-28 bg-lumina-categories relative overflow-hidden texture-noise">
      {/* Ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[40%] left-[5%] w-[300px] h-[300px] rounded-full animate-orb-1"
          style={{ background: "radial-gradient(circle, rgba(232,89,12,0.05) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] rounded-full animate-orb-2"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--accent-champagne)" }}
          >
            الفئات المميزة
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            مجموعات{" "}
            <span style={{ color: "var(--accent-gold)" }}>LUMINA</span>
          </h2>
          {/* Ornamental divider */}
          <div className="ornament-divider mt-6">
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--accent-gold)" }} />
          </div>
        </div>

        {/* Categories grid — gallery presentation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {categories.map((cat, i) => (
            <a
              key={i}
              href={cat.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer luxury-card block"
            >
              <Image
                src={cat.image}
                alt={cat.nameAr}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                unoptimized
              />

              {/* Dramatic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0604]/95 via-[#0A0604]/30 to-transparent" />

              {/* Hover light */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(232,89,12,0.06) 0%, transparent 70%)" }}
              />

              {/* Text */}
              <div className="absolute bottom-0 right-0 left-0 p-5 md:p-6">
                <div
                  className="text-[10px] font-medium tracking-[0.2em] uppercase mb-1.5"
                  style={{ color: "var(--accent-champagne)" }}
                >
                  {cat.nameEn}
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cat.nameAr}
                </h3>
              </div>

              {/* Gold frame on hover */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ border: "1px solid rgba(212,175,55,0.2)" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
