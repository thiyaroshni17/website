import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="ft-footer">
            <div className="ft-container">
                <div className="ft-content">
                    {/* Branding */}
                    <div className="ft-brand-section">
                        <Link to="/" className="ft-logo">
                            <span className="ft-logo-name">Escape</span>
                            <span className="ft-logo-highlight">loop</span>
                        </Link>
                        <p className="ft-brand-desc">
                            Automate your business and escape the loop with our innovative software solutions and expert IT consulting.
                        </p>
                        <div className="ft-social-links">
                            <a href="https://instagram.com/escapeloop" target="_blank" rel="noopener noreferrer" className="ft-social-btn instagram" aria-label="Instagram">
                                <Instagram size={20} />
                                <span>escapeloop.ai</span>
                            </a>
                            <a href="https://linkedin.com/company/escapeloop" target="_blank" rel="noopener noreferrer" className="ft-social-btn linkedin" aria-label="LinkedIn">
                                <Linkedin size={20} />
                                <span>escapeloop</span>
                            </a>
                            <a href="https://facebook.com/escapeloop" target="_blank" rel="noopener noreferrer" className="ft-social-btn facebook" aria-label="Facebook">
                                <Facebook size={20} />
                                <span>escapeloop</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div className="ft-links-section">
                        <h4 className="ft-heading">Quick Links</h4>
                        <ul className="ft-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/solutions">Solutions</Link></li>
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
                                <a href="mailto:escapeloop25@gmail.com">escapeloop25@gmail.com</a>
                            </li>
                            <li>
                                <Phone size={16} className="ft-icon" />
                                <a href="tel:+919342742656">+91 93427 42656</a>
                            </li>
                            <li>
                                <MapPin size={16} className="ft-icon min-w" />
                                <span>14/16, N.R. Road, 2nd Cross, Town Hall, Bangalore 560002</span>
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
