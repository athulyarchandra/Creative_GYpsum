import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">CREATIVE<span className="text-secondary">GYPSUM</span></h3>
                        <p className="text-gray-300 mb-6">
                            Transforming interiors with elegant gypsum work, false ceilings, and premium finishing.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-gray-300 hover:text-secondary transition-colors">Services</Link></li>
                            <li><Link to="/projects" className="text-gray-300 hover:text-secondary transition-colors">Projects</Link></li>
                            <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Our Services</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-300">False Ceiling</li>
                            <li className="text-gray-300">Gypsum Partitions</li>
                            <li className="text-gray-300">3D Wall Panels</li>
                            <li className="text-gray-300">Lighting Design</li>
                            <li className="text-gray-300">Interior Finishing</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-secondary mt-1" size={20} />
                                <span className="text-gray-300">123 Street Name, Karunagappally,Kollam, UAE</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-secondary" size={20} />
                                <span className="text-gray-300"> +91 80862 25742</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-secondary" size={20} />
                                <span className="text-gray-300">info@creativegypsum.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Creative Gypsum Works. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
