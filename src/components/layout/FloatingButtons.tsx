import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingButtons = () => {
  const phoneNumber = "+917003623807";
  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to know more about ASCEND Rehabilitation Centre."
  );

  return (
    <>
      {/* Call Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        className="floating-btn right-6 bottom-24 w-14 h-14 bg-primary text-primary-foreground flex items-center justify-center"
        aria-label="Call now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        className="floating-btn right-6 bottom-6 w-14 h-14 bg-[#25D366] text-white flex items-center justify-center"
        aria-label="WhatsApp chat"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </>
  );
};

export default FloatingButtons;
