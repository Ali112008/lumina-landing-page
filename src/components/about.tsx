export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-lumina-about relative overflow-hidden">
      {/* Decorative orb */}
      <div
        className="absolute top-[30%] left-[10%] w-[200px] h-[200px] rounded-full animate-orb-2 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-12">
          <span
            className="inline-block text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-primary)" }}
          >
            من نحن
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span style={{ color: "var(--text-primary)" }}>
              في عالم تُعامل فيه اللوحات كعنصر ديكور عابر
            </span>
            <br />
            <span className="bg-gradient-to-l from-[#C9A96E] via-[#D9BC84] to-[#C9A96E] bg-clip-text text-transparent">
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

          <div
            className="w-20 h-px mx-auto"
            style={{ background: "linear-gradient(90deg, transparent, var(--accent-primary), transparent)" }}
          />

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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "١+", label: "سنة خبرة" },
            { value: "٥٠+", label: "تصميم فريد" },
            { value: "٩٧٤", label: "قطر 🇶🇦" },
            { value: "∞", label: "إصدارات محدودة" },
          ].map((stat, i) => (
            <div
              key={i}
              className="group text-center p-6 rounded-xl border border-[var(--border-default)] bg-[rgba(12,12,16,0.6)] backdrop-blur-sm hover:border-[rgba(201,169,110,0.3)] transition-all duration-300"
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                style={{ color: "var(--accent-primary)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
