export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-lumina-about relative overflow-hidden texture-noise">
      {/* Ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[20%] left-[5%] w-[300px] h-[300px] rounded-full animate-orb-2"
          style={{ background: "radial-gradient(circle, rgba(232,89,12,0.06) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-[30%] right-[10%] w-[250px] h-[250px] rounded-full animate-orb-1"
          style={{ background: "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-medium tracking-[0.25em] uppercase mb-4"
            style={{ color: "var(--accent-champagne)" }}
          >
            من نحن
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span style={{ color: "var(--text-primary)" }}>
              في عالم تُعامل فيه اللوحات كعنصر ديكور عابر
            </span>
            <br />
            <span className="bg-gradient-to-l from-[#E8590C] via-[#F06E1F] to-[#E8590C] bg-clip-text text-transparent">
              وُلدت LUMINA لإعادة تعريف معنى اللوحة الفنية
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            هي بيان ذوق، وانعكاس لشخصية المكان، وخيار لمن يبحث عن التميز دون تنازل.
          </p>

          {/* Gold ornamental divider */}
          <div className="ornament-divider">
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--accent-gold)" }} />
          </div>

          <p
            className="text-base md:text-lg leading-loose"
            style={{ color: "var(--text-muted)" }}
          >
            في لومينا نعيد تعريف مفهوم اللوحات الفنية، عبر دمج الفن المعاصر مع
            الإضاءة الذكية والحِرفية العالية. نحن{" "}
            <span
              className="font-bold"
              style={{ color: "var(--accent-primary)" }}
            >
              أول علامة متخصصة في قطر
            </span>{" "}
            تقدم لوحات مضيئة مصنوعة من البورسلين الفاخر، ومُرصّعة بعناية
            بالكريستال والأحجار المختارة، لتمنح كل مساحة حضورًا بصريًا لا
            يُنسى.
          </p>
        </div>

        {/* Stats — luxury presentation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-18 max-w-4xl mx-auto">
          {[
            { value: "١+", label: "سنة خبرة" },
            { value: "٥٠+", label: "تصميم فريد" },
            { value: "٩٧٤", label: "قطر" },
            { value: "∞", label: "إصدارات محدودة" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group text-center p-6 md:p-8 rounded-xl transition-all duration-500 hover:shadow-gold"
              style={{
                border: "1px solid rgba(212,175,55,0.08)",
                background: "linear-gradient(180deg, rgba(14,9,7,0.7) 0%, rgba(10,6,4,0.9) 100%)",
              }}
            >
              <div
                className="text-3xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: "var(--accent-primary)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs md:text-sm tracking-wide"
                style={{ color: "var(--accent-champagne)" }}
              >
                {stat.label}
              </div>
              {/* Subtle gold underline */}
              <div className="w-8 h-px mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--accent-gold)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
