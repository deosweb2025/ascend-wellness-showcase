import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-contact.jpg";

const Contact = () => {
   useEffect(() =>{
      window.scrollTo(0,0);
    },[])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello, I would like to book an appointment.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/+917003623807?text=${message}`, "_blank");
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contact ASCEND"
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
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2">
              Take the first step towards recovery. Our compassionate team is
              ready to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
                Get in Touch
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mt-2 sm:mt-3 mb-6 sm:mb-8">
                We're Here to Help
              </h2>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      FF3, Sector 3, Salt Lake,
                      <br />
                      Kolkata – 700 106
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-foreground mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+917003623807"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      +91 7003 623 807
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-foreground mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:help@ascendindia.org.in"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                    >
                      help@ascendindia.org.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg text-foreground mb-1">
                      Working Hours
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Mon – Fri: 8:30 AM – 5:00 PM
                      <br />
                      Sat – Sun: Closed
                    </p>
                    <p className="text-primary font-medium mt-2 text-sm sm:text-base">
                      24/7 Emergency Services Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-soft">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.123456789012!2d88.39999999999999!3d22.579999999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzQ4LjAiTiA4OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ASCEND Location"
                  className="sm:h-[300px]"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-soft">
                <h3 className="font-display text-xl sm:text-2xl text-foreground mb-4 sm:mb-6">
                  Book an Appointment
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="premium-input w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="premium-input w-full"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="premium-input w-full"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="premium-input w-full"
                    >
                      <option value="">Select a service</option>
                      <option value="Psychiatric Consultation">
                        Psychiatric Consultation
                      </option>
                      <option value="Rehabilitation Program">
                        Rehabilitation Program
                      </option>
                      <option value="Outpatient Treatment">
                        Outpatient Treatment
                      </option>
                      <option value="Family Counselling">
                        Family Counselling
                      </option>
                      <option value="Daycare Services">Daycare Services</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="premium-input w-full"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="time"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="premium-input w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="premium-input w-full resize-none"
                      placeholder="Tell us about your needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    Your information is completely confidential and secure.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
