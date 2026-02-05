import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Home, Building, Sun, Users, Heart } from "lucide-react";
import serviceOpd from "@/assets/service-opd.jpg";
import serviceTherapy from "@/assets/service-therapy.jpg";
import serviceFamily from "@/assets/service-family.jpg";
import serviceDaycare from "@/assets/service-daycare.jpg";

const services = [
  {
    icon: Brain,
    title: "Psychological & Psychiatric OPD",
    description:
      "Expert consultations with licensed psychiatrists and psychologists for comprehensive mental health assessment.",
    image: serviceOpd,
  },
  {
    icon: Home,
    title: "Premium In-House Rehabilitation",
    description:
      "Luxury residential program with 24/7 care, structured routines, and holistic recovery approach.",
    image: serviceTherapy,
  },
  {
    icon: Building,
    title: "Outpatient Department (OPD)",
    description:
      "Flexible treatment plans for those who prefer to receive care while maintaining their daily routines.",
    image: serviceOpd,
  },
  {
    icon: Sun,
    title: "Post-Rehabilitation Daycare",
    description:
      "Continued support and monitoring after primary treatment to ensure lasting recovery.",
    image: serviceDaycare,
  },
  {
    icon: Users,
    title: "Family Support & Counselling",
    description:
      "Helping families understand addiction and develop healthy coping mechanisms together.",
    image: serviceFamily,
  },
  {
    icon: Heart,
    title: "Holistic Wellness Programs",
    description:
      "Non-religious meditation, yoga, and wellness activities for mind-body healing.",
    image: serviceTherapy,
  },
];

export const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] font-medium">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Comprehensive Recovery
            <br />
            <span className="gradient-text">Programs & Care</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From initial assessment to long-term recovery support, we offer a
            complete spectrum of rehabilitation services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card group"
            >
              <div className="premium-card h-full flex flex-col">
                {/* Image */}
                <div className="service-card-image aspect-[16/10]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium mt-4 group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-glow hover:scale-105"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
