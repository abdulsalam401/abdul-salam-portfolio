import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import PropTypes from "prop-types";
import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineBadgeCheck,
  HiOutlineAcademicCap,
  HiOutlineArrowsExpand,
} from "react-icons/hi";

// Swiper core styles
import "swiper/css";
import "swiper/css/effect-cards";

const CertificateDeck = ({ certificates, setOpenModal }) => {
  const swiperRef = useRef(null);

  return (
    <div className="w-full flex flex-col items-center px-3 py-2">
      {/* Stacked Cards Swiper Container */}
      <div className="relative w-full max-w-[330px] sm:max-w-[350px] h-[345px] sm:h-[365px] flex items-center justify-center">
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          cardsEffect={{
            perSlideOffset: 12, // how far back cards stick out
            perSlideRotate: 3,  // slight tilt
            rotate: true,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={certificates.length > 2}
          speed={500}
          className="w-full h-full rounded-2xl"
        >
          {certificates.map((cert) => (
            <SwiperSlide
              key={cert.id}
              className="rounded-2xl overflow-hidden glassmorphism-card border border-white/20 bg-[#0d0e18] shadow-[0_15px_40px_rgba(0,0,0,0.85)] cursor-pointer"
              onClick={() => setOpenModal({ state: true, project: cert, type: "certificate" })}
            >
              <div className="relative w-full h-full flex flex-col justify-between bg-[#090a12] group select-none">
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute top-2.5 right-2.5 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-neon-cyan/20 backdrop-blur-md border border-neon-cyan/50 text-[10px] font-mono font-semibold text-neon-cyan shadow-[0_0_12px_rgba(0,243,255,0.4)]">
                    <HiOutlineBadgeCheck className="w-3.5 h-3.5" />
                    <span>Featured</span>
                  </div>
                )}

                {/* Certificate Image Frame */}
                <div className="relative w-full h-[245px] sm:h-[260px] bg-[#05060a] p-3 flex items-center justify-center overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00f3ff_1px,transparent_1px)] [background-size:12px_12px]" />
                  <img
                    src={cert.img}
                    alt={cert.degree}
                    className="relative z-10 max-h-full max-w-full object-contain rounded-lg shadow-md pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Tap to View Floating Overlay */}
                  <div className="absolute inset-0 z-20 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neon-cyan text-black font-semibold text-xs shadow-[0_0_20px_#00f3ff]">
                      <HiOutlineArrowsExpand className="w-3.5 h-3.5" />
                      View Certificate
                    </span>
                  </div>
                </div>

                {/* Elegant Bottom Info Panel */}
                <div className="h-[100px] sm:h-[105px] px-4 py-3 bg-[#0d0f1a] flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-[13px] sm:text-[14px] font-bold text-white leading-snug line-clamp-2 group-hover:text-neon-cyan transition-colors">
                      {cert.degree}
                    </h4>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/10 text-gray-300 font-mono whitespace-nowrap self-start">
                      {cert.date}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neon-cyan font-semibold flex items-center gap-1 truncate">
                      <HiOutlineAcademicCap className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{cert.school}</span>
                    </span>

                    <span className="text-[10px] font-medium text-gray-400 group-hover:text-neon-cyan transition-colors flex items-center gap-1 shrink-0">
                      Tap to open ➔
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-6 mt-3">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="p-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-neon-cyan hover:text-black hover:border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.2)] active:scale-90 transition-all cursor-pointer"
          aria-label="Previous Certificate"
          title="Previous certificate"
        >
          <HiOutlineChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="p-3 rounded-full bg-white/10 border border-white/15 text-white hover:bg-neon-cyan hover:text-black hover:border-neon-cyan shadow-[0_0_15px_rgba(0,243,255,0.2)] active:scale-90 transition-all cursor-pointer"
          aria-label="Next Certificate"
          title="Next certificate"
        >
          <HiOutlineChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

CertificateDeck.propTypes = {
  certificates: PropTypes.arrayOf(PropTypes.object).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export default CertificateDeck;
