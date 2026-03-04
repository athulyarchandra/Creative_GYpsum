import React from 'react';
import { motion } from 'framer-motion';
import { Check, Layers, Target, ArrowUpRight, Phone } from 'lucide-react';
import mainImg from '../assets/work6.png'; // Large image
import bgImage from "../assets/cg1.jpg";
const About = () => {
    return (
        <div className="bg-[#f9f7f2] min-h-screen pt-20">
            {/* Luxine-style About Section */}
            <section className="container mx-auto px-6 py-24 md:py-32">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left Column: Images */}
                    <div className="lg:w-1/2 relative">
                        {/* Dot Pattern Decoration (CSS or SVG) */}
                        <div className="absolute -bottom-12 -left-12 w-48 h-48 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(#d4af37 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img src={mainImg} alt="Luxury Interior" className="w-full h-auto object-cover rounded-3xl" />
                        </motion.div>

                        {/* Secondary Image - Overlapping */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="absolute -bottom-16 -right-8 w-2/3 md:w-1/2 z-20"
                        >
                            <div className="bg-white p-2 rounded-3xl shadow-2xl">
                                <img src={bgImage} alt="Detail Work" className="w-full h-auto object-cover rounded-2xl" />
                            </div>
                        </motion.div>

                        {/* Vertical Text Decoration */}
                        <div className="absolute top-0 -right-12 hidden xl:block">
                            <span className="writing-vertical text-6xl font-bold text-gray-200 uppercase tracking-widest opacity-50 select-none" style={{ writingMode: 'vertical-rl' }}>
                                Creative
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:w-1/2 mt-16 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Small Heading */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-secondary text-xl">★</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-gray-600">About Us</span>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6 leading-tight">
                                DESIGNING SPACES THAT FEEL LIKE <br />
                                <span className="font-light">LUXURY HOME</span>
                            </h2>

                            {/* Description */}
                            <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                We create elegant, high-end interiors that reflect comfort, sophistication, and timeless beauty,
                                turning everyday living into a luxurious experience.
                            </p>

                            {/* Checkmarks */}
                            <div className="flex flex-col sm:flex-row gap-6 mb-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#a3906c] flex items-center justify-center text-white shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-600 text-sm font-medium">We ensuring every project reflects both beauty.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-[#a3906c] flex items-center justify-center text-white shrink-0">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="text-gray-600 text-sm font-medium">We create spaces that are stylish, and efficient.</span>
                                </div>
                            </div>

                            {/* Mission / Vision Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                                        <Layers className="text-[#a3906c]" size={32} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                        Our mission is to craft refined, elegant & functional living space that redefine.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        <span className="w-2 h-2 bg-[#a3906c] rounded-full"></span>
                                        To Deliver Thoughtfully Crafted and Spaces
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-primary">Our Vision</h3>
                                        <Target className="text-[#a3906c]" size={32} strokeWidth={1.5} />
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                        Our vision is to become a trusted leader in architecture & interior design.
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                                        <span className="w-2 h-2 bg-[#a3906c] rounded-full"></span>
                                        To Redefine Modern Living Through Design
                                    </div>
                                </div>
                            </div>

                            {/* CTA / Contact */}
                            <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-gray-200 pt-8">
                                <a href="/about" className="bg-[#a3906c] text-white px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-primary transition-colors flex items-center gap-2">
                                    More About Us
                                    <ArrowUpRight size={16} />
                                </a>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#a3906c]">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Let's make something great work together</span>
                                        <a href="/contact" className="text-primary font-bold underline decoration-[#a3906c] decoration-2 underline-offset-4 hover:text-[#a3906c] transition-colors">
                                            Get Free Quote
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
