import React, { useState, useEffect, useRef } from 'react';
import '../styles/Home.css';

const Home = () => {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typeSpeed, setTypeSpeed] = useState(150);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesActive, setIsServicesActive] = useState(false);
    const servicesRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsServicesActive(true);
                } else {
                    setIsServicesActive(false);
                }
            },
            { threshold: 0.2 }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    const words = ["REVENUE", "INNOVATION", "SALES", "GROWTH", "OPERATIONS"];

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                // Remove characters
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                setTypeSpeed(50);
            } else {
                // Add characters
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                setTypeSpeed(150);
            }

            // Word is complete
            if (!isDeleting && charIndex === currentWord.length) {
                setTypeSpeed(2000); // Pause at the end
                setIsDeleting(true);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setWordIndex(prev => (prev + 1) % words.length);
                setTypeSpeed(500); // Pause before next word
            }
        };

        const timer = setTimeout(handleTyping, typeSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex, typeSpeed]);

    return (
        <div className="home-container">
            <header className="hero-section">
                <video autoPlay muted loop playsInline id="bg-video" src="/bg.mp4" />

                <div className="overlay"></div>

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

                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                        <li><a href="#industries" onClick={() => setIsMenuOpen(false)}>Industries</a></li>
                        <li><a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a></li>
                        <li><a href="#solutions" onClick={() => setIsMenuOpen(false)}>Solutions</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>

                <div className="hero-content">
                    <h1 className="heading">ESCAPE THE LOOP, FOCUS ON </h1>
                    <h1 className="highlight-text">
                        <span id="typewriter">{text}</span>
                        <span className="cursor">|</span>
                    </h1>

                    <div className="stats-container">
                        <div className="stat-item1">
                            <h2 className='stat-number'>50+</h2>
                            <p>Clients in a week</p>
                        </div>
                        <div className="stat-item2">
                            <h2 className='stat-number'>10X</h2>
                            <p>Revenue Growth</p>
                        </div>
                    </div>
                </div>
            </header>

            <section
                className={`services-section ${isServicesActive ? 'active' : ''}`}
                id="services"
                ref={servicesRef}
            >
                <div className="service-splash">
                    <div className="smoke-blob"></div>
                    <div className="smoke-blob"></div>
                    <div className="smoke-blob"></div>
                </div>
                <div className="services-content">
                    <h2 className="services-heading">OUR SERVICES</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Automation</h3>
                            <p>Streamline your workflows with cutting-edge AI automation solutions.</p>
                        </div>
                        <div className="service-card">
                            <h3>Growth Marketing</h3>
                            <p>Scale your revenue with data-driven marketing strategies.</p>
                        </div>
                        <div className="service-card">
                            <h3>Operations</h3>
                            <p>Optimize your business processes for maximum efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="industries-section" id="industries">
                <div className="section-content">
                    <h2 className="section-title">INDUSTRIES</h2>
                    <p className="section-subtitle">We empower diverse sectors with intelligent automation.</p>
                    <div className="industries-list">
                        <span>E-commerce</span>
                        <span>SaaS</span>
                        <span>Healthcare</span>
                        <span>Real Estate</span>
                    </div>
                </div>
            </section>

            <section className="products-section" id="products">
                <div className="section-content">
                    <h2 className="section-title">PRODUCTS</h2>
                    <p className="section-subtitle">Innovative tools designed for the modern enterprise.</p>
                </div>
            </section>

            <section className="solutions-section" id="solutions">
                <div className="section-content">
                    <h2 className="section-title">SOLUTIONS</h2>
                    <p className="section-subtitle">Tailored strategies to solve your most complex challenges.</p>
                </div>
            </section>

            <section className="contact-section" id="contact">
                <div className="section-content">
                    <h2 className="section-title">CONTACT US</h2>
                    <p className="section-subtitle">Ready to escape the loop? Let's talk.</p>
                    <button className="contact-btn">Get Started</button>
                </div>
            </section>
        </div>
    );
};

export default Home;