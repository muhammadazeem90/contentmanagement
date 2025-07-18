import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const funTypes = [
    "Animal oddities", "Everyday science", "Historical obscurities", "Escape rooms",
    "Street performances", "Online challenges", "Festivals impact", "Crafting movement",
    "Social gaming", "Virtual reality"
];

const Facts = () => {
    const [selectedFunType, setSelectedFunType] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [wordCount, setWordCount] = useState(700);

    const handleSliderChange = (e) => {
        setWordCount(e.target.value);
    };

    return (
        <div className="text-white">
            {/* Dropdown */}
            <div className="mb-6">
                <p className="mb-3 text-lg font-medium">Which type of “Facts” content do you want to create?</p>
                <div className="relative w-[300px] md:w-[500px]">
                    <div
                        className="bg-[#1E1E1E] px-4 py-3.5 rounded-xl cursor-pointer flex justify-between items-center"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <span>{selectedFunType || "Search"}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {dropdownOpen && (
                        <div className="absolute top-full mt-1 bg-[#1E1E1E] w-full rounded-xl shadow-lg z-10 max-h-[200px] overflow-y-scroll custom-scrollbar">
                            {funTypes.map((type) => (
                                <div
                                    key={type}
                                    className="px-4 py-2 hover:bg-[#2A2A2E] cursor-pointer"
                                    onClick={() => {
                                        setSelectedFunType(type);
                                        setDropdownOpen(false);
                                    }}
                                >
                                    {type}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>




            {/* I have create Custom Slider we have another Option Is mui */}




            <div className="mb-6">
                <label className="block mb-10 text-lg">Set the number of words for output text.</label>
                <div className="relative w-[250px]">
                    <div className="absolute top-1/2 -mt-3 -translate-y-1/2 w-full h-2 rounded-full bg-gray-700 overflow-hidden">
                        <div
                            className="h-full bg-pink-500 transition-all duration-200"
                            style={{ width: `${((wordCount - 100) / 900) * 100}%` }}
                        />
                    </div>

                    <input
                        type="range"
                        min="100"
                        max="1000"
                        value={wordCount}
                        onChange={handleSliderChange}
                        className="w-full appearance-none h-2 bg-transparent relative"
                    />

                    <div
                        className="absolute -top-9 text-sm px-2 py-1 rounded-full text-white bg-purple-600 transition-all duration-200"
                        style={{
                            left: `calc(${((wordCount - 100) / 900) * 100}% - 20px)`
                        }}
                    >
                        {wordCount}
                    </div>

                    <div className="flex justify-between text-sm text-gray-400 mt-2">
                        <span>100</span>
                        <span>1000</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facts;
