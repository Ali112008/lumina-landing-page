export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <span style={{ color: "var(--accent-primary)" }}>
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
            هي بيان ذوق، وانعكاس لشخصية المكان، وخيار لمن يبحث عن التميز دون
            تنازل.
          </p>

          <div
            className="w-20 h-px mx-auto"
            style={{ background: "var(--accent-primary)" }}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "١+", label: "سنة خبرة" },
            { value: "٥٠+", label: "تصميم فريد" },
            { value: "٩٧٤", label: "قطر 🇶🇦" },
            { value: "∞", label: "إصدارات محدودة" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)]"
            >
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
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
