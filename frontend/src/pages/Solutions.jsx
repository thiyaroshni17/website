import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Solutions.css';

const Solutions = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const containerRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (containerRef.current) {
                const x = e.clientX;
                const y = e.clientY;
                // Update CSS variables for the radial mask
                containerRef.current.style.setProperty('--x', `${x}px`);
                containerRef.current.style.setProperty('--y', `${y}px`);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="solutions-page-container" ref={containerRef}>
            <header className="solutions-header">
                <nav className="navbar">
                    <div className="logo">
                        <img src="/logo.png" alt="Escapeloop Logo" className="logo-img" />
                        <span className="logo-name">
                            <span className="logo-highlight">esc</span>
                            <span className="logo-secondary">apeloop</span>
                        </span>
                    </div>

                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>

                        <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                        <li><a href="/#blog" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
                        <li><a href="/#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Infinite Grid Background Layer */}
            <div className="grid-container">
                <div className="glow glow-1"></div>
                <div className="glow glow-2"></div>
                <div className="grid-layer"></div>
                <div className="grid-reveal"></div>
            </div>

            {/* Main Content */}
            <main className="solutions-content">
                <h1 className="solutions-title">Our Solutions</h1>
                <p className="solutions-subtitle">
                    We provide end-to-end custom software solutions that help businesses streamline operations,
                    improve efficiency, and accelerate digital growth. Our expertise spans web and mobile development,
                    enterprise software, AI-powered automation, and scalable SaaS products.
                </p>
                <div className="solutions-actions">
                    <Link to="/contact" className="solutions-btn btn-dark">
                        Get Started
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Solutions;
