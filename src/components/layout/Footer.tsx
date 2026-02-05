import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/ascend-logo.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Brand Story", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

const services = [
  "Psychological & Psychiatric OPD",
  "Premium In-House Rehabilitation",
  "Outpatient Department",
  "Post-Rehabilitation Daycare",
  "Family Support & Counselling",
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-transform duration-300"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container mx-auto px-4 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="ASCEND" className="h-14 w-auto mb-6 brightness-0 invert" />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              ASCEND is a premium rehabilitation centre in Salt Lake, Kolkata,
              offering world-class recovery programs with compassion and expertise.
            </p>
            <p className="text-xs text-background/50 italic">
              Redefining the Approach to Recovery
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  FF3, Sector 3, Salt Lake,
                  <br />
                  Kolkata – 700 106
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+917003623807"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  +91 7003 623 807
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:help@ascendindia.org.in"
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  help@ascendindia.org.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/70 text-sm">
                  <p>Mon – Fri: 8:30 AM – 5:00 PM</p>
                  <p>Sat – Sun: Closed</p>
                  <p className="text-primary mt-1">24/7 Emergency Services</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ASCEND – Premium Rehabilitation Centre. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/50">
              <span>Best Rehabilitation Centre in Kolkata</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
