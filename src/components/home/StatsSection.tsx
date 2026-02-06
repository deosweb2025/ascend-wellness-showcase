import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, HeartPulse, Users, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 15,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    icon: HeartPulse,
    value: 24,
    suffix: "/7",
    label: "Emergency Support",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Lives Transformed",
  },
  {
    icon: Sparkles,
    value: 100,
    suffix: "%",
    label: "Holistic Programs",
  },
];

const Counter = ({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="stat-number text-2xl sm:text-3xl md:text-4xl">
      {count}
      {suffix}
    </span>
  );
};

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding-sm bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-3 sm:p-4"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="mb-1 sm:mb-2">
                <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
