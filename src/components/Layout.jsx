import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {children || <Outlet />}
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
};

export default Layout;
