import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, MessageCircle, Send, Instagram, Linkedin, Facebook, ChevronRight } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
    });

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', mobile: '', email: '', message: '' });
    };

    return (
        <div className="ct-page-container">
            {/* Navbar */}
            <header className="ct-header">
                <nav className="navbar on-white">
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
                        <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                        <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                        <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} style={{ color: '#ff6a3d', fontWeight: '600' }}>Contact</Link></li>
                    </ul>
                </nav>
            </header>

            <main className="ct-main-content">
                <section className="ct-hero-section" ref={gridRef} onMouseMove={handleMouseMove}>
                    <div className="ct-grid-layer"></div>
                    <div className="ct-grid-reveal"></div>
                    <div className="ct-hero-glow ct-glow-1"></div>
                    <div className="ct-hero-glow ct-glow-2"></div>
                    
                    <div className="ct-container">
                        <div className="ct-hero-text">
                            <h1 className="ct-fade-in">Let's <span className="text-gradient">Connect</span></h1>
                            <p className="ct-fade-in delay-1">Have a project in mind or want to automate your business? We're here to help you escape the loop with our best software solutions.</p>
                            
                            <div className="ct-hero-buttons ct-fade-up delay-2">
                                <button className="ct-hero-btn secondary">
                                    <Phone size={18} />
                                    Schedule a Call
                                </button>
                                <a href="https://wa.me/919342742656" target="_blank" rel="noopener noreferrer" className="ct-hero-btn secondary">
                                    <MessageCircle size={18} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="ct-content-section">
                    <div className="ct-container">
                        <div className="ct-contact-grid">
                            {/* Contact Info */}
                            <div className="ct-contact-info">
                                <h2 className="ct-section-title">Get in Touch</h2>
                                <p className="ct-section-subtitle">Choose your preferred way to reach us. Our team is always ready to assist you.</p>

                                <div className="ct-info-cards">
                                    <div className="ct-info-card ct-fade-up">
                                        <div className="ct-icon-box">
                                            <Mail className="ct-icon" />
                                        </div>
                                        <div className="ct-info-details">
                                            <h3>Email Us</h3>
                                            <p>escapeloop25@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="ct-info-card ct-fade-up delay-1">
                                        <div className="ct-icon-box">
                                            <Phone className="ct-icon" />
                                        </div>
                                        <div className="ct-info-details">
                                            <h3>Call Us</h3>
                                            <p>+91 93427 42656</p>
                                            <p>+91 73585 46188</p>
                                        </div>
                                    </div>

                                    <div className="ct-info-card ct-fade-up delay-2">
                                        <div className="ct-icon-box">
                                            <MessageCircle className="ct-icon" />
                                        </div>
                                        <div className="ct-info-details">
                                            <h3>WhatsApp</h3>
                                            <p>+91 9342742656</p>
                                            <a href="https://wa.me/919342742656" target="_blank" rel="noopener noreferrer" className="ct-link">
                                                Message Now <ChevronRight size={14} />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="ct-info-card ct-fade-up delay-3">
                                        <div className="ct-icon-box">
                                            <MapPin className="ct-icon" />
                                        </div>
                                        <div className="ct-info-details">
                                            <h3>Location</h3>
                                            <p>No 5/23 , perumal kovil street, thideer nagar,<br></br> maduravoyal, chennai - 600095, Tamil Nadu, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                
                            {/* Form Column */}
                            <div className="contact-form-card ct-fade-up delay-3">
                                <h2>Contact Us</h2>
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            name="name"
                                            placeholder="Your Name" 
                                            value={formData.name}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="tel" 
                                            name="mobile"
                                            placeholder="Mobile Number" 
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            name="email"
                                            placeholder="Email Address" 
                                            value={formData.email}
                                            onChange={handleChange}
                                            required 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea 
                                            name="message"
                                            rows="5" 
                                            placeholder="Tell us about your project or inquiry..." 
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="contact-submit-btn">
                                        <span>Send Message</span>
                                       
                                    </button>
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
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
