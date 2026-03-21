import React from 'react';
import { Instagram, Linkedin, Facebook, Youtube, Twitter, AtSign } from 'lucide-react';
import '../styles/Contact.css';
import { useModal } from '../context/ModalContext';

const ContactSection = () => {
    const { openModal } = useModal();
    return (
        <section className="contact-section white-bg" id="contact">
            <div className="grid-perspective">
                <div className="grid-plane">
                    <div className="grid-animate"></div>
                </div>
            </div>
            <div className="horizon-fade"></div>

            <div className="contact-wrapper">
                {/* Left: Contact Details */}
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
                                <p className="contact-value">
                                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=escapeloop25@gmail.com&body=HI%2C%20Can%20I%20get%20more%20info%20about%20services%3F" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        escapeloop25@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div style={{ cursor: 'pointer' }} onClick={openModal}>
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
                                <a href="https://wa.me/919342742656?text=Hi%2C%20can%20i%20get%20more%20info%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer" className="contact-value" style={{ textDecoration: 'none', color: 'inherit' }}>+91 93427 42656</a>
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
                                <a href="https://share.google/sDVcEiymecPhbyAwS" target="_blank" rel="noopener noreferrer" className="contact-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    No 5/23 , perumal kovil street, thideer nagar,<br></br> maduravoyal, chennai - 600095, Tamil Nadu, India
                                </a>
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

            {/* Social links — full width below the two columns */}
            <div className="ct-social-connect">
                <h3>Follow Our Journey</h3>
                <div className="ct-social-links">
                    <a href="https://www.facebook.com/profile.php?id=61579488132101" target="_blank" rel="noopener noreferrer" className="ct-social-btn facebook" aria-label="Facebook">
                        <Facebook size={20} />
                        <span>Escape Loop</span>
                    </a>
                    <a href="https://www.instagram.com/escapeloop_tech_solutions?igsh=MWx2OHpjZHljb3Mzdg==" target="_blank" rel="noopener noreferrer" className="ct-social-btn instagram">
                        <Instagram size={20} />
                        <span>escapeloop_tech_solutions</span>
                    </a>
                    <a href="https://www.youtube.com/@EscapeloopTechSolutions" target="_blank" rel="noopener noreferrer" className="ct-social-btn youtube">
                        <Youtube size={20} />
                        <span>Escapeloop Tech Solutions</span>
                    </a>
                    <a href="https://www.linkedin.com/in/escapeloop-tech-solutions-452a943b8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="ct-social-btn linkedin">
                        <Linkedin size={20} />
                        <span>Escapeloop Tech Solutions</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
