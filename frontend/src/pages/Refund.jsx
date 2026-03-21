import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Services.css';
import { useModal } from '../context/ModalContext';
import { Phone } from 'lucide-react';

const Refund = () => {
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
                    <h1>Refund & Cancellation Policy</h1>
                    <p className="legal-last-updated">Last Updated: March 20, 2026</p>
                </div>

                <div className="legal-section">
                    <p>
                        At Escapeloop, we strive to ensure our customers are satisfied with our services. 
                        This Refund and Cancellation Policy outlines the procedures and conditions for 
                        cancellations and refunds for our premium technology services and products.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>1. Cancellation Policy</h2>
                    <p>
                        We understand that plans can change. You may cancel your order or service request 
                        subject to the following conditions:
                    </p>
                    <ul className="legal-list">
                        <li>Cancellations made within 24 hours of the initial order are eligible for a full refund.</li>
                        <li>For ongoing monthly services, cancellations must be requested at least 7 days before the next billing cycle.</li>
                        <li>App and Web development projects can be cancelled at any time, but work completed up to the date of cancellation will be billed accordingly.</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2>2. Refund Eligibility</h2>
                    <p>
                        Refunds are granted based on the type of service and the progress made on the project:
                    </p>
                    <ul className="legal-list">
                        <li><strong>Digital Products:</strong> Due to the nature of digital downloads, refunds are only offered if the product is proven to be defective.</li>
                        <li><strong>Consulting Services:</strong> Refunds for consulting sessions are available if cancelled at least 48 hours in advance.</li>
                        <li><strong>Custom Development:</strong> Refunds are processed proportionally based on the milestones achieved and the resources utilized.</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2>3. Non-Refundable Items</h2>
                    <p>
                        Certain items and services are non-refundable under any circumstances:
                    </p>
                    <ul className="legal-list">
                        <li>Domain name registration and renewal fees.</li>
                        <li>Third-party software licenses purchased on your behalf.</li>
                        <li>Administrative and setup fees for server environments.</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2>4. Refund Process</h2>
                    <p>
                        To request a refund, please send an email to our support team. We aim to process all 
                        legitimate refund requests within 7-10 business days of approval.
                    </p>
                    <ul className="legal-list">
                        <li>Refunds will be credited back to the original payment method used.</li>
                        <li>You will receive a confirmation email once your refund has been processed.</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2>5. Modification of Policy</h2>
                    <p>
                        Escapeloop reserves the right to modify this Refund and Cancellation Policy at 
                        any time. Changes will be effective immediately upon posting to this website.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions or concerns regarding our Refund & Cancellation Policy, 
                        please do not hesitate to reach out to us: 
                        <a href="/contact" className="contact-highlight"> Visit Contact Page</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Refund;
