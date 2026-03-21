import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, MessageCircle, Brain, Cpu, Layers, Activity } from 'lucide-react';
import ServiceVisual from '../components/ServiceVisual';
import LogoCarousel from '../components/LogoCarousel';
import ProcessInfographic from '../components/ProcessInfographic';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import AboutAppSection from '../components/AboutAppSection';
import { useModal } from '../context/ModalContext';
import '../styles/Services.css';

const Services = () => {
    const { openModal } = useModal();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const gridRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!gridRef.current) return;
        const rect = gridRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gridRef.current.style.setProperty('--x', `${x}px`);
        gridRef.current.style.setProperty('--y', `${y}px`);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="services-page">
            <nav className="navbar on-white">
                <div className="logo">
                    <img src="/logo.png" alt="Escapeloop Logo" className="logo-img" />
                    <div className="logo-text-wrapper">
                        <span className="logo-name">
                            <span className="logo-highlight">esc</span>
                            <span className="logo-secondary">apeloop</span>
                        </span>
                        <span className="logo-tagline">TECH SOLUTIONS</span>
                    </div>
                </div>

                <div className="nav-right-container">
                    <button className="header-call-btn" onClick={openModal}><Phone size={18} stroke="url(#orange-grad)" /> <span className="header-call-text">Schedule a Call</span></button>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''} on-white`}>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/services" onClick={() => setIsMenuOpen(false)} style={{ color: '#ff6a3d', fontWeight: '600' }}>Services</Link></li>
                    <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

            <main>
                <section className="services-hero" ref={gridRef} onMouseMove={handleMouseMove}>
                    {/* Infinite Grid Layers */}
                    <div className="services-grid-layer"></div>
                    <div className="services-grid-reveal"></div>
                    <div className="services-glow services-glow-1"></div>
                    <div className="services-glow services-glow-2"></div>

                    <div className="services-hero-content">
                        <div className="hero-card-side">
                            <div className="perspective-container">
                                <div id="card" className="scroll-card">
                                    <div className="video-container">
                                        <video
                                            src="/laptop.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="hero-video"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-text-side">
                            <h2 className="hero-subtitle">Unleash the power of</h2>
                            <h1 className="hero-title">
                                <span className="premium-text">Premium</span> <span className="services-text">Services</span>
                            </h1>
                            <p className="hero-description">
                                Transform your business with intelligent automation, predictive analytics, and AI-driven solutions tailored to your unique needs. Escape the loop of manual tasks and embrace the future of efficiency.
                            </p>
                            <div className="services-hero-buttons">
                                <button className="services-hero-btn secondary" onClick={openModal}>
                                    <Phone size={18} />
                                    Schedule a Call
                                </button>
                                <a href="https://wa.me/919342742656?text=Hi%2C%20can%20i%20get%20more%20info%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer" className="services-hero-btn secondary">
                                    <MessageCircle size={18} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="services-features-section">
                    <div className="section-container">
                        <div className="features-layout">
                            {/* Left Side: Four Text Boxes */}
                            <div className="features-content">
                                <div className="features-grid">
                                    <div className="feature-item">
                                        <div className="feature-icon-wrapper">
                                            <Brain className="feature-icon" size={24} />
                                        </div>
                                        <h3>Faster growth</h3>
                                        <p>Scalable digital solutions that help your business grow faster & reach more customers.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon-wrapper">
                                            <Cpu className="feature-icon" size={24} />
                                        </div>
                                        <h3>Increased Efficiency</h3>
                                        <p>Automate repetitive tasks and streamline workflows to save time & reduce cost.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon-wrapper">
                                            <Layers className="feature-icon" size={24} />
                                        </div>
                                        <h3>Smarter Decisions</h3>
                                        <p>Leverage data-driven insights to make informed decisions and optimize performance.</p>
                                    </div>
                                    <div className="feature-item">
                                        <div className="feature-icon-wrapper">
                                            <Activity className="feature-icon" size={24} />
                                        </div>
                                        <h3>Easy Integration</h3>
                                        <p>Connect your existing tools and systems with our custom integrations.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: ServiceVisual Component */}
                            <div className="features-visual">
                                <ServiceVisual />
                            </div>
                        </div>
                    </div>
                </section>

                <LogoCarousel />

                <AboutAppSection />

                <ProcessInfographic />

                <ContactSection />
            </main>

            <Footer />
        </div>
    );
};

export default Services;