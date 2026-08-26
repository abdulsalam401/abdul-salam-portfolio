import { motion } from "motion/react";
import PropTypes from "prop-types";
import { HiOutlineExternalLink, HiOutlineBadgeCheck, HiOutlineEye } from "react-icons/hi";

const CertificateCard = ({ cert, setOpenModal }) => {
  const isGoogle = cert.school.toLowerCase().includes("google");
  const isCisco = cert.school.toLowerCase().includes("cisco");
  const isRedTeam = cert.school.toLowerCase().includes("red team");

  // Custom accent color based on issuer
  const accentColor = isGoogle
    ? "from-blue-500/20 via-cyan-500/10 to-transparent border-cyan-500/40 text-neon-cyan"
    : isCisco
    ? "from-emerald-500/20 via-teal-500/10 to-transparent border-teal-500/40 text-emerald-400"
    : isRedTeam
    ? "from-rose-500/20 via-pink-500/10 to-transparent border-rose-500/40 text-rose-400"
    : "from-purple-500/20 via-indigo-500/10 to-transparent border-neon-purple/40 text-neon-purple";

  return (
    <motion.div
      onClick={() => setOpenModal({ state: true, project: cert, type: "certificate" })}
      className="group relative h-full flex flex-col rounded-2xl glassmorphism-card border border-white/10 hover:border-neon-cyan/50 cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] hover:-translate-y-2"
      whileHover={{ y: -8 }}
    >
      {/* Featured Ribbon / Badge */}
      {cert.featured && (
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-neon-cyan/15 border border-neon-cyan/40 text-[11px] font-mono font-semibold text-neon-cyan shadow-[0_0_12px_rgba(0,243,255,0.3)]">
          <HiOutlineBadgeCheck className="w-3.5 h-3.5" />
          <span>Featured</span>
        </div>
      )}

      {/* Certificate Thumbnail Area */}
      <div className="relative w-full aspect-[16/10] bg-[#0c0d14] overflow-hidden flex items-center justify-center p-2.5 border-b border-white/5">
        {/* Subtle grid pattern background behind certificate */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:12px_12px]" />
        
        <img
          src={cert.img}
          alt={`${cert.degree} certificate`}
          loading="lazy"
          decoding="async"
          className="relative z-10 max-h-full max-w-full object-contain rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover overlay with quick view button */}
        <div className="absolute inset-0 z-20 bg-darkTheme-bg/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neon-cyan text-black font-semibold text-xs shadow-[0_0_20px_rgba(0,243,255,0.6)] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <HiOutlineEye className="w-4 h-4" />
            View Certificate
          </span>
          {cert.verifyUrl && (
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/20 transition-colors"
              title="Verify online"
            >
              <HiOutlineExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col flex-grow p-5 justify-between">
        <div>
          {/* Header Metadata */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neon-cyan/90 font-medium">
              {cert.school}
            </span>
            <span className="text-[11px] text-gray-400 font-mono">
              {cert.date}
            </span>
          </div>

          {/* Certificate Title */}
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-neon-cyan transition-colors duration-300 line-clamp-2 leading-snug">
            {cert.degree}
          </h3>

          {/* Credential Type & Category */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-md border ${accentColor}`}>
              {cert.grade || "Certificate"}
            </span>
            {cert.category && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-gray-300 border border-white/10">
                {cert.category}
              </span>
            )}
          </div>

          {/* Description snippet */}
          <p className="text-xs text-gray-300 font-light mt-3 line-clamp-2 leading-relaxed">
            {cert.desc}
          </p>
        </div>

        {/* Tags */}
        {cert.tags && cert.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-4 mt-3 border-t border-white/5">
            {cert.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neon-cyan/5 text-gray-300 border border-neon-cyan/15"
              >
                #{tag}
              </span>
            ))}
            {cert.tags.length > 3 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 text-gray-400">
                +{cert.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

CertificateCard.propTypes = {
  cert: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    degree: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    date: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string.isRequired,
    grade: PropTypes.string,
    category: PropTypes.string,
    featured: PropTypes.bool,
    verifyUrl: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default CertificateCard;
