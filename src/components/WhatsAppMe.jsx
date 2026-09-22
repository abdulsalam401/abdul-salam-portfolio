import { motion } from "motion/react";
import { FaWhatsapp } from "react-icons/fa";
import { Bio } from "../data/constants";

const WhatsAppMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center"
    >
      <a
        href={Bio.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-3 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.45)] hover:shadow-[0_0_30px_rgba(37,211,102,0.7)] border border-white/20 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
      >
        {/* Static ambient glow badge — no repaint overhead */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 blur-sm pointer-events-none -z-10 opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-2xl transition-transform duration-300 group-hover:scale-110 shrink-0" />

        {/* Text label that expands or displays cleanly */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-mono text-sm font-semibold tracking-wide transition-all duration-300 ease-out group-hover:max-w-xs group-hover:pr-1 sm:max-w-none sm:pr-1">
          WhatsApp Me
        </span>
      </a>
    </motion.div>
  );
};

export default WhatsAppMe;
