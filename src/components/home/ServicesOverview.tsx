import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Home, Building, Sun, Users, Heart } from "lucide-react";

// Direct imports (they'll still load but we'll control timing)
import serviceOpd from "@/assets/services/2 (4).jpg";
import serviceOpd2 from "@/assets/services/7110794.jpg";
import serviceTherapy from "@/assets/services/2111.q707.020.F.m004.c5.physiotherapy rehabilitation flat composition.jpg";
import serviceFamily from "@/assets/services/2 (6).jpg";
import serviceDaycare from "@/assets/services/6998497.jpg";

const services = [
  {
    id: "opd",
    icon: Brain,
    title: "Psychological & Psychiatric OPD",
    description:
      "Expert consultations with licensed psychiatrists and psychologists for comprehensive mental health assessment.",
    image: serviceOpd,
  },
  {
    id: "rehabilitation",
    icon: Home,
    title: "Premium In-House Rehabilitation",
    description:
      "Luxury residential program with 24/7 care, structured routines, and holistic recovery approach.",
    image: serviceTherapy,
  },
  {
    id: "outpatient",
    icon: Building,
    title: "Outpatient Department (OPD)",
    description:
      "Flexible treatment plans for those who prefer to receive care while maintaining their daily routines.",
    image: serviceOpd2,
  },
  {
    id: "daycare",
    icon: Sun,
    title: "Post-Rehabilitation Daycare",
    description:
      "Continued support and monitoring after primary treatment to ensure lasting recovery.",
    image: serviceDaycare,
  },
  {
    id: "family",
    icon: Users,
    title: "Family Support & Counselling",
    description:
      "Helping families understand addiction and develop healthy coping mechanisms together.",
    image: serviceFamily,
  },
  {
    id: "wellness",
    icon: Heart,
    title: "Holistic Wellness Programs",
    description:
      "Non-religious meditation, yoga, and wellness activities for mind-body healing.",
    image: serviceTherapy,
  },
];

// Custom hook for individual card lazy loading
const useLazyImage = (src, shouldLoad) => {
  const [loaded, setLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (shouldLoad && !imageSrc) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setLoaded(true);
      };
      img.onerror = () => {
        console.error('Failed to load image:', src);
        setLoaded(true); // Still mark as loaded to hide spinner
      };
    }
  }, [shouldLoad, src, imageSrc]);

  return { imageSrc, loaded };
};

const ServiceCard = ({ service, index, sectionInView }) => {
  const cardRef = useRef(null);
  const [cardInView, setCardInView] = useState(false);
  const { imageSrc, loaded } = useLazyImage(service.image, cardInView);

  // Individual intersection observer for each card
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '100px 0px 100px 0px', // Load slightly before entering viewport
        threshold: 0.1
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="service-card group"
      style={{ contentVisibility: 'auto' }} // Chrome optimization
    >
      <div className="premium-card h-full flex flex-col">
        {/* Image Container with Lazy Loading */}
        <div className="service-card-image aspect-[16/10] relative overflow-hidden">
          {/* Loading shimmer effect */}
          {!loaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-[length:200%_100%] animate-shimmer" />
          )}
          
          {/* Image with priority for first 2 cards */}
          {imageSrc && (
            <img
              src={imageSrc}
              alt={service.title}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                loaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading={index < 2 ? "eager" : "lazy"} // First 2 images eager, rest lazy
              decoding="async"
              fetchPriority={index < 2 ? "high" : "low"}
            />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex flex-col flex-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors duration-300">
            <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
          </div>
          <h3 className="font-display text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1">
            {service.description}
          </p>
          <Link
            to={`/services#${service.id}`}
            className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium mt-3 sm:mt-4 group-hover:gap-3 transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 px-2"
        >
          <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
            Our Services
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 sm:mt-3 mb-4 sm:mb-6">
            Comprehensive Recovery
            <br />
            <span className="gradient-text">Programs & Care</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            From initial assessment to long-term recovery support, we offer a
            complete spectrum of rehabilitation services tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid with staggered rendering */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              sectionInView={isInView}
            />
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