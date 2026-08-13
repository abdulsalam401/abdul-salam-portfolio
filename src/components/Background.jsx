
import PropTypes from "prop-types";

const Background = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen bg-darkTheme-bg overflow-x-hidden text-darkTheme-text_primary">
            {/* Fixed background layer */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Base radial gradient wash */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(188,19,254,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,243,255,0.06),transparent_60%)]"></div>

                {/* Background Orbs */}
                <div className="absolute top-[-10%] left-[-10%] w-[28rem] h-[28rem] bg-neon-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
                <div className="absolute top-[20%] right-[-10%] w-[28rem] h-[28rem] bg-neon-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob [animation-delay:2s]"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[32rem] h-[32rem] bg-neon-pink/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob [animation-delay:4s]"></div>

                {/* Subtle grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"></div>

                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5))]"></div>
            </div>

            {/* Content wrapper */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Background;

Background.propTypes = {
  children: PropTypes.node,
};
