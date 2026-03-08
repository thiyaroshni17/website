import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css'; // New dedicated CSS
import '../styles/Home.css'; // Reusing navbar variables and styling

const Services = () => {
    const serviceList = [
        "AI Supported Software Solution",
        "AI Supported Automation",
        "Workflow Automation",
        "Software Solution Development",
        "Students Project",
        "ERP System",
        "CRM System",
        "Business Analytics & Intelligence System",
        "Custom Software Solution",
        "Conversational AI & Messaging Automation (Chatbots, WhatsApp Agent, Email Automation, SMS)",
        "Cloud and API Integration",
        "Pre-built Software (Ready to use SaaS products)"
    ];

    const techList = [
        "Artificial Intelligence (AI)",
        "Machine Learning (ML)",
        "Deep Learning (DL)",
        "Full Stack Development",
        "CRUD Operations",
        "Business Analytics",
        "Natural Language Processing",
        "Automation Systems",
        "Database Management",
        "Cloud & API-based Integration"
    ];

    return (
        <div className="services-wrapper">
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <span className="logo-icon">
                            <img src="/logo%20escapeloop.png" alt="Escapeloop Logo" />
                        </span>
                        <span className='esc'>esc</span><span className='apeloop'>apeloop</span>
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services" style={{ color: 'var(--cyan-primary)', fontWeight: '600' }}>Services</Link></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Solutions</a></li>
                    </ul>
                    <button className="btn-book">Book demo</button>
                </nav>
            </header>

            <section className="services-hero">
                <h1>Our <span>Expertise</span></h1>
                <p>We provide cutting-edge AI and software solutions designed to automate workflows, accelerate growth, and solve complex business problems.</p>
            </section>

            <section className="content-section">
                <h2 className="section-title">What We Offer</h2>
                <div className="cards-grid">
                    {serviceList.map((service, index) => (
                        <div key={index} className="glass-card">
                            <h3>{service}</h3>
                        </div>
                    ))}
                </div>

                <h2 className="section-title">Technologies We Use</h2>
                <div className="tech-grid">
                    {techList.map((tech, index) => (
                        <div key={index} className="tech-tag">
                            {tech}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
