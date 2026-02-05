import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Repeat,
  UserCheck,
  Flower2,
  Calendar,
  Utensils,
} from "lucide-react";
import parallaxImage from "@/assets/parallax-cta.jpg";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Psychiatrists, Psychologists & Counsellors",
  },
  {
    icon: Repeat,
    title: "12-Step Model",
    description: "Globally Proven Recovery Program",
  },
  {
    icon: UserCheck,
    title: "Individual & Group Therapy",
    description: "Personalized Treatment Plans",
  },
  {
    icon: Flower2,
    title: "Non-Religious Meditation",
    description: "Mindfulness & Wellness Practices",
  },
  {
    icon: Calendar,
    title: "Structured Routine",
    description: "Disciplined Daily Schedule",
  },
  {
    icon: Utensils,
    title: "Healthy Meals",
    description: "Nutritious & Tasty Food",
  },
];

export const WhyAscend = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 parallax-bg"
        style={{ backgroundImage: `url(${parallaxImage})` }}
      />
      <div className="absolute inset-0 bg-foreground/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
            Our Difference
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-background mt-3 mb-6">
            What Sets ASCEND Apart?
          </h2>
          <p className="text-background/70 text-lg">
            We combine clinical excellence with compassionate care to create a
            truly transformative recovery experience.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-background/10 backdrop-blur-sm rounded-2xl border border-background/10 hover:bg-background/15 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg text-background mb-1">
                  {feature.title}
                </h3>
                <p className="text-background/60 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAscend;
