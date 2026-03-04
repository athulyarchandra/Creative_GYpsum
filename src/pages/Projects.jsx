import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

// Importing the specific images provided by the user
import img1 from "../assets/work1.png";
import img2 from "../assets/work2.png";
import img3 from "../assets/work3.png";
import img4 from "../assets/work4.png";
import img5 from "../assets/work5.png";
import img6 from "../assets/work6.png";
import img7 from "../assets/work7.png";
import img8 from "../assets/work8.png";
import img9 from "../assets/work9.png";
import cg1 from "../assets/cg1.jpg";

const Projects = () => {
    // luxine-inspired color palette and typography defaults
    // Using all user provided images

    const projects = [
        { id: 1, category: "Luxury Living", image: img1, title: "Royal Gypsum Ceiling" },
        { id: 2, category: "Modern Design", image: img2, title: "Geometric False Ceiling" },
        { id: 3, category: "Premium Finish", image: img3, title: "Elegant Interior Lighting" },
        { id: 4, category: "Classic Molding", image: img4, title: "Traditional Cornice Detail" },
        { id: 5, category: "Hallway Elegance", image: img5, title: "Corridor Light Integration" },
        { id: 6, category: "Grand Spaces", image: img6, title: "Majestic Hall Ceiling" },
        { id: 7, category: "Intricate Art", image: img7, title: "Detailed Gypsum Carving" },
        { id: 8, category: "Modern Minimalist", image: img8, title: "Sleek Bedroom Ceiling" },
        { id: 9, category: "Ambient Lighting", image: img9, title: "Warm Cove Lighting" },
        { id: 10, category: "Architectural Detail", image: cg1, title: "Custom Ceiling Work" },
    ];

    return (
        <div className="bg-[#f8f9fa] min-h-screen pt-20">
            {/* Luxine-style Header: Clean, Minimal, Serif */}
            <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary tracking-[0.3em] text-xs font-bold uppercase mb-4 block">
                            Portfolio
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
                            Our Masterpieces
                        </h1>
                        <div className="w-24 h-1 bg-secondary mx-auto mb-6" />
                        <p className="text-gray-500 max-w-2xl mx-auto font-light text-lg leading-relaxed">
                            Discover our curated collection of premium gypsum interiors.
                            Where tailored design meets exceptional craftsmanship.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid - Luxine Style (often masonry or clean grid) */}
            <section className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            {/* Simple Luxine-style Footer CTA */}
            <section className="bg-[#1a1a1a] text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-8">
                        Have a project in mind?
                    </h2>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300"
                    >
                        Contact Us
                    </motion.a>
                </div>
            </section>
        </div>
    );
};

export default Projects;
