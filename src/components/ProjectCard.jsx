import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative overflow-hidden cursor-pointer"
        >
            <div className="relative h-[400px] w-full overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
            </div>

            <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="overflow-hidden">
                    <p className="text-secondary text-sm font-medium tracking-widest uppercase mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.category}
                    </p>
                </div>
                <h3 className="text-2xl font-serif font-medium mb-2">{project.title}</h3>
                <div className="h-0.5 w-0 bg-secondary group-hover:w-full transition-all duration-500 delay-200" />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
