import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0c051b]">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
