import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import '../styles/Services.css';
import '../styles/Home.css';

const Services = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="sv-page-container">
            <header className="sv-header">
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

                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''} on-white`}>
                        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li><Link to="/services" onClick={() => setIsMenuOpen(false)} style={{ color: '#ff6a3d', fontWeight: '600' }}>Services</Link></li>
                        <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                        <li><a href="/#blog" onClick={() => setIsMenuOpen(false)}>Blog</a></li>
                        <li><a href="/#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <main className="sv-main-content">
                <div className="sv-spacer-top"></div>

                <section className="sv-scroll-section">
                    <div className="sv-title-container">
                        <h1>
                            Experience the future of <br />
                            <span>Premium Services</span>
                        </h1>
                    </div>

                    <div className="sv-card-frame">
                        <div className="sv-card-content">
                            <img src="/card-frame.png" alt="Escapeloop Services" />
                        </div>
                    </div>
                </section>

                <div className="sv-spacer-bottom"></div>

                {/* Additional services content can be added here */}

                <section className="contact-section white-bg" id="contact">
                    <div className="grid-perspective">
                        <div className="grid-plane">
                            <div className="grid-animate"></div>
                        </div>
                    </div>
                    <div className="horizon-fade"></div>

                    <div className="contact-wrapper">
                        <div className="contact-details">
                            <h2 className="section-title">CONTACT US</h2>
                            <p className="contact-tagline">Ready to escape the loop? Let's talk.</p>

                            <div className="contact-items">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="contact-label">Email</p>
                                        <p className="contact-value">escapeloop25@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="contact-label">Call</p>
                                        <p className="contact-value">+91 93427 42656 | +91 73585 46188</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="contact-label">WhatsApp</p>
                                        <p className="contact-value">+91 93427 42656</p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="contact-label">Location</p>
                                        <p className="contact-value">Chennai, Tamil Nadu, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact Form */}
                        <div className="contact-form-card">
                            <form className="contact-form">
                                <div className="form-group">
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Mobile Number" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <textarea rows="4" placeholder="Tell us about your project..."></textarea>
                                </div>
                                <button type="submit" className="contact-submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="ct-social-connect">
                        <h3>Follow Our Journey</h3>
                        <div className="ct-social-links">
                            <a href="https://instagram.com/escapeloop" target="_blank" rel="noopener noreferrer" className="ct-social-btn instagram">
                                <Instagram size={20} />
                                <span>escapeloop.ai</span>
                            </a>
                            <a href="https://linkedin.com/company/escapeloop" target="_blank" rel="noopener noreferrer" className="ct-social-btn linkedin">
                                <Linkedin size={20} />
                                <span>escapeloop</span>
                            </a>
                            <a href="https://facebook.com/escapeloop" target="_blank" rel="noopener noreferrer" className="ct-social-btn facebook">
                                <Facebook size={20} />
                                <span>escapeloop</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Services;
