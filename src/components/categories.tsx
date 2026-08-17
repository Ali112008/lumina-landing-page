import Image from "next/image";

interface Category {
  nameAr: string;
  nameEn: string;
  image: string;
}

const categories: Category[] = [
  {
    nameAr: "مركبات فارهة",
    nameEn: "LUXURY VEHICLE",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-4.png",
  },
  {
    nameAr: "فن إسلامي",
    nameEn: "ISLAMIC ART",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-2-1.png",
  },
  {
    nameAr: "واجهة المدينة",
    nameEn: "SKYLINE",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-1-1.png",
  },
  {
    nameAr: "حيوانات",
    nameEn: "ANIMALS",
    image:
      "https://luminamajestic.com/wp-content/uploads/2025/10/تصميم-بدون-عنوان-3.png",
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-lumina-categories relative overflow-hidden">
      <div
        className="absolute top-[50%] left-[5%] w-[250px] h-[250px] rounded-full animate-orb-1 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <Image
                src={cat.image}
                alt={cat.nameAr}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                unoptimized
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/90 via-[#060608]/20 to-transparent" />

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
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[rgba(201,169,110,0.4)] group-hover:shadow-glow transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
