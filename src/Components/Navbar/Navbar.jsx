import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'
import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'; // Add FiMenu import

const Navbar = () => {
    const [theme, setTheme] = useState('light');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <nav className="navbar">
            <div className="nav-brand">
                <h1>Portfolio</h1>
            </div>
            <div className="nav-right">
                <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <FiMenu size={24} />
                </button>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li>
                        <button className="theme-toggle" onClick={toggleTheme}>
                            {theme === 'light' ? <FiMoon className="theme-icon" /> : <FiSun className="theme-icon" />}
                        </button>
                    </li>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#skill">Skills</a></li>
                    <li><a href="#" download>Resume</a></li>
                    <li><a href="#contact">Contact</a></li>
                   
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;