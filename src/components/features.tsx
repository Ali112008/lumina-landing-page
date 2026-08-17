import { Gem, Lightbulb, Diamond, Award } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Gem,
    title: "بورسلين فاخر",
    description:
      "لوحات مصنوعة من أجود أنواع البورسلين المصقول، يمنح كل قطعة عمقًا بصريًا ولمسة فخمة لا تتكرر.",
  },
  {
    icon: Lightbulb,
    title: "إضاءة LED ذكية",
    description:
      "نظام إضاءة LED مدمج عالي الجودة، صُمم خصيصاً ليبرز لمعان الألماس وتفاصيل البورسلين بمنح الغرفة هيبةً ونورًا دافئًا.",
  },
  {
    icon: Diamond,
    title: "ترصيع كريستالي",
    description:
      "تزدان كل لوحة بذرات دقيقة من الألماس والكريستال النقي، مما يخلق بريقًا ساحرًا يتفاعل مع كل زاوية رؤية.",
  },
  {
    icon: Award,
    title: "إصدار محدود",
    description:
      "كل قطعة من LUMINA تُقدَّم كإصدار خاص لا يتكرر — خيار لمن يبحث عن التميز والتفرد دون تنازل.",
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-lumina-features relative overflow-hidden texture-noise">
      {/* Ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] rounded-full animate-orb-1"
          style={{ background: "radial-gradient(circle, rgba(232,89,12,0.06) 0%, transparent 60%)" }}
        />
        <div
          className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full animate-orb-3"
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
            لماذا LUMINA
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            فن يضيء، وحِرفية{" "}
            <span style={{ color: "var(--accent-gold)" }}>لا تُضاهى</span>
          </h2>
          {/* Ornamental divider */}
          <div className="ornament-divider mt-6">
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "var(--accent-gold)" }} />
          </div>
        </div>

        {/* Features grid — luxury cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group p-7 md:p-8 rounded-2xl text-center transition-all duration-500 hover:shadow-gold luxury-card"
                style={{
                  border: "1px solid rgba(212,175,55,0.08)",
                  background: "linear-gradient(180deg, rgba(14,9,7,0.7) 0%, rgba(10,6,4,0.9) 100%)",
                }}
              >
                {/* Icon — refined container */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-gold"
                  style={{
                    background: "linear-gradient(135deg, rgba(232,89,12,0.08), rgba(212,175,55,0.04))",
                    border: "1px solid rgba(212,175,55,0.06)",
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: "var(--accent-primary)" }}
                  />
                </div>

                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {feature.description}
                </p>

                {/* Gold accent line on hover */}
                <div className="w-8 h-px mx-auto mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--accent-gold)" }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
