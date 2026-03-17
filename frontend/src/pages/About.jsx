import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { Instagram, Linkedin, Facebook, Star, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import '../styles/About.css';
import '../styles/Home.css';

const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="about-page">
            <nav className="navbar on-white">
                <div className="logo">
                    <img src="/logo.png" alt="Escapeloop Logo" className="logo-img" />
                    <span className="logo-name">
                        <span className="logo-highlight">esc</span>
                        <span className="logo-secondary">apeloop</span>
                    </span>
                </div>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span><span></span><span></span>
                </div>
                <div className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''} on-white`}>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)} style={{ color: '#ff6a3d', fontWeight: '600' }}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

            <main>
                <section className="about-hero">
                    <div className="about-container">
                        <div className="about-hero-flex">
                            <div className="about-hero-image-wrapper">
                                <div className="about-circle-bg"></div>
                                
                                {/* Floating Glass Boxes */}
                                <div className="about-floating-glass-box top-left">
                                    <Zap size={18} className="about-glass-icon" />
                                    <span>Tech Innovator</span>
                                </div>
                                <div className="about-floating-glass-box top-right">
                                    <Users size={18} className="about-glass-icon" />
                                    <span>Automation Expert</span>
                                </div>
                                <div className="about-floating-glass-box bottom-left">
                                    <Star size={18} className="about-glass-icon" />
                                    <span>Workflow Engineer</span>
                                </div>

                                <img src="/dev.png" alt="Dev" className="about-hero-img cutout-style" />
                           
                            </div>

                            <div className="about-hero-content">
                                <span className="about-tagline">ABOUT ME</span>
                                <h1>J.DEVANAZHAGAR <span>CEO & Founder.</span></h1>
                                
                                <p>We help you escape the digital loop with cutting-edge automation and intelligent software solutions. Our goal is to empower your business with tools that drive high-growth and lasting success.</p>
                                 <span className="about-tagline">QUALIFICATION</span>
                                 <p style={{ fontSize: '1rem' ,marginBottom:'30px'}}>B.TECH CSE - DS & AI | WORKFLOW AUTOMATION | <br></br> AI ENGINEER</p>
                                  <span className="about-tagline">OUR VISION</span>
                                  <p>To empower businesses with intelligent, scalable, and user-centric digital solutions that drive measurable growth and long-term success.</p>
                               
                            </div>
                        </div>
                    </div>
                </section>

              
                <section className="about-banner-container">
                    <div className="about-container">
                        <div className="about-banner">
                            <div className="about-banner-content">
                                <h2>G.ROSHNI <span>CEO & Founder.</span></h2>
                                <p>Join the loop of excellence. Let us handle the complexity while you focus on what truly matters for your business growth.</p>
                                <span className="about-tagline">QUALIFICATION</span>
                                <p style={{ fontSize: '1rem' ,marginBottom:'30px'}}>B.TECH CSE - DS & AI | MERN Stack Developer | AI & ML Developer</p>
                            </div>
                            <div className="about-banner-image">
                                <div className="about-banner-img-wrapper">
                                    <div className="about-banner-img-bg"></div>
                                    
                                    {/* Floating Glass Boxes */}
                                    <div className="dev-about-floating-glass-box top-left">
                                        <Zap size={18} className="about-glass-icon" />
                                        <span>Product Builder</span>
                                    </div>
                                    <div className="dev-about-floating-glass-box top-right">
                                        <Star size={18} className="about-glass-icon" />
                                        <span>Saas Creator</span>
                                    </div>
                                    <div className="dev-about-floating-glass-box bottom-left">
                                        <Users size={18} className="about-glass-icon" />
                                        <span>Team Lead</span>
                                    </div>
                                    <div className="dev-about-floating-glass-box bottom-right">
                                        <CheckCircle2 size={18} className="about-glass-icon" />
                                        <span>Problem Solver</span>
                                    </div>

                                    <img src="/roshni.png" alt="Roshni" className="about-banner-img cutout-style" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-story-section">
                    <div className="about-container">
                        <div className="about-story-grid">
                            <div className="about-story-main">
                                <span className="about-tagline">THE EVOLUTION</span>
                                <h2>Building the Future, <span>One Loop at a Time.</span></h2>
                                <p>
                                    Escapeloop began as a passion project among ambitious students with a single, clear goal: 
                                    to simplify the digital world. What started as a shared vision between classmates 
                                    quickly evolved into a powerhouse of workflow automation and creative development.
                                </p>
                                <p>
                                    As students, we realized that the repetitive "loops" of daily operations were 
                                    suffocating innovation. We built Escapeloop to be the escape hatch—empowering 
                                    entrepreneurs and businesses to break free from manual tasks through intelligent 
                                    SaaS solutions and seamless AI integration.
                                </p>
                            </div>

                            <div className="about-philosophy-grid">
                                <div className="about-philosophy-card">
                                    <div className="phil-icon-wrapper"><Zap size={24} /></div>
                                    <div className="phil-content">
                                        <h3>Our Motive</h3>
                                        <p>To eliminate digital friction and turn complex technical challenges into competitive advantages for every client we serve.</p>
                                    </div>
                                </div>
                                <div className="about-philosophy-card">
                                    <div className="phil-icon-wrapper"><Star size={24} /></div>
                                    <div className="phil-content">
                                        <h3>Our Vision</h3>
                                        <p>To be the world's most intuitive automation partner, driving a future where human creativity is the only limit to business growth.</p>
                                    </div>
                                </div>
                                <div className="about-philosophy-card">
                                    <div className="phil-icon-wrapper"><Users size={24} /></div>
                                    <div className="phil-content">
                                        <h3>Our Mission</h3>
                                        <p>We combine youthful energy with enterprise-grade expertise to deliver scalable, high-impact digital tools that prioritize user success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
