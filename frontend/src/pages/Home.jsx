import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/Home.css';
import { 
    Phone, 
    Cloud, 
    Download, 
    Zap, 
    MessageCircle, 
    Stethoscope, 
    LineChart, 
    ShoppingCart, 
    Truck, 
    Building2, 
    Cpu, 
    BookOpen, 
    Coffee, 
    Film, 
    Instagram, 
    Linkedin, 
    Facebook,
    CheckCircle2,
    Video,
    Pause,
    Play,
    SkipForward,
    Volume2,
    Settings,
    Monitor,
    Maximize,
    Mail,
    Instagram as InstagramIcon, // Just to be safe with duplicates if any
    Twitter, 
    MapPin,
    Calendar,
    Users,
    Brain
} from 'lucide-react';
import Timeline from '../components/Timeline';
import IndustryCarousel from '../components/IndustryCarousel';
import CPU from '../components/CPU';


const Home = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    const toggleVideoPlayback = (e) => {
        e.stopPropagation(); // Prevent bubbling if clicking controls
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
                setIsPlaying(true);
            } else {
                videoRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleProgressClick = (e) => {
        e.stopPropagation();
        if (videoRef.current) {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const width = rect.width;
            const seekTime = (clickX / width) * videoRef.current.duration;
            videoRef.current.currentTime = seekTime;
        }
    };
    const industriesData = [
        { name: "Healthcare", icon: <Stethoscope size={24} />, desc: "Smart diagnostic systems & records management." },
        { name: "Finance", icon: <LineChart size={24} />, desc: "Secure automated trading & risk analytics." },
        { name: "Retail", icon: <ShoppingCart size={24} />, desc: "Omnichannel inventory & AI-driven customer insights." },
        { name: "Logistics", icon: <Truck size={24} />, desc: "Real-time fleet tracking & route optimization." },
        { name: "Real Estate", icon: <Building2 size={24} />, desc: "Property analytics & automated lead management." },
        { name: "Manufacturing", icon: <Cpu size={24} />, desc: "Predictive maintenance & industrial automation." },
        { name: "Education", icon: <BookOpen size={24} />, desc: "LMS, virtual classrooms & student analytics." },
        { name: "Hospitality", icon: <Coffee size={24} />, desc: "PMS, booking engines & guest experience tools." },
        { name: "Media", icon: <Film size={24} />, desc: "Content delivery, DRM & AI metadata tagging." }
    ];

    const [typingText, setTypingText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typeSpeed, setTypeSpeed] = useState(150);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesActive, setIsServicesActive] = useState(false);
    const [isWhiteSection, setIsWhiteSection] = useState(false);
    const servicesRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.target.id === 'services') {
                        setIsServicesActive(entry.isIntersecting);
                    }

                    // Specific logic for white sections
                    if (entry.target.classList.contains('white-bg')) {
                        setIsWhiteSection(entry.isIntersecting);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "-80px 0px -80px 0px" } // Adjust for navbar height
        );

        const sections = document.querySelectorAll('.white-bg, #services');
        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const words = ["REVENUE", "INNOVATION", "SALES", "GROWTH", "OPERATIONS"];

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                // Remove characters
                setTypingText(currentWord.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                setTypeSpeed(50);
            } else {
                // Add characters
                setTypingText(currentWord.substring(0, charIndex + 1));
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
            {/* Global SVG Gradients for Icons */}
            <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
                <linearGradient id="orange-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec650a" />
                    <stop offset="100%" stopColor="#ff9d2e" />
                </linearGradient>
            </svg>

            <header className="hero-section">
                <video autoPlay muted loop playsInline id="bg-video" src="/bg.mp4" />

                <div className="overlay"></div>

                <nav className={`navbar ${isWhiteSection ? 'on-white' : ''}`}>
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

                    <ul className={`nav-links ${isMenuOpen ? 'active' : ''} ${isWhiteSection ? 'on-white' : ''}`}>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>

                        <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                        <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>

                <div className="hero-content">
                    <h1 className="heading">ESCAPE THE LOOP, FOCUS ON </h1>
                    <h1 className="highlight-text">
                        <span id="typewriter">{typingText}</span>
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
                className={`services-section white-bg ${isServicesActive ? 'active' : ''}`}
                id="services"
                ref={servicesRef}
            >
                <div className="services-content">
                    <div className="services-main">
                        <div className="services-grid">
                            <div className="pp-feature-image-wrapper">
                                <div className="pp-orange-splash"></div>

                                {/* Floating Boxes */}
                                <div className="pp-floating-box top-left">
                                    <Phone size={18} className="pp-floating-icon" />
                                    <span>24/7 dedicated support</span>
                                </div>
                                <div className="pp-floating-box top-right">
                                    <Cloud size={18} className="pp-floating-icon" />
                                    <span>Secure data backup</span>
                                </div>
                                <div className="pp-floating-box bottom-left">
                                    <Download size={18} className="pp-floating-icon" />
                                    <span>Easy data migration</span>
                                </div>
                                <div className="pp-floating-box bottom-right">
                                    <Zap size={18} className="pp-floating-icon" />
                                    <span>Regular updates</span>
                                </div>

                                <img src="/support.png" alt="Cloud Platform & Support Illustration" className="pp-feature-main-img" />
                            </div>

                            <div className="support-cta">
                                <h3 className="cta-heading">Need Help growing your business?</h3>
                                <p className="cta-text">Schedule a quick call with our experts and get the right strategy and software solutions for your business.</p>
                                <div className="support-cta-buttons">
                                    <button className="cta-btn call-btn">
                                        <Phone size={18} />
                                        Schedule a Call
                                    </button>
                                    <button className="cta-btn whatsapp-btn">
                                        <MessageCircle size={18} />
                                        WhatsApp Us
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="services-timeline">
                            <Timeline />
                        </div>
                    </div>
                </div>
            </section>

            <section className="industries-section" id="industries">
                <div className="section-content">
                    <div className="industries-main-container">
                        <div className="industries-carousel-side">
                            <h2 className="section-title">INDUSTRIES</h2>
                            <p className="section-subtitle">We empower diverse sectors with intelligent automation across Healthcare, Finance, Retail, and Logistics.</p>
                            <IndustryCarousel />
                        </div>

                        <div className="industries-icons-side">
                            <div className="industries-grid">
                                {industriesData.map((industry, index) => (
                                    <div key={index} className="industry-icon-card" style={{ "--delay": `${index * 0.1}s` }}>
                                        <div className="industry-icon-wrapper">
                                            {industry.icon}
                                        </div>
                                        <div className="industry-card-content">
                                            <h4>{industry.name}</h4>
                                            <p>{industry.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="products-section white-bg" id="products">
                <div className="section-content wide-content">
                    <div className="gym-saas-container">
                        <div className="gym-saas-content">
                            <div className="gym-saas-info">
                                <h3 className="gym-saas-title">
                                    <span>AI-Powered Prebuilt Gym</span>
                                    <span>Management Software</span>
                                </h3>
                                <p className="gym-saas-description">
                                    Start for free and scale your business effortlessly. Our prebuilt gym software is designed to handle everything from member management to automated growth strategies.
                                </p>
                                
                                <div className="gym-subscription-options">
                                    <span className="sub-badge">Start for Free</span>
                                    <span className="sub-badge">Monthly</span>
                                    <span className="sub-badge">Yearly</span>
                                    <span className="sub-badge">2 Years once</span>
                                </div>

                                <ul className="gym-features">
                                    <li>
                                        <Zap size={20} className="feature-icon" />
                                        <span>Smart Attendance System</span>
                                    </li>
                                    <li>
                                        <Cpu size={20} className="feature-icon" />
                                        <span>Complete Gym Management AI Powered Software</span>
                                    </li>
                                    <li>
                                        <MessageCircle size={20} className="feature-icon" />
                                        <span>Message Automation</span>
                                    </li>
                                    <li>
                                        <Cloud size={20} className="feature-icon" />
                                        <span>Easy Data Migration and Storage</span>
                                    </li>
                                </ul>

                                <div className="gym-cta-group">
                                    <button className="gym-btn-primary">
                                        <Download size={18} />
                                        Download App
                                    </button>
                                    <Link to="/products" className="gym-btn-secondary" style={{ textDecoration: 'none' }}>
                                        View Features
                                    </Link>
                                </div>
                            </div>

                            <div className="gym-saas-visual">
                                {/* This will be styled in CSS with an image or graphic */}
                                <div className="gym-visual-card">
                                    <div className="laptop-mockup">
                                        <div className="laptop-screen" onClick={toggleVideoPlayback}>
                                            <video 
                                                ref={videoRef}
                                                src="/laptop.mp4" 
                                                autoPlay 
                                                loop 
                                                muted 
                                                playsInline 
                                                onTimeUpdate={handleTimeUpdate}
                                                className="laptop-video"
                                            />
                                            
                                            {/* Reference-style Video UI */}
                                            <div className="video-player-ui">
                                                {/* Central Play Button (Only shows when paused) */}
                                                {!isPlaying && (
                                                    <div className="central-play-trigger">
                                                        <div className="central-play-box">
                                                            <Play fill="white" size={32} />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Bottom Controls Bar */}
                                                <div className="video-controls-bar">
                                                    {/* Progress Bar inside the bar */}
                                                    <div className="video-progress-container" onClick={handleProgressClick}>
                                                        <div className="video-progress-rail"></div>
                                                        <div 
                                                            className="video-progress-fill" 
                                                            style={{ width: `${progress}%` }}
                                                        >
                                                            <div className="video-scrubber-knob"></div>
                                                        </div>
                                                    </div>

                                                    <div className="controls-row">
                                                        <div className="controls-left">
                                                            <button className="v-icon-btn">
                                                                {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" />}
                                                            </button>
                                                            <button className="v-icon-btn">
                                                                <SkipForward size={18} fill="white" />
                                                            </button>
                                                            <button className="v-icon-btn">
                                                                <Volume2 size={18} />
                                                            </button>
                                                        </div>
                                                        <div className="controls-right">
                                                            <button className="v-icon-btn">
                                                                <Settings size={18} />
                                                            </button>
                                                            <button className="v-icon-btn">
                                                                <Monitor size={18} />
                                                            </button>
                                                            <button className="v-icon-btn">
                                                                <Maximize size={18} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="laptop-base"></div>
                                        
                                        {/* Floating Message Boxes around laptop */}
                                        <div className="floating-msg top-left">
                                            <Users size={18} className="floating-msg-icon" />
                                            <span>500+ Active Clients</span>
                                        </div>
                                        <div className="floating-msg bottom-right-edge">
                                            <Cloud size={18} className="floating-msg-icon" />
                                            <span>Secure Cloud Data</span>
                                        </div>
                                        <div className="floating-msg top-right-v2">
                                            <Brain size={18} className="floating-msg-icon" />
                                            <span>AI Workout Plans</span>
                                        </div>
                                        <div className="floating-msg bottom-left">
                                            <Download size={18} className="floating-msg-icon" />
                                            <span>Easy Data Migration</span>
                                        </div>
                                        <div className="floating-msg bottom-center">
                                            <Zap size={18} className="floating-msg-icon" />
                                            <span>Regular Updates</span>
                                        </div>
                                    </div>
                                    
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="solutions-section" id="solutions">
                <div className="solutions-content-wrapper">
                    <div className="section-content text-content">
                        <h2 className="section-title" >SOLUTIONS</h2>
                        <p>We provide end-to-end custom software solutions that help businesses streamline operations, improve efficiency, and accelerate digital growth. Our expertise spans web and mobile development, enterprise software, AI-powered automation, and scalable SaaS products. From intuitive UI/UX design to secure cloud services, we build intelligent solutions tailored to your unique business needs.</p>

                        <div className="solutions-cta support-cta">
                            <h3 className="cta-heading">WANT TO AUTOMATE YOUR BUSINESS?</h3>
                            <p className="cta-text">Schedule a call with our expert and escape the loop by reducing your daily workload by automating your business</p>
                            <div className="support-cta-buttons">
                                <button className="cta-btn call-btn">
                                    <Phone size={18} />
                                    Schedule a Call
                                </button>
                                <button className="cta-btn whatsapp-btn">
                                    <MessageCircle size={18} />
                                    WhatsApp Us
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="visual-content">
                        <CPU />
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
                                    <p className="contact-value">No 5/23 , perumal kovil street, thideer nagar,<br></br> maduravoyal, chennai - 600095, Tamil Nadu, India</p>
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
            <Footer />
        </div>
    );
};

export default Home;