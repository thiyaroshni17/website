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
import ContactSection from '../components/ContactSection';
import { useModal } from '../context/ModalContext';


const Home = () => {
    const { openModal } = useModal();
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

                    <div className="nav-right-container">
                        <button className="header-call-btn" onClick={openModal}><Phone size={18} stroke="url(#orange-grad)" /> <span className="header-call-text">Schedule a Call</span></button>
                        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
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
                                    <button className="cta-btn call-btn" onClick={openModal}>
                                        <Phone size={18} />
                                        Schedule a Call
                                    </button>
                                    <a href="https://wa.me/919342742656?text=Hi%2C%20can%20i%20get%20more%20info%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer" className="cta-btn whatsapp-btn" style={{ textDecoration: 'none' }}>
                                        <MessageCircle size={18} />
                                        WhatsApp Us
                                    </a>
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
                                <button className="cta-btn call-btn" onClick={openModal}>
                                    <Phone size={18} />
                                    Schedule a Call
                                </button>
                                <a href="https://wa.me/919342742656?text=Hi%2C%20can%20i%20get%20more%20info%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer" className="cta-btn whatsapp-btn" style={{ textDecoration: 'none' }}>
                                    <MessageCircle size={18} />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="visual-content">
                        <CPU />
                    </div>
                </div>
            </section>

            <ContactSection />
            <Footer />
        </div>
    );
};

export default Home;