import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Services.css';
import { useModal } from '../context/ModalContext';
import { Phone } from 'lucide-react';

const Privacy = () => {
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
                    <h1>Privacy Policy</h1>
                    <p className="legal-last-updated">Last Updated: March 20, 2026</p>
                </div>

                <div className="legal-section">
                    <p>
                        At Escapeloop, accessible from our website, one of our main priorities is the privacy of our visitors. 
                        This Privacy Policy document contains types of information that is collected and recorded by 
                        Escapeloop and how we use it.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>1. Information We Collect</h2>
                    <p>
                        The personal information that you are asked to provide, and the reasons why you are asked to 
                        provide it, will be made clear to you at the point we ask you to provide your personal information.
                    </p>
                    <ul className="legal-list">
                        <li>Contact information (e.g., name, email address, phone number).</li>
                        <li>Account credentials for our AI and web services.</li>
                        <li>Log files and usage data collected automatically when you visit our site.</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect in various ways, including to:</p>
                    <ul className="legal-list">
                        <li>Provide, operate, and maintain our website.</li>
                        <li>Improve, personalize, and expand our website and AI services.</li>
                        <li>Understand and analyze how you use our website.</li>
                        <li>Develop new products, services, features, and functionality.</li>
                        <li>Communicate with you, either directly or through one of our partners.</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2>3. Data Protection and Security</h2>
                    <p>
                        We take the security of your data seriously. We implement a variety of security measures to 
                        maintain the safety of your personal information when you enter, submit, or access your 
                        personal information. All data is stored in encrypted environments with restricted access.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>4. Cookies and Web Beacons</h2>
                    <p>
                        Like any other website, Escapeloop uses 'cookies'. These cookies are used to store information 
                        including visitors' preferences, and the pages on the website that the visitor accessed or 
                        visited. The information is used to optimize the users' experience by customizing our web 
                        page content based on visitors' browser type and/or other information.
                    </p>
                </div>

                <div className="legal-section">
                    <h2>5. Third-Party Privacy Policies</h2>
                    <p>
                        Escapeloop's Privacy Policy does not apply to other advertisers or websites. Thus, we are 
                        advising you to consult the respective Privacy Policies of these third-party ad servers for 
                        more detailed information. 
                    </p>
                </div>

                <div className="legal-section">
                    <h2>6. Your Privacy Rights</h2>
                    <p>You have the right to request that we:</p>
                    <ul className="legal-list">
                        <li>Disclose the categories and specific pieces of personal data collected.</li>
                        <li>Delete any personal data about the consumer that we have collected.</li>
                        <li>Update or correct any inaccurate personal data.</li>
                    </ul>
                </div>

                <div className="legal-section">
                    <h2>7. Contact Us</h2>
                    <p>
                        If you have additional questions or require more information about our Privacy Policy, do 
                        not hesitate to contact us at: 
                        <a href="/contact" className="contact-highlight"> Visit Contact Page</a>
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
