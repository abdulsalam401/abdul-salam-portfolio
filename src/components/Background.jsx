import React from "react";

const Background = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen bg-darkTheme-bg overflow-hidden text-darkTheme-text_primary">
            {/* Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neon-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0"></div>
            <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-neon-cyan/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob [animation-delay:2s] z-0"></div>
            <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-neon-pink/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob [animation-delay:4s] z-0"></div>

            {/* Content wrapper */}
            <div className="relative z-10 w-full h-full flex flex-col">
                {children}
            </div>
        </div>
    );
};

export default Background;
