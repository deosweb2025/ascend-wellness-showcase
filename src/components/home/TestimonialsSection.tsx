import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arunima Das",
    location: "Guwahati, Assam",
    quote:
      "ASCEND gave my son a second chance at life. The compassionate care and structured program helped him overcome his addiction. We are forever grateful to the entire team.",
  },
  {
    name: "Tashi Lepcha",
    location: "Gangtok, Sikkim",
    quote:
      "The 12-step program and individual therapy sessions were transformative. The staff truly cares about every patient's recovery journey. Highly recommend for anyone seeking professional help.",
  },
  {
    name: "Rupam Debbarma",
    location: "Agartala, Tripura",
    quote:
      "After struggling for years, ASCEND's holistic approach finally helped me break free. The family counselling also helped my loved ones understand and support my recovery.",
  },
  {
    name: "Sultanath Saikh",
    location: "Kochi, Kerala",
    quote:
      "World-class facility with exceptional medical care. The combination of psychiatric treatment and therapeutic activities created the perfect environment for healing.",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={ref} className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
            Testimonials
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mt-2 sm:mt-3">
            Stories of <span className="gradient-text">Transformation</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card text-center px-2 sm:px-4"
              >
                <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary/30 mx-auto mb-4 sm:mb-6" />
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 font-display italic leading-relaxed mb-6 sm:mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-display text-lg sm:text-xl text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-6 sm:w-8 bg-primary"
                        : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
