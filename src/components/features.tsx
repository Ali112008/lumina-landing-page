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
      "لوحات مصنوعة من أجود أنواع البورسلين المصقول، يمنح كل قطعة عمقًا بصريًا ولمسة فخمة لا تتكرر. الخامة تعكس الضوء بطريقة فريدة تضفي حياة على التصميم.",
  },
  {
    icon: Lightbulb,
    title: "إضاءة LED ذكية",
    description:
      "نظام إضاءة LED مدمج عالي الجودة، صُمم خصيصاً ليبرز لمعان الألماس وتفاصيل البورسلين. يمنح الغرفة هيبةً ونورًا دافئًا يمكن التحكم فيه.",
  },
  {
    icon: Diamond,
    title: "ترصيع كريستالي",
    description:
      "تزدان كل لوحة بذرات دقيقة من الألماس والكريستال النقي، مما يخلق بريقًا ساحرًا يتفاعل مع كل زاوية رؤية ويضفي سحرًا على المكان.",
  },
  {
    icon: Award,
    title: "إصدار محدود",
    description:
      "كل قطعة من LUMINA تُقدَّم كإصدار خاص لا يتكرر — خيار لمن يبحث عن التميز والتفرد دون تنازل. ملكية حصرية تعكس ذوقك الاستثنائي.",
  },
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-lumina-features relative overflow-hidden">
      {/* Animated orb */}
      <div
        className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] rounded-full animate-orb-1 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,89,12,0.05) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--accent-primary)" }}
          >
            لماذا LUMINA
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            فن يضيء، وحِرفية لا تُضاهى
          </h2>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="group p-6 md:p-7 rounded-xl border border-[var(--border-default)] bg-[rgba(14,9,7,0.5)] backdrop-blur-sm hover:border-[rgba(232,89,12,0.4)] transition-all duration-500 hover:shadow-glow text-center"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow"
                  style={{
                    background: "linear-gradient(135deg, rgba(232,89,12,0.1), rgba(232,89,12,0.05))",
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
