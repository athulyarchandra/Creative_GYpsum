import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/work6.png'; // Using existing high quality bg
import detailImg from '../assets/work1.png'; // Using existing detail image
import showcaseVideo from '../assets/video1.mp4'; // Importing the video

const Services = () => {
    const services = [
        {
            id: "01",
            title: "Masterpiece False Ceilings",
            desc: "Transforming overhead spaces into architectural statements with precision-crafted gypsum boards. Our false ceilings redefine luxury living.",
            features: ["Modern & Contemporary", "Classic & Victorian", "Multi-Level Designs"]
        },
        {
            id: "02",
            title: "Classic Cornices & Mouldings",
            desc: "Adding timeless elegance with intricate handcrafted gypsum borders and crown mouldings that frame your space with sophistication.",
            features: ["Floral Patterns", "Geometric Borders", "Gold Leaf Accents"]
        },
        {
            id: "03",
            title: "Bespoke Domes & Arches",
            desc: "Creating majestic focal points with perfectly curved gypsum structures and artistic detailing that draw the eye upward.",
            features: ["Grand Domes", "Seamless Arches", "Central Medallions"]
        },
        {
            id: "04",
            title: "Integrated Lighting Coves",
            desc: "Seamlessly blending illumination with architecture. Our custom-designed light troughs create the perfect ambiance for any room.",
            features: ["Hidden LED Channels", "Mood Lighting Integration", "Shadowless Finish"]
        }
    ];

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div className="bg-white min-h-screen">
            {/* Parallax Hero Section */}
            <section ref={ref} className="h-[60vh] relative flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ y }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={heroImg}
                        alt="Luxury Ceiling Work"
                        className="w-full h-full object-cover brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1C1C1C]/90" />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="text-secondary tracking-[0.4em] text-sm md:text-base font-bold uppercase mb-6 block drop-shadow-md">
                            The Art of Gypsum
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight">
                            Exquisite <span className="text-secondary italic">Ceiling</span> <br /> Masterpieces
                        </h1>
                        <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed tracking-wide">
                            Elevating interiors with precision-engineered gypsum solutions. Strictly dedicated to the craft of ceiling perfection.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Introduction Quote */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-primary leading-snug">
                            "We don't just build ceilings; we sculpt the sky of your interior world."
                        </h2>
                        <div className="w-24 h-1 bg-secondary mx-auto mt-12 mb-8" />
                    </motion.div>
                </div>
            </section>

            {/* Alternating Services Layout */}
            <section className="py-20 bg-[#f8f9fa]">
                <div className="container mx-auto px-6 space-y-32">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Visual Side */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-primary/5 transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    {/* Using valid image based on index to vary visuals if possible, otherwise default */}
                                    <img
                                        src={index % 2 === 0 ? detailImg : heroImg}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                                    />
                                    <div className="absolute top-0 left-0 bg-white px-6 py-4 z-10">
                                        <span className="text-4xl font-serif text-primary font-bold">{service.id}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2">
                                <h3 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                                    {service.title}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                    {service.desc}
                                </p>
                                <ul className="space-y-4">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-primary/80 font-medium tracking-wide">
                                            <span className="w-8 h-[1px] bg-secondary mr-4" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Video & Features Split Section - "Luxine" Style */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="mb-12">
                        <span className="text-secondary tracking-[0.2em] font-bold uppercase text-sm">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mt-2">
                            Creating Functional, Stylish, & <br /> Timeless Ceilings
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Video Column (Larger) */}
                        <div className="lg:col-span-7">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group h-[500px]">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <video
                                    src={showcaseVideo}
                                    controls
                                    playsInline
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    poster={heroImg}
                                >
                                    Your browser does not support the video tag.
                                </video>


                            </div>
                        </div>

                        {/* Features Column (Smaller cards) */}
                        <div className="lg:col-span-5 flex flex-col gap-6">
                            {/* Feature 1 */}
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.85 6.361a15.996 15.996 0 00-4.647 4.761m0 0c-.49.998-1.22 1.83-2.12 2.522" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-serif text-primary mb-3">Precision Engineering</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    Utilizing laser-guided leveling and premium gypsum materials to ensure perfectly flat, durable, and crack-free ceiling surfaces.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-serif text-primary mb-3">Timely Project Delivery</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    Our optimized workflow ensures your ceiling installation is completed on schedule without compromising on the artisanal quality.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Tags */}
                    <div className="flex flex-wrap gap-4 mt-12 justify-center lg:justify-start">
                        {["Modern Designs", "Acoustic Solutions", "Fire Resistant materials", "Commercial & Residential"].map((tag, i) => (
                            <span key={i} className="px-6 py-2 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-500">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-[#1C1C1C] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <img src={heroImg} alt="Background" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">
                        Ready to Elevate Your Space?
                    </h2>
                    <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
                        Experience the pinnacle of gypsum craftsmanship. Contact us for a consultation on your ceiling project.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block border border-secondary text-secondary px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-secondary hover:text-white transition-all duration-300"
                    >
                        Get a Quote
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Services;
