import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import profileimage from "./Assets/profileimage.png";

const Navbar = () => {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full flex items-center justify-between h-[92px] rounded-t-[40px] sm:rounded-none border border-b-2 border-l-0 border-r-0 border-t-0 border-gray-500 bg-[#0D0D0D] text-white px-3 md:px-6 py-4"
        >
            {/* Left Side */}
            <div className="flex items-center gap-3">
                <button className="p-2 bg-gray-800 cursor-pointer rounded-xl hover:bg-[#1a1a1a] transition">
                    <ArrowLeft className="text-white w-5 h-5" />
                </button>
                <div>
                    <h1 className="text-white text-[20px] flex items-center gap-1">
                        Media management <span className="text-sm">✏️</span>
                    </h1>
                    <p className="text-[16px] text-gray-400 -mt-1">Draft campaign</p>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                    <p className="text-white font-medium text-[18px]">Jane Cooper</p>
                    <button className="text-[#f755f7] text-[19px] underline cursor-pointer hover:opacity-80 transition">
                        Change profile
                    </button>
                </div>
                <img
                    src={profileimage}
                    alt="Avatar"
                    className="h-13 rounded-2xl object-cover"
                />
            </div>
        </motion.div>
    );
};

export default Navbar;
