import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { PageLayout } from "@/components/layout";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-about.jpg";
import aboutPreview from "@/assets/about-preview.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach every individual with empathy, understanding, and unconditional positive regard.",
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description:
      "Your privacy and dignity are paramount. All interactions are strictly confidential.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Recovery thrives in community. We foster supportive connections that last beyond treatment.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We maintain the highest standards of clinical care and continuously improve our programs.",
  },
];

const About = () => {
  useEffect(() =>{
    window.scrollTo(0,0);
  },[])
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="ASCEND Brand Story"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary-foreground/80 text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4 block">
              Brand Story
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 sm:mb-6">
              About ASCEND
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
              Redefining the approach to recovery with compassion, expertise,
              and unwavering commitment to your wellbeing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={aboutPreview}
                  alt="Compassionate care at ASCEND"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-6">
                Understanding Addiction
                <br />
                <span className="gradient-text-dark">Beyond Substances</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  At ASCEND, we recognize that addiction extends far beyond
                  substance abuse. Behavioural and lifestyle disorders—including
                  screen addiction, gambling, food disorders, workaholism, and
                  relationship addiction—can be equally devastating to individuals
                  and families.
                </p>
                <p>
                  Our comprehensive approach addresses the root causes of addictive
                  behaviours, not just the symptoms. We believe that every person
                  deserves compassionate, non-judgmental care that respects their
                  unique journey and circumstances.
                </p>
                <p>
                  The 12-Step philosophy forms the foundation of our treatment
                  approach, complemented by evidence-based psychiatric care,
                  individual and group therapy, and holistic wellness practices.
                  This combination has helped thousands find lasting recovery.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-6">
                The 12-Step Programming
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg px-2">
                A globally proven framework for lasting recovery
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft"
            >
              <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  The 12-Step program, originally developed for alcohol addiction,
                  has been adapted and proven effective for countless forms of
                  addictive behaviour. At ASCEND, we integrate these timeless
                  principles with modern therapeutic techniques.
                </p>
                <p>
                  Our approach is non-religious, focusing on personal growth,
                  accountability, and connection with a supportive community. We
                  respect each individual's spiritual beliefs while guiding them
                  through a process of self-discovery and healing.
                </p>
                <p>
                  Through individual therapy, group sessions, and structured daily
                  routines, patients learn to identify triggers, develop healthy
                  coping mechanisms, and build the foundation for a life free from
                  the chains of addiction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-6">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg px-2">
              The principles that guide everything we do at ASCEND
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-3 sm:p-4"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-display text-base sm:text-xl text-foreground mb-1 sm:mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-4 sm:mb-6">
            Begin Your Journey to Recovery
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Every journey begins with a single step. Let us walk alongside you
            on the path to healing and renewal.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-elevated hover:scale-105 w-full sm:w-auto max-w-xs mx-auto sm:max-w-none"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
