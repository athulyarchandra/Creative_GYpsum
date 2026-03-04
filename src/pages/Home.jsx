import React from 'react';
import { motion } from 'framer-motion';
import { Check, Layers, Target, ArrowUpRight, Phone } from 'lucide-react';
import Hero from '../components/Hero';
import mainImg from '../assets/work6.png'; // Large image
import bgImage from "../assets/cg1.jpg";
import detailImg from '../assets/work2.png';   // for Parallax
import heroImg from '../assets/work6.png'; // Using existing high quality bg
import showcaseVideo from '../assets/video1.mp4'; // Importing the video

const Home = () => {
  return (
    <div className="bg-[#fcfcfc] overflow-x-hidden">
      <Hero />

      {/* Luxine-style Intro Section (Moved from About) */}
      <section className="py-12 md:py-20 w-full px-4 md:px-12 lg:px-24 bg-[#f9f7f2]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center max-w-480 mx-auto">

          {/* Left Column: Images */}
          <div className="lg:w-1/2 relative">
            {/* Dot Pattern Decoration */}
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
              <img src={mainImg} alt="Luxury Interior" className="w-full h-137.5 object-cover rounded-3xl" />
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

            {/* Vertical Text Decoration - Matches Screenshot */}
            <div className="absolute top-10 -right-20 hidden xl:block z-0 pointer-events-none">
              <span
                className="writing-vertical text-8xl font-bold uppercase tracking-widest select-none"
                style={{
                  writingMode: 'vertical-rl',
                  color: 'transparent',
                  WebkitTextStroke: '2px rgba(212, 175, 55, 0.2)'
                }}
              >
                Luxine
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

      {/* Services / Process - Luxine Minimalist */}
      <section className="bg-[#111] text-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-secondary tracking-[0.2em] text-xs font-bold uppercase mb-4 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-serif">Mastering the Detail</h2>
            </div>
            <a href="/projects" className="hidden md:block text-white border-b border-white pb-1 uppercase text-xs tracking-widest font-bold hover:text-secondary hover:border-secondary transition-all">
              View Full Portfolio
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Design", desc: "Conceptualizing unique layouts tailored to your space." },
              { title: "Craft", desc: "Precision molding and installation by master artisans." },
              { title: "Finish", desc: "Seamless integration of lighting and final touches." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="border-t border-white/10 pt-8 group hover:border-secondary/50 transition-colors"
              >
                <span className="text-secondary text-sm font-bold mb-4 block">0{i + 1}</span>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-secondary transition-colors">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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


        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${detailImg})` }}>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
            <div className="max-w-2xl">
              <h2 className="text-white text-4xl md:text-6xl font-serif mb-8 italic">
                "Interior design is making the best possible use of the available space."
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;