import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/services/6998497.jpg";

export const AboutPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden  shadow-2xl">
              <img
                src={aboutImage}
                alt="Premium healthcare at ASCEND"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage/30 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
              About ASCEND
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
              Redefining the Approach
              <br />
              <span className="gradient-text">to Recovery</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              ASCEND is a premium rehabilitation centre in Salt Lake, Kolkata,
              offering full-scale recovery from substance abuse and behavioural /
              lifestyle disorders including alcohol, drugs, screen addiction,
              gambling, food disorders, workaholism, and more.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our compassionate team of psychiatrists, psychologists, and
              counsellors provide personalized care using the globally proven
              12-Step recovery model, combined with individual and group therapy
              sessions in a structured, supportive environment.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
            >
              Learn Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
