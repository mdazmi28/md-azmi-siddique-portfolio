"use client"; // Mark as a client component for Next.js

import React, { useState, useEffect, useRef } from "react";
import menuData from "../data/menu"; // Import the menuData object

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State for toggling the menu
    const menuRef = useRef(null); // Ref for the menu container

    // Close the menu if a click occurs outside the menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Add event listener for click outside
        document.addEventListener("click", handleClickOutside);

        // Clean up event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const renderMenu = (menus) => {
        return menus.map((menu, index) => (
            <div key={index} className="relative group px-3 z-1">
                <a
                    href={menu.link}
                    className="text-gray-300 hover:text-white px-2 py-1 block"
                >
                    {menu.title}
                </a>
                {/* Check if the menu has submenus */}
                {menu.submenus && (
                    <div className="absolute left-0 mt-2 space-y-2 bg-gray-800 p-4 rounded shadow-lg hidden group-hover:block">
                        {menu.submenus.map((submenu, subIndex) => (
                            <a
                                key={subIndex}
                                href={submenu.link}
                                className="text-gray-300 hover:text-white block"
                            >
                                {submenu.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        ));
    };

    return (
        <nav className="bg-gray-800 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo */}
                <a href={menuData.header.logo.link} className="text-white text-xl font-bold">
                    <img
                        src={menuData.header.logo.image_url}
                        alt={menuData.header.logo.alt_text}
                        className="h-8"
                    />
                </a>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-300 hover:text-white focus:outline-none md:hidden"
                >
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                isOpen
                                    ? "M6 18L18 6M6 6l12 12" // Close icon
                                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                            }
                        />
                    </svg>
                </button>

                {/* Unified Menu */}
                <div
                    ref={menuRef} // Attach the ref here
                    className={`fixed top-0 right-0 h-full bg-gray-800 z-50 transition-transform transform md:relative md:translate-x-0 md:flex md:space-x-4 ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    } w-64 md:w-auto`}
                >
                    {/* Close Button (Visible only in mobile view) */}
                    <div className="flex justify-end p-4 md:hidden">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 p-6 md:p-0">
                        {/* Map through the menuData */}
                        {renderMenu(menuData.header.menus)}

                        {/* Call to Action Button */}
                        <a
                            href={menuData.header.cta.link}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            {menuData.header.cta.text}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
