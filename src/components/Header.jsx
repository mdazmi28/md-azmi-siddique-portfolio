import React from 'react';
import menuData from "../data/menu"; // Assuming the data is imported from an external file.

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg p-4 fixed top-0 left-0 w-full z-50">
            {/* Navbar Start */}
            <div className="navbar-start flex items-center space-x-4">
                {/* Logo */}
                <a href={menuData.header.logo.link} className="flex items-center space-x-2">
                    <img
                        src="assets/images/my-logo.png"
                        
                        className="h-8 w-auto hidden md:block"
                    />
                    <span className="text-2xl font-semibold hidden md:block">Md Azmi Siddique</span>
                </a>
                {/* Dropdown for mobile */}
                <div className="dropdown lg:hidden ml-auto">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost btn-circle"
                        aria-label="Open menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
                    >
                        {menuData.header.menus.map((menu, index) => (
                            <li key={index}>
                                <a href={menu.link}>{menu.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Navbar Center - Desktop Menu */}
            <div className="navbar-center hidden lg:flex space-x-8">
                {menuData.header.menus.map((menu, index) => (
                    <a
                        key={index}
                        href={menu.link}
                        className="text-lg font-semibold hover:scale-120 transition duration-300"
                    >
                        {menu.title}
                    </a>
                ))}
            </div>

            {/* Navbar End - CTA Button */}
            <div className="navbar-end flex items-center space-x-4">
                <a
                    href={menuData.header.cta.link}
                    className="btn btn-primary bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                >
                    {menuData.header.cta.text}
                </a>
            </div>
        </div>
    );
};

export default Header;
