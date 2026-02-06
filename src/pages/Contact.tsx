import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/layout";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  ArrowRight, 
  CheckCircle, 
  MessageCircle,
  Calendar,
  Shield,
  Sparkles,
  User,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero3.jpeg";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const [activeContact, setActiveContact] = useState("whatsapp");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      // Create WhatsApp message
      const message = encodeURIComponent(
        `*New Appointment Request*\n\n👤 *Name:* ${formData.name}\n📧 *Email:* ${formData.email}\n📱 *Phone:* ${formData.phone}\n🏥 *Service:* ${formData.service}\n📅 *Preferred Date:* ${formData.date}\n⏰ *Preferred Time:* ${formData.time}\n💬 *Message:* ${formData.message}`
      );
      
      // Open WhatsApp in new tab
      const whatsappUrl = `https://wa.me/+917003623807?text=${message}`;
      window.open(whatsappUrl, "_blank");
      
      // Show success state
      setFormStatus({ submitting: false, submitted: true, error: null });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
        setFormStatus({ submitting: false, submitted: false, error: null });
      }, 3000);
      
    } catch (error) {
      setFormStatus({ 
        submitting: false, 
        submitted: false, 
        error: "Failed to submit. Please try again." 
      });
    }
  };

  const contactMethods = [
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Fast response, 24/7",
      icon: MessageCircle,
      action: () => {
        const message = encodeURIComponent("Hello, I'd like to get more information about ASCEND services.");
        window.open(`https://wa.me/+917003623807?text=${message}`, "_blank");
      },
      color: "bg-green-500",
      features: ["Instant reply", "File sharing", "24/7 support"]
    },
    {
      id: "call",
      title: "Direct Call",
      description: "Immediate assistance",
      icon: Phone,
      action: () => window.location.href = "tel:+917003623807",
      color: "bg-blue-500",
      features: ["Professional guidance", "Immediate help", "Confidential"]
    },
    {
      id: "email",
      title: "Email",
      description: "Detailed inquiries",
      icon: Mail,
      action: () => window.location.href = "mailto:help@ascendindia.org.in",
      color: "bg-purple-500",
      features: ["Detailed response", "Document sharing", "Follow-up tracking"]
    },
    {
      id: "visit",
      title: "Visit Us",
      description: "In-person consultation",
      icon: MapPin,
      action: () => window.open("https://maps.google.com/?q=FF3+Sector+3+Salt+Lake+Kolkata+700106", "_blank"),
      color: "bg-orange-500",
      features: ["Face-to-face", "Tour facility", "Meet our team"]
    }
  ];

  return (
    <PageLayout>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-purple-900/80 to-indigo-900/90">
          <img
            src={heroImage}
            alt="Contact ASCEND"
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          
          {/* Floating particles animation */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/30 rounded-full"
                initial={{ y: -100, x: Math.random() * 100 }}
                animate={{ 
                  y: window.innerHeight + 100,
                  x: Math.random() * 100 - 50
                }}
                transition={{
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 sm:mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs sm:text-sm font-medium">
                24/7 Support Available
              </span>
            </motion.div>
            
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 sm:mb-6 leading-tight">
              Start Your{" "}
              <span className="gradient-text bg-gradient-to-r from-primary via-purple-400 to-pink-400">
                Recovery Journey
              </span>
            </h1>
            <p className="text-slate-700 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto px-4 mb-6">
              Take the first step towards healing. Our compassionate team is ready to provide 
              confidential support and guidance.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center"
            >
              <div className="flex items-center gap-2 text-slate-800">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm sm:text-base">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm sm:text-base">Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm sm:text-base">Immediate Response</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowRight className="w-6 h-6 text-primary-foreground/50 rotate-90" />
        </motion.div>
      </section>

      {/* Quick Contact Methods */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              Choose Your Preferred Way to Connect
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              We're available through multiple channels. Pick what works best for you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {contactMethods.map((method) => (
              <motion.button
                key={method.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={method.action}
                className={`relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 ${
                  activeContact === method.id 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'shadow-md hover:shadow-lg'
                } bg-card`}
                onMouseEnter={() => setActiveContact(method.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`${method.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {method.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {method.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-secondary/50 text-foreground/70 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20">
            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-24 lg:self-start"
            >
              <div className="bg-gradient-to-br from-primary/5 via-secondary/20 to-transparent rounded-3xl p-6 sm:p-8">
                <span className="text-primary text-xs sm:text-sm uppercase tracking-[0.15em] font-medium">
                  Get in Touch
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mt-2 mb-6">
                  We're Here to Help You
                </h2>

                <div className="space-y-6 mb-10">
                  {[
                    {
                      icon: MapPin,
                      title: "Our Location",
                      content: "FF3, Sector 3, Salt Lake, Kolkata – 700 106",
                      extra: "Easy to access from all parts of the city",
                      color: "bg-blue-500/10",
                      iconColor: "text-blue-500"
                    },
                    {
                      icon: Phone,
                      title: "Phone Support",
                      content: "+91 7003 623 807",
                      extra: "24/7 Emergency Hotline",
                      color: "bg-green-500/10",
                      iconColor: "text-green-500",
                      action: "tel:+917003623807"
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: "help@ascendindia.org.in",
                      extra: "Response within 2 hours",
                      color: "bg-purple-500/10",
                      iconColor: "text-purple-500",
                      action: "mailto:help@ascendindia.org.in"
                    },
                    {
                      icon: Clock,
                      title: "Working Hours",
                      content: "Mon – Fri: 8:30 AM – 5:00 PM",
                      extra: "Weekend appointments available",
                      color: "bg-orange-500/10",
                      iconColor: "text-orange-500"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-base sm:text-lg text-foreground mb-1">
                          {item.title}
                        </h3>
                        <a
                          href={item.action || '#'}
                          className={`text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base ${!item.action && 'cursor-default'}`}
                        >
                          {item.content}
                        </a>
                        <p className="text-primary font-medium mt-2 text-xs sm:text-sm">
                          {item.extra}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Map */}
                <div className="rounded-2xl overflow-hidden shadow-soft border border-border">
                  <div className="p-4 bg-gradient-to-r from-primary/5 to-transparent">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                      Find Us on Map
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Click to get directions
                    </p>
                  </div>
                  <div className="relative h-64 sm:h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7712999999997!2d88.40676471531126!3d22.573806285198342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b11bc6e0cb%3A0x4c09b75e8c5a9c5e!2sSalt%20Lake%20City%2C%20Kolkata%2C%20West%20Bengal%20700106!5e0!3m2!1sen!2sin!4v1648823456789!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ASCEND Location"
                      className="absolute inset-0"
                    />
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Success Message */}
                {formStatus.submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 z-10 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl flex items-center justify-center p-8"
                  >
                    <div className="text-center max-w-md">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </motion.div>
                      <h3 className="font-display text-2xl text-foreground mb-3">
                        Appointment Request Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Our team will contact you shortly via WhatsApp. 
                        If you haven't received a response, please check your WhatsApp.
                      </p>
                      <button
                        onClick={() => window.open(`https://wa.me/+917003623807`, "_blank")}
                        className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        Open WhatsApp Now
                      </button>
                    </div>
                  </motion.div>
                )}

                <div className="bg-gradient-to-br from-card via-card to-card/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-soft border border-border/50 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl text-foreground">
                        Book Your Consultation
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Fill the form and we'll contact you via WhatsApp immediately
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="premium-input w-full"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          <Smartphone className="w-4 h-4 inline mr-2" />
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="premium-input w-full"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        📧 Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="premium-input w-full"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        🏥 Service Required *
                      </label>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="premium-input w-full"
                      >
                        <option value="">Select a service</option>
                        <option value="Psychiatric Consultation">Psychiatric Consultation</option>
                        <option value="In-House Rehabilitation">In-House Rehabilitation</option>
                        <option value="Outpatient Treatment">Outpatient Treatment</option>
                        <option value="Family Counselling">Family Counselling</option>
                        <option value="Daycare Services">Daycare Services</option>
                        <option value="Emergency Intervention">Emergency Intervention</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          📅 Preferred Date
                        </label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="premium-input w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          ⏰ Preferred Time
                        </label>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="premium-input w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        💬 Tell Us About Your Situation
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="premium-input w-full resize-none"
                        placeholder="Please share details about your current situation, concerns, or specific needs..."
                      />
                    </div>

                    {/* Privacy Notice */}
                    <div className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Your information is 100% confidential and protected. 
                          We never share your details with third parties. 
                          All communications are encrypted and secure.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus.submitting}
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-glow hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus.submitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send via WhatsApp
                        </>
                      )}
                    </button>

                    {formStatus.error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <p className="text-sm text-red-500">{formStatus.error}</p>
                      </div>
                    )}
                  </form>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to receive WhatsApp messages from our team. 
                      Standard messaging rates may apply.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Quick answers to common questions about contacting us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "How quickly will you respond?",
                answer: "WhatsApp messages are answered within minutes during business hours. Emails receive a response within 2 hours. Emergency calls are answered immediately."
              },
              {
                question: "Is my information confidential?",
                answer: "Absolutely. All communications are encrypted and confidential. We follow strict privacy protocols and never share your information without consent."
              },
              {
                question: "Do you offer emergency services?",
                answer: "Yes, we provide 24/7 emergency support. Call our hotline for immediate assistance in crisis situations."
              },
              {
                question: "What information should I prepare?",
                answer: "Have your basic details ready (name, contact info) and a brief description of your situation. Our team will guide you through the rest."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl p-6 hover:shadow-soft transition-shadow"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;