import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Clock, Send, Instagram, Facebook, Linkedin } from 'lucide-react';
import contactBg from '../assets/work7.png'; // Using a subtle, elegant user image for header

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        user_email: '', // Changed to user_email to match standard EmailJS templates
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY - You must replace these with your actual EmailJS credentials
        // Sign up at https://www.emailjs.com/
        // Create a service (e.g., Gmail)
        // Create a template (connect it to athulyarchandra@gmail.com)
        // Get your Public Key from Account > API Keys

        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully! We will contact you at ' + formData.user_email);
                setFormData({ name: '', user_email: '', phone: '', subject: '', message: '' });
            }, (error) => {
                console.log(error.text);
                alert('Failed to send message, please try again or contact us directly.');
            });
    };

    return (
        <div className="pt-20 bg-[#f8f9fa] min-h-screen">
            {/* Luxine-style Page Header */}
            <section className="relative h-[40vh] md:h-[50vh] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0">
                    <img src={contactBg} alt="Contact Header" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-secondary tracking-[0.3em] text-xs font-bold uppercase mb-4 block"
                    >
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif text-white"
                    >
                        Contact <span className="italic text-secondary">Us</span>
                    </motion.h1>
                </div>
            </section>

            {/* Split Layout Contact Section */}
            <section className="container mx-auto px-6 py-20 md:py-32 -mt-20 relative z-20">
                <div className="flex flex-col lg:flex-row shadow-2xl overflow-hidden rounded-xl">

                    {/* Left Side: Dark Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-5/12 bg-[#111] text-white p-10 md:p-16 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-3xl font-serif mb-2">Let's Discuss</h2>
                            <p className="text-gray-400 mb-12 font-light">
                                Ready to transform your space? Contact us for a consultation or quote.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-1">Our Location</h4>
                                        <p className="text-gray-300 font-light leading-relaxed">
                                            Thodiyoor, Kallelibhagom,<br />
                                            Karunagappally, Kollam, 690523<br />

                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-1">Call Us</h4>
                                        <p className="text-gray-300 font-light">+91 80862 25742</p>
                                        <p className="text-gray-300 font-light">+91 0000000000</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-secondary shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-secondary mb-1">Email Us</h4>
                                        <p className="text-gray-300 font-light">info@creativegypsum.com</p>
                                        <p className="text-gray-300 font-light">support@creativegypsum.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-secondary hover:text-white transition-all">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Light Form Panel */}
                    <div className="lg:w-7/12 bg-white p-10 md:p-16">
                        <h2 className="text-3xl font-serif text-primary mb-8">Send a Message</h2>
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full border-b border-gray-300 py-2 focus:border-secondary focus:outline-none transition-colors bg-transparent"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full border-b border-gray-300 py-2 focus:border-secondary focus:outline-none transition-colors bg-transparent"
                                        placeholder="+971 50 000 0000"
                                    />
                                </div>
                            </div>

                            <input
                                type="email"
                                name="user_email"
                                value={formData.user_email}
                                onChange={handleChange}
                                required
                                className="w-full border-b border-gray-300 py-2 focus:border-secondary focus:outline-none transition-colors bg-transparent"
                                placeholder="john@example.com"
                            />

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full border-b border-gray-300 py-2 focus:border-secondary focus:outline-none transition-colors bg-transparent"
                                    placeholder="Project Enquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full border-b border-gray-300 py-2 focus:border-secondary focus:outline-none transition-colors bg-transparent resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="bg-primary text-white px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-secondary transition-colors duration-300 w-full md:w-auto"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 w-full grayscale contrast-125">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31520.99764573318!2d76.51509653723281!3d9.052388040899503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0604748432dc03%3A0x90068b5896c715d1!2sKallelibhagom%2C%20Kerala!5e0!3m2!1sen!2sin!4v1771002836918!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Map"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;

