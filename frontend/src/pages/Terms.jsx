import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Services.css';
import { useModal } from '../context/ModalContext';
import { Phone } from 'lucide-react';

const Terms = () => {
    const { openModal } = useModal();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="legal-page-container">
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
                    <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

            <main className="legal-content-wrapper">
                <div className="legal-header">
                    <h1>Terms & Conditions</h1>
                    <p className="legal-last-updated">Last Updated: March 20, 2026</p>
                </div>

                <div className="legal-section">
                    <p>
                        Welcome to Escapeloop. These Terms & Conditions ("Terms") govern your use of our website and services. 
                        By accessing or using our website, you agree to be bound by these Terms. If you disagree with any 
                        part of these terms, you may not access the service.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By using the services provided by Escapeloop, you signify your agreement to these Terms and Conditions. 
                        We reserve the right to modify or replace these Terms at any time. It is your responsibility to check 
                        this page periodically for changes.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>2. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise stated, Escapeloop and/or its licensors own the intellectual property rights for all 
                        material on the website. All intellectual property rights are reserved. You may access this from 
                        Escapeloop for your own personal use subjected to restrictions set in these terms and conditions.
                    </p>
                    <p>You must not:</p>
                    <ul className="legal-list">
                        <li>Republish material from Escapeloop</li>
                        <li>Sell, rent or sub-license material from Escapeloop</li>
                        <li>Reproduce, duplicate or copy material from Escapeloop</li>
                        <li>Redistribute content from Escapeloop</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2>3. Professional Services</h2>
                    <p>
                        Escapeloop provides premium technology services including but not limited to AI Soul Implementation, 
                        Web Architecture, App Strategy, and Digital Solutions. The scope, delivery, and payment terms for 
                        these services are governed by separate service agreements signed between Escapeloop and the client.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>4. User Conduct</h2>
                    <p>
                        You agree not to use the website or services for any purpose that is prohibited by these Terms. 
                        You are responsible for all of your activity in connection with the services.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>5. Limitation of Liability</h2>
                    <p>
                        In no event shall Escapeloop, nor any of its officers, directors and employees, be held liable for 
                        anything arising out of or in any way connected with your use of this website whether such liability 
                        is under contract. Escapeloop, including its officers, directors and employees shall not be held 
                        liable for any indirect, consequential or special liability arising out of or in any way related 
                        to your use of this website.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>6. Governing Law</h2>
                    <p>
                        These Terms shall be governed by and defined in accordance with the laws of the jurisdiction in 
                        which Escapeloop operates. You irrevocably consent that the courts of that jurisdiction shall 
                        have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms & Conditions, please contact us at: 
                        <a href="/contact" className="contact-highlight"> Visit Contact Page</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
