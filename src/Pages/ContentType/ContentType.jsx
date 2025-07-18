import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Facts from './Components/Facts/Facts';
import Fun from './Components/Fun/Fun';
import Education from './Components/Eduction/Eduction';
import Investment from './Components/Investment/Investment';
import News from './Components/News/News';
import Sports from './Components/Sports/Sports';

const componentMap = {
    Fun: Fun,
    Education: Education,
    Sports: Sports,
    News: News,
    Investment: Investment,
    Facts: Facts
};

const ContentType = () => {
    const categoryKeys = Object.keys(componentMap);
    const [selectedCategory, setSelectedCategory] = useState(categoryKeys[0]);

    const SelectedComponent = componentMap[selectedCategory];

    return (
        <div className="md:p-8 p-4 text-white">
            <h1 className="text-3xl font-semibold mb-1">Content type</h1>
            <p className="text-white mb-6">Choose a content type that best fits your needs.</p>

            <hr className="border-gray-500 border-1 mb-6" />

            <div className="mb-4">
                <p className="mb-4 text-lg font-medium">What type of content are you creating?</p>
                <div className="flex flex-wrap gap-3">
                    {categoryKeys.map((option, index) => (
                        <motion.button
                            key={option}
                            whileHover={{ y: -2 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`md:px-7 px-5 py-3 rounded-full border cursor-pointer 
        ${selectedCategory === option
                                    ? "bg-[#7B3EFF] text-white border-transparent"
                                    : "border-gray-600 text-white"
                                }`}
                            onClick={() => setSelectedCategory(option)}
                        >
                            {option}
                        </motion.button>
                    ))}
                </div>

            </div>


            <div className="mt-10">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <SelectedComponent />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ContentType;

