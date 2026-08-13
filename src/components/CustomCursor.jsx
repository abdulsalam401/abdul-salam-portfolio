import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const SPRING_CONFIG = { damping: 30, stiffness: 400, mass: 0.4 };

const CustomCursor = () => {
    // Motion values live outside React state, so pointer movement updates the
    // transform directly instead of re-rendering this component on every event.
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const smoothX = useSpring(cursorX, SPRING_CONFIG);
    const smoothY = useSpring(cursorY, SPRING_CONFIG);

    const [isHovering, setIsHovering] = useState(false);
    const [enabled, setEnabled] = useState(false);

    // Only run on precise pointers (mouse/trackpad) that also allow motion.
    useEffect(() => {
        if (typeof window === "undefined" || !window.matchMedia) return;
        const query = window.matchMedia(
            "(pointer: fine) and (prefers-reduced-motion: no-preference)"
        );
        const sync = () => setEnabled(query.matches);
        sync();
        query.addEventListener("change", sync);
        return () => query.removeEventListener("change", sync);
    }, []);

    useEffect(() => {
        if (!enabled) return;

        const handleMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        // Cheap, allocation-free check: no getComputedStyle, so no forced
        // style recalculation on every pointer move.
        const handleOver = (e) => {
            const target = e.target;
            const interactive =
                target instanceof Element &&
                !!target.closest('a, button, [role="button"], .cursor-pointer, input, textarea');
            setIsHovering((prev) => (prev === interactive ? prev : interactive));
        };

        window.addEventListener("pointermove", handleMove, { passive: true });
        window.addEventListener("pointerover", handleOver, { passive: true });

        return () => {
            window.removeEventListener("pointermove", handleMove);
            window.removeEventListener("pointerover", handleOver);
        };
    }, [enabled, cursorX, cursorY]);

    // Centre each element on the pointer without re-rendering.
    const ringX = useTransform(smoothX, (v) => v - 16);
    const ringY = useTransform(smoothY, (v) => v - 16);
    const dotX = useTransform(cursorX, (v) => v - 4);
    const dotY = useTransform(cursorY, (v) => v - 4);

    if (!enabled) return null;

    return (
        <>
            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neon-purple pointer-events-none z-[9999] mix-blend-screen max-md:hidden"
                style={{ x: ringX, y: ringY }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "#00f3ff" : "#bc13fe",
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.15 }}
            />
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#00f3ff] max-md:hidden"
                style={{ x: dotX, y: dotY }}
                animate={{ opacity: isHovering ? 0 : 1 }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.05 }}
            />
        </>
    );
};

export default CustomCursor;
