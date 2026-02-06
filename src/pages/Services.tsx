import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PageLayout } from "@/components/layout";
import {
  Brain,
  Home,
  Building,
  Sun,
  Users,
  Heart,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-services.jpg";
import serviceOpd from "@/assets/service-opd.jpg";
import serviceTherapy from "@/assets/service-therapy.jpg";
import serviceFamily from "@/assets/service-family.jpg";
import serviceDaycare from "@/assets/service-daycare.jpg";

const services = [
  {
    id: "opd",
    icon: Brain,
    title: "Psychological & Psychiatric OPD",
    subtitle: "Expert Mental Health Consultations",
    description:
      "Our outpatient department provides comprehensive psychiatric evaluations and psychological assessments conducted by experienced professionals. We offer evidence-based treatments for a wide range of mental health conditions including depression, anxiety, bipolar disorder, and addiction-related issues.",
    features: [
      "Initial psychiatric evaluation",
      "Psychological testing and assessment",
      "Medication management",
      "Individual therapy sessions",
      "Follow-up consultations",
    ],
    image: serviceOpd,
  },
  {
    id: "rehabilitation",
    icon: Home,
    title: "Premium In-House Rehabilitation",
    subtitle: "Residential Recovery Program",
    description:
      "Our flagship residential rehabilitation program offers a structured, supportive environment for comprehensive recovery. Patients benefit from 24/7 professional care, therapeutic activities, and a community of individuals on similar journeys to sobriety.",
    features: [
      "24/7 medical supervision",
      "Individual and group therapy",
      "12-Step program integration",
      "Holistic wellness activities",
      "Family involvement programs",
    ],
    image: serviceTherapy,
  },
  {
    id: "outpatient",
    icon: Building,
    title: "Outpatient Department (OPD)",
    subtitle: "Flexible Treatment Plans",
    description:
      "For those who need treatment while maintaining their daily responsibilities, our OPD offers flexible scheduling and comprehensive care. This program is ideal for individuals in early stages of recovery or those transitioning from residential treatment.",
    features: [
      "Flexible appointment scheduling",
      "Intensive outpatient programs",
      "Regular therapy sessions",
      "Progress monitoring",
      "Community support groups",
    ],
    image: serviceOpd,
  },
  {
    id: "daycare",
    icon: Sun,
    title: "Post-Rehabilitation Daycare",
    subtitle: "Continued Support for Lasting Recovery",
    description:
      "Our daycare program provides structured support during the crucial transition period after primary treatment. Patients engage in therapeutic activities, counseling sessions, and skill-building exercises while returning home each evening.",
    features: [
      "Daily therapeutic activities",
      "Relapse prevention training",
      "Life skills development",
      "Peer support groups",
      "Gradual reintegration support",
    ],
    image: serviceDaycare,
  },
  {
    id: "family",
    icon: Users,
    title: "Family Support & Counselling",
    subtitle: "Healing the Whole Family",
    description:
      "Addiction affects the entire family. Our family counseling program helps loved ones understand addiction, develop healthy boundaries, improve communication, and build a supportive environment that promotes lasting recovery.",
    features: [
      "Family therapy sessions",
      "Education about addiction",
      "Communication skills training",
      "Boundary setting guidance",
      "Support group referrals",
    ],
    image: serviceFamily,
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Informal Education for Children",
    subtitle: "Social Awareness Development",
    description:
      "We believe in prevention through education. Our informal education programs help children and young adults understand the risks of substance abuse and develop healthy coping mechanisms and decision-making skills.",
    features: [
      "Age-appropriate education",
      "Interactive workshops",
      "Peer mentoring programs",
      "Social skills development",
      "Community outreach",
    ],
    image: serviceTherapy,
  },
];

const ServiceCard = ({
  service,
  index,
  isReversed,
}: {
  service: (typeof services)[0];
  index: number;
  isReversed: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id={service.id}
      className={`section-padding ${index % 2 === 0 ? "bg-background" : "bg-secondary/30"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={isReversed ? "lg:order-2" : ""}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isReversed ? "lg:order-1" : ""}
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
              <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
              {service.subtitle}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mt-2 mb-4 sm:mb-6">
              {service.title}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {service.description}
            </p>

            {/* Features */}
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-foreground/80 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 hover:shadow-glow hover:scale-105 w-full sm:w-auto"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="ASCEND Services"
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
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 sm:mb-6">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
              Comprehensive rehabilitation programs designed to support your
              journey to recovery with compassion and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          isReversed={index % 2 !== 0}
        />
      ))}

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary-foreground mb-4 sm:mb-6">
            Ready to Begin Your Recovery Journey?
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Our team is here to help you take the first step. Contact us for a
            confidential consultation.
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

export default Services;
