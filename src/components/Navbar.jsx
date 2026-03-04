import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' },
    ];

    // Determine if we should show transparent nav based on route (only Home)
    const isHome = location.pathname === '/';

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'
                }`}>
                {/* Top Bar - Hidden on mobile, fades out on scroll */}
                <div className={`hidden md:block transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 mb-2'}`}>
                    <div className="container mx-auto px-4 flex justify-between text-sm text-gray-200">
                        {!scrolled && isHome ? (
                            <div className="flex gap-6 w-full justify-between items-center border-b border-white/20 pb-2">
                                <div className="flex gap-4">
                                    <span className="flex items-center gap-1 hover:text-secondary transition-colors"><Phone size={14} className="text-secondary" />  +91 80862 25742</span>
                                    <span className="flex items-center gap-1 hover:text-secondary transition-colors"><MapPin size={14} className="text-secondary" /> Karunagappally,Kollam</span>
                                </div>
                                <div className="flex gap-4">
                                    <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>

                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold z-50 relative">
                        <span className={scrolled || !isHome ? 'text-primary' : 'text-white'}>CREATIVE</span>
                        <span className="text-secondary">GYPSUM</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative font-medium text-sm tracking-wide transition-colors group py-2 ${scrolled || !isHome ? 'text-gray-700 hover:text-primary' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full`}></span>
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className={`px-5 py-2.5 rounded text-sm font-bold transition-all transform hover:-translate-y-0.5 ${scrolled || !isHome
                                    ? 'bg-primary text-white hover:bg-primary/90'
                                    : 'bg-white text-primary hover:bg-gray-100'
                                }`}
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 relative focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X size={28} className="text-gray-800" />
                        ) : (
                            <Menu size={28} className={scrolled || !isHome ? 'text-gray-800' : 'text-white'} />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />
                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[75%] max-w-sm bg-white z-50 md:hidden shadow-2xl overflow-y-auto"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="mb-8 mt-12">
                                    <h3 className="text-2xl font-bold text-primary">Menu</h3>
                                </div>

                                <div className="flex flex-col gap-2">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-gray-700 font-medium transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                            <ChevronRight size={16} className="text-gray-400" />
                                        </Link>
                                    ))}
                                </div>

                                <div className="mt-auto pt-8 border-t border-gray-100">
                                    <Link
                                        to="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full bg-secondary text-white py-3 rounded-lg text-center font-bold mb-6 hover:bg-yellow-600 transition-colors"
                                    >
                                        Get Free Quote
                                    </Link>

                                    <div className="space-y-3 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Phone size={16} className="text-secondary" />
                                            <span> +91 80862 25742</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-secondary" />
                                            <span>Karunagappally,Kollam</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
