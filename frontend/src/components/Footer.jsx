import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MapPin, Mail, Phone, MessageCircle, Youtube, Facebook } from 'lucide-react';
import '../styles/Footer.css';
import { useModal } from '../context/ModalContext';

const Footer = () => {
    const { openModal } = useModal();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="ft-footer">
            <div className="ft-container">
                <div className="ft-content">
                    {/* Branding */}
                    <div className="ft-brand-section">
                        <div className="ft-logo-container">
                            <Link to="/" className="ft-logo">
                                <span className="ft-logo-esc">esc</span>
                                <span className="ft-logo-apeloop">apeloop</span>
                            </Link>
                            <span className="ft-logo-tagline">TECH SOLUTIONS</span>
                        </div>
                        <p className="ft-brand-desc">
                            Automate your business and escape the loop with our innovative software solutions and expert IT consulting.
                        </p>
                        <div className="ft-social-links">
                            <a href="https://www.facebook.com/profile.php?id=61579488132101" target="_blank" rel="noopener noreferrer" className="ft-social-btn facebook" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/escapeloop_tech_solutions?igsh=MWx2OHpjZHljb3Mzdg==" target="_blank" rel="noopener noreferrer" className="ft-social-btn instagram" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.youtube.com/@EscapeloopTechSolutions" target="_blank" rel="noopener noreferrer" className="ft-social-btn youtube" aria-label="YouTube">
                                <Youtube size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/escapeloop-tech-solutions-452a943b8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="ft-social-btn linkedin" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="ft-links-section">
                        <h4 className="ft-heading">Quick Links</h4>
                        <ul className="ft-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="ft-links-section">
                        <h4 className="ft-heading">Legal</h4>
                        <ul className="ft-list">
                            <li><Link to="/terms">Terms & Conditions</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/refund">Refund & Cancellation</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="ft-contact-section">
                        <h4 className="ft-heading">Contact Us</h4>
                        <ul className="ft-list contact-info">
                            <li>
                                <Mail size={16} className="ft-icon" />
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=escapeloop25@gmail.com&body=HI%2C%20Can%20I%20get%20more%20info%20about%20services%3F" target="_blank" rel="noopener noreferrer">escapeloop25@gmail.com</a>
                            </li>
                            <li>
                                <MessageCircle size={16} className="ft-icon" />
                                <a href="https://wa.me/919342742656?text=Hi%2C%20can%20i%20get%20more%20info%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer">+91 93427 42656</a>
                            </li>
                            <li onClick={openModal} style={{ cursor: 'pointer' }}>
                                <Phone size={16} className="ft-icon" />
                                <span>+91 93427 42656</span>
                            </li>
                            <li>
                                <MapPin size={16} className="ft-icon min-w" />
                                <a href="https://share.google/sDVcEiymecPhbyAwS" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                    No 5/23 , perumal kovil street, thideer nagar, maduravoyal, chennai - 600095, Tamil Nadu, India
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="ft-bottom-bar">
                    <div className="ft-copyright">
                        <p>&copy; {currentYear} Escapeloop. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
