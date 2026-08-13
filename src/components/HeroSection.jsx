import { useRef, useState, useEffect } from "react";
import HeroImg from "../assets/my2.webp";
import { Bio } from "../data/constants";
import { motion, useInView, useReducedMotion } from "motion/react";

const MORPH = [
  "60% 40% 30% 70% / 60% 30% 70% 40%",
  "30% 70% 70% 30% / 50% 60% 30% 60%",
  "60% 40% 30% 70% / 60% 30% 70% 40%",
];

const useTypewriter = (words, { typeSpeed = 60, deleteSpeed = 30, pause = 1200 } = {}) => {
  const [text, setText] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setText(words[0]);
      return;
    }
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      if (deleting) {
        charIndex -= 1;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, deleteSpeed);
      } else {
        charIndex += 1;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      }
    };

    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, pause, reduceMotion]);

  return text;
};

const Typewriter = ({ strings }) => {
  const text = useTypewriter(strings);
  return (
    <span className="after:content-['|'] after:animate-pulse after:ml-0.5 after:text-neon-cyan">
      {text}
    </span>
  );
};

const HeroSection = () => {
  const shapeRef = useRef(null);
  // Infinite animations keep repainting even when scrolled past, so only run
  // them while the hero is actually on screen (and never if motion is reduced).
  const inView = useInView(shapeRef, { margin: "100px" });
  const reduceMotion = useReducedMotion();
  const animateShapes = inView && !reduceMotion;

  return (
    <div
      id="about"
      className="flex justify-center pt-[120px] pb-16 sm:pt-[150px] sm:pb-[100px] sm:px-[30px] px-4 relative w-full mx-auto min-h-screen items-center"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-6xl gap-5 relative z-10">
        <motion.div
          id="Left"
          className="w-full order-2 lg:order-1 mb-8 md:mb-0 flex flex-col items-center lg:items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="font-semibold text-center text-5xl md:text-6xl lg:text-start text-white mb-4 text-glow-purple tracking-normal leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I am <br />
            <span className="text-neon-cyan text-glow-cyan font-bold tracking-wide">{Bio.name}</span>
          </motion.h1>
          <motion.div
            className="text-2xl mb-6 text-center lg:text-start md:text-4xl font-medium text-darkTheme-text_primary tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I am a{" "}
            <span className="text-neon-cyan cursor-pointer text-glow-cyan inline-block">
              <Typewriter strings={Bio.roles} />
            </span>
          </motion.div>

          <motion.p
            className="text-[16px] sm:text-xl lg:text-xl text-center lg:text-left mb-10 text-gray-300 font-light leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {Bio.description}
          </motion.p>

          <motion.a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-80 self-center lg:self-start bg-transparent font-bold text-lg py-3 px-8 rounded-full border border-neon-purple text-white shadow-[0_0_15px_rgba(188,19,254,0.4)] hover:shadow-[0_0_30px_rgba(188,19,254,0.8)] hover:bg-neon-purple/10 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Check Resume
          </motion.a>
        </motion.div>

        <motion.div
          id="Right"
          className="w-full order-1 lg:order-2 flex justify-center items-center lg:justify-end gap-4 mb-[30px] sm:mb-[50px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            ref={shapeRef}
            className="relative flex justify-center items-center w-full max-w-[280px] h-[280px] sm:max-w-[420px] sm:h-[420px] z-10"
            animate={animateShapes ? { y: [0, -20, 0] } : { y: 0 }}
            transition={
              animateShapes
                ? { duration: 5, repeat: Infinity, ease: "easeInOut" }
                : { duration: 0.3 }
            }
          >
            {/* Morphing glowing background */}
            <motion.div
              className="absolute inset-[-10px] bg-gradient-to-tr from-neon-purple to-neon-cyan opacity-60 blur-2xl"
              style={{ borderRadius: MORPH[0], willChange: "transform" }}
              animate={
                animateShapes
                  ? { borderRadius: MORPH, rotate: [0, 180, 360] }
                  : { rotate: 0 }
              }
              transition={
                animateShapes
                  ? { duration: 15, repeat: Infinity, ease: "linear" }
                  : { duration: 0.3 }
              }
            />

            {/* Image with morphing shape */}
            <motion.img
              src={HeroImg}
              alt="Abdul Salam, cybersecurity and ethical hacking student"
              width="420"
              height="420"
              fetchPriority="high"
              decoding="async"
              className="relative object-cover w-full h-full border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]"
              style={{ borderRadius: MORPH[0] }}
              animate={animateShapes ? { borderRadius: MORPH } : {}}
              transition={
                animateShapes
                  ? { duration: 8, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.3 }
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
