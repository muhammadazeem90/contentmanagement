import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.div
            className="bg-[#0B0B0C] rounded-b-[40px] sm:rounded-none px-6 md:py-10 py-5 md:h-[100px] border border-t-2 border-l-0 border-r-0 border-b-0 border-gray-500 gap-5 flex md:flex-row flex-col items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            {/* Back Button */}
            <motion.button
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="border border-gray-600 w-full md:w-auto text-white px-12 py-3 text-lg cursor-pointer rounded-full hover:bg-[#1a1a1a] transition"
            >
                Back
            </motion.button>

            {/* Next Button */}
            <motion.button
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white text-purple-600 font-medium md:flex w-full md:w-auto text-center items-center text-lg gap-15 cursor-pointer px-8 py-3 rounded-full hover:shadow-md transition"
            >
                <span>Next</span>
                <span className='md:flex flex-row hidden'>
                    <ChevronRight className='-mr-2' size={16} />
                    <ChevronRight size={16} />
                </span>
            </motion.button>
        </motion.div>
    );
};

export default Footer;
