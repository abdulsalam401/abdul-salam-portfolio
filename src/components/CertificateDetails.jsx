import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";
import PropTypes from "prop-types";
import { HiOutlineExternalLink, HiOutlineBadgeCheck, HiOutlineCalendar, HiOutlineAcademicCap } from "react-icons/hi";

const CertificateDetails = ({ openModal, setOpenModal }) => {
  const certificate = openModal?.project;
  if (!certificate) return null;

  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
      aria-labelledby="certificate-modal-title"
      aria-describedby="certificate-modal-description"
    >
      {/* Scrollable Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md overflow-y-auto flex justify-center p-3 sm:p-6 md:p-8"
        onClick={() => setOpenModal({ state: false, project: null })}
      >
        {/* Modal Card */}
        <div
          className="relative w-full max-w-3xl my-auto h-fit rounded-3xl glassmorphism-card border border-neon-cyan/40 bg-[#0d0e17] p-5 sm:p-8 text-white shadow-[0_0_50px_rgba(0,243,255,0.25)] flex flex-col gap-5 transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpenModal({ state: false, project: null })}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-neon-cyan hover:text-black text-gray-300 transition-colors duration-200 cursor-pointer"
            aria-label="Close modal"
          >
            <CloseRounded fontSize="small" />
          </button>

          {/* Certificate Image Frame */}
          <div className="w-full flex items-center justify-center rounded-2xl bg-[#07080d] border border-white/10 p-2 sm:p-4 mt-4 overflow-hidden">
            <img
              src={certificate.img}
              alt={`${certificate.degree} credential`}
              className="w-full h-auto max-h-[500px] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-xs font-mono text-neon-cyan uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <HiOutlineAcademicCap className="w-4 h-4" />
                  {certificate.school}
                </span>
                {certificate.grade && (
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/40 font-medium">
                    {certificate.grade}
                  </span>
                )}
              </div>
              <h2 id="certificate-modal-title" className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                {certificate.degree}
              </h2>
            </div>

            {certificate.date && (
              <div className="self-start sm:self-center">
                <span className="flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                  <HiOutlineCalendar className="w-3.5 h-3.5 text-neon-cyan" />
                  {certificate.date}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono">
              Credential Overview
            </h4>
            <p id="certificate-modal-description" className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              {certificate.desc}
            </p>
          </div>

          {/* Tags / Skills */}
          {certificate.tags && certificate.tags.length > 0 && (
            <div className="flex flex-col gap-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-mono">
                Skills & Topics
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-mono px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/25"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <HiOutlineBadgeCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Certification Achievement</span>
            </div>

            <div className="flex items-center gap-3">
              {certificate.verifyUrl && (
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neon-cyan text-black font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(0,243,255,0.4)] hover:shadow-[0_0_30px_rgba(0,243,255,0.7)] hover:bg-white transition-all duration-300"
                >
                  <span>Verify Credential</span>
                  <HiOutlineExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={() => setOpenModal({ state: false, project: null })}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 text-xs font-medium transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

CertificateDetails.propTypes = {
  openModal: PropTypes.shape({
    state: PropTypes.bool,
    project: PropTypes.shape({
      degree: PropTypes.string,
      school: PropTypes.string,
      date: PropTypes.string,
      grade: PropTypes.string,
      desc: PropTypes.string,
      img: PropTypes.string,
      verifyUrl: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
  setOpenModal: PropTypes.func.isRequired,
};

export default CertificateDetails;
