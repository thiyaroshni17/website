import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Instagram, Linkedin, Facebook, Monitor, Cpu, Database, Cloud, MessageSquare, Shield, Settings, PenTool, CheckCircle, Smartphone, BarChart, Server, Layout, Activity, Repeat } from 'lucide-react';
import '../styles/Services.css';
import '../styles/Home.css';

const Services = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const serviceCategories = [
        {
            title: "Development Suite",
            icon: <Monitor className="category-icon" />,
            services: [
                { name: "Web Application Development", desc: "Custom websites, dashboards, and enterprise portals.", icon: <Layout size={20} /> },
                { name: "Mobile App Development", desc: "Native and cross-platform Android/iOS applications.", icon: <Smartphone size={20} /> },
                { name: "Custom Software Solutions", desc: "Tailor-made software built for your unique needs.", icon: <Settings size={20} /> },
                { name: "SaaS Product Development", desc: "Scalable software-as-a-service platforms.", icon: <Cloud size={20} /> },
                { name: "API Development & Integration", desc: "Seamless connectivity between your systems.", icon: <Repeat size={20} /> }
            ]
        },
        {
            title: "AI & Automation",
            icon: <Cpu className="category-icon" />,
            services: [
                { name: "AI Supported Automation", desc: "Intelligent systems to streamline operations.", icon: <Activity size={20} /> },
                { name: "Workflow Automation", desc: "Eliminating manual tasks for peak efficiency.", icon: <Repeat size={20} /> },
                { name: "Conversational AI", desc: "Advanced Chatbots, WhatsApp & SMS agents.", icon: <MessageSquare size={20} /> },
                { name: "AI Software Solutions", desc: "Next-gen software powered by Artificial Intelligence.", icon: <Cpu size={20} /> }
            ]
        },
        {
            title: "Business Intelligence",
            icon: <Database className="category-icon" />,
            services: [
                { name: "Data Analytics & Visualization", desc: "Transforming raw data into actionable insights.", icon: <BarChart size={20} /> },
                { name: "Business Intelligence Systems", desc: "Strategic data tools for informed decisions.", icon: <Activity size={20} /> },
                { name: "Enterprise Software (ERP/CRM)", desc: "Robust systems to manage your entire business.", icon: <Server size={20} /> },
                { name: "Secured Payment Portals", desc: "Safe and reliable financial transaction systems.", icon: <Shield size={20} /> }
            ]
        },
        {
            title: "Specialized Services",
            icon: <Settings className="category-icon" />,
            services: [
                { name: "Cloud Services", desc: "Securely move and manage systems in the cloud.", icon: <Cloud size={20} /> },
                { name: "UI/UX Designing", desc: "Crafting intuitive and stunning user experiences.", icon: <PenTool size={20} /> },
                { name: "Quality Assurance & Testing", desc: "Ensuring your software is bug-free and reliable.", icon: <CheckCircle size={20} /> },
                { name: "Maintenance & Support", desc: "Continuous updates and technical assistance.", icon: <Settings size={20} /> },
                { name: "Attendance Software & Devices", desc: "Modern workforce management solutions.", icon: <Activity size={20} /> }
            ]
        }
    ];

    const technologies = [
        "Artificial Intelligence (AI)", "Machine Learning (ML)", "Deep Learning (DL)",
        "Full Stack Development", "CRUD Operations", "Business Analytics",
        "Natural Language Processing", "Automation Systems", "Database Management",
        "Cloud & API Integration"
    ];

    return (
        <div className="sv-page-container">
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
                    <li><Link to="/services" onClick={() => setIsMenuOpen(false)} style={{ color: '#ff6a3d', fontWeight: '600' }}>Services</Link></li>
                    <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

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

                <section className="services-grid-section">
                    <div className="services-container">
                        <div className="section-header">
                            <h2 className="section-main-title">Comprehensive Solutions</h2>
                            <p className="section-subtitle">We blend cutting-edge technology with creative design to build the future of business.</p>
                        </div>

                        {serviceCategories.map((category, idx) => (
                            <div key={idx} className="service-category-group">
                                <div className="category-header">
                                    {category.icon}
                                    <h3>{category.title}</h3>
                                </div>
                                <div className="services-list-grid">
                                    {category.services.map((service, sIdx) => (
                                        <div key={sIdx} className="service-premium-card">
                                            <div className="service-card-icon">{service.icon}</div>
                                            <h4>{service.name}</h4>
                                            <p>{service.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="technologies-section">
                    <div className="tech-container">
                        <h2 className="tech-title">Core Technology Stack</h2>
                        <div className="tech-pills">
                            {technologies.map((tech, idx) => (
                                <span key={idx} className="tech-pill">{tech}</span>
                            ))}
                        </div>
                    </div>
                </section>

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
                                    <input type="email" placeholder="Company" />
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
