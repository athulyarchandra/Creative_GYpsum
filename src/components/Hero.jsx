import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImage from "../assets/cg1.jpg";

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* Background with Smooth Zoom Animation */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                className="absolute inset-0"
            >
                <img
                    src={bgImage}
                    alt="Luxury Gypsum Ceiling Work"
                    className="w-full h-full object-cover"
                />

                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                <div className="max-w-5xl mx-auto">

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-secondary uppercase tracking-[0.4em] text-xs md:text-sm font-semibold mb-6"
                    >
                        Premium Gypsum Ceiling Specialists
                    </motion.p>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-white text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight mb-6"
                    >
                        Precision in <br />
                        <span className="italic font-normal text-gray-300">
                            Ceiling Design
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-300 max-w-2xl mx-auto mb-10 text-base md:text-lg font-light"
                    >
                        Expert craftsmanship in modern gypsum ceiling work —
                        delivering clean finishes, elegant detailing, and flawless execution.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Link
                            to="/projects"
                            className="backdrop-blur-md bg-white/90 text-black px-10 py-4 uppercase tracking-widest text-sm font-semibold rounded-sm hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg"
                        >
                            View Ceiling Projects
                        </Link>

                        <Link
                            to="/contact"
                            className="backdrop-blur-md border border-white/40 text-white px-10 py-4 uppercase tracking-widest text-sm font-semibold rounded-sm hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Request a Quote
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Animated Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
            >
                <span className="text-xs tracking-[0.3em] uppercase mb-2">
                    Scroll
                </span>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-[2px] h-10 bg-white/40"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
