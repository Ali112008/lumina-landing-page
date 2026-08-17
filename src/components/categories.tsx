import Image from "next/image";

interface Category {
  nameAr: string;
  nameEn: string;
  image: string;
}

const categories: Category[] = [
  {
    nameAr: "حيوانات",
    nameEn: "ANIMALS",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-4.png",
  },
  {
    nameAr: "مركبات فارهه",
    nameEn: "LUXURY VEHICLE",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-2-1.png",
  },
  {
    nameAr: "فن إسلامي",
    nameEn: "ISLAMIC ART",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-1-1.png",
  },
  {
    nameAr: "واجهه المدينه",
    nameEn: "SKYLINE",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-3.png",
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-primary)" }}
          >
            الفئات المميزة
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            مجموعات LUMINA
          </h2>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <Image
                src={cat.image}
                alt={cat.nameAr}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                unoptimized
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 right-0 left-0 p-5">
                <div
                  className="text-xs font-medium tracking-widest uppercase mb-1"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {cat.nameEn}
                </div>
                <h3
                  className="text-xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {cat.nameAr}
                </h3>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--accent-primary)] transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
