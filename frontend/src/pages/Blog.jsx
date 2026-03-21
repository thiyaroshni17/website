import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, User, Clock, ChevronRight, Phone, MessageCircle } from 'lucide-react';
import '../styles/Home.css';
import '../styles/Blog.css';
import ContactSection from '../components/ContactSection';
import { useModal } from '../context/ModalContext';

const Blog = () => {
    const { openModal } = useModal();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState('All');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const blogGridRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!blogGridRef.current) return;
        const rect = blogGridRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        blogGridRef.current.style.setProperty('--x', `${x}px`);
        blogGridRef.current.style.setProperty('--y', `${y}px`);
    };

    const categories = ['All', 'Automation', 'AI', 'Design', 'Strategy'];

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:5000/escapeloop/all');
                setBlogs(response.data);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    // Merge static and dynamic for now, or just use dynamic
    const displayPosts = blogs.length > 0 ? blogs : [
        {
            _id: '1',
            category: 'Automation',
            title: 'How to Escape the Operational Loop with AI',
            excerpt: 'Scaling a business requires removing yourself from repetitive tasks. Here is our guide to intelligent workflow automation.',
            author: 'Dev',
            createdAt: '2026-03-15T12:00:00Z',
            media: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800'
        }
    ];

    const filteredPosts = activeFilter === 'All' 
        ? displayPosts 
        : displayPosts.filter(post => post.category === activeFilter);

    return (
        <div className="blog-page">
            <nav className="navbar on-white">
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
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div className={`nav-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''} on-white`}>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link></li>
                    <li><Link to="/blog" onClick={() => setIsMenuOpen(false)} style={{ color: '#ff6a3d', fontWeight: '600' }}>Blog</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

            <main>
                <section className="blog-hero" ref={blogGridRef} onMouseMove={handleMouseMove}>
                    <div className="blog-glow blog-glow-1"></div>
                    <div className="blog-glow blog-glow-2"></div>
                    <div className="blog-grid-layer"></div>
                    <div className="blog-grid-reveal"></div>
                    <div className="blog-container hero-content">
                        <span className="blog-tagline">Insights & Innovation</span>
                        <h1>The <span>Escapeloop</span> Journal</h1>
                        <p>Exploring the intersection of AI, automation, and premium digital experience.</p>
                    </div>

                    <div className="blog-container" style={{ position: 'relative', zIndex: 30 }}>
                        <div className="blog-cta-buttons">
                            <button className="cta-btn call-btn" onClick={openModal}>
                                <Phone size={18} />
                                Schedule a Call
                            </button>
                            <a href="https://wa.me/919342742656?text=Hi%2C%20can%20i%20get%20more%20info%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer" className="cta-btn whatsapp-btn" style={{ textDecoration: 'none' }}>
                                <MessageCircle size={18} />
                                WhatsApp Us
                            </a>
                        </div>
                        <div className="blog-filters">
                            {categories.map(cat => (
                                <button 
                                    key={cat} 
                                    className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                                    onClick={() => setActiveFilter(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="blog-container">
                    {activeFilter === 'All' && displayPosts.length > 0 && (
                        <div className="featured-post">
                            <div className="featured-img-wrapper">
                                <img src={displayPosts[0].media || displayPosts[0].image} alt="Featured Post" />
                            </div>
                            <div className="featured-content">
                                <div className="post-meta">
                                    <span className="post-category">{displayPosts[0].category}</span>
                                    <span>•</span>
                                    <span>{new Date(displayPosts[0].createdAt || displayPosts[0].date).toLocaleDateString()}</span>
                                </div>
                                <h2>{displayPosts[0].title}</h2>
                                <p>{displayPosts[0].excerpt || (displayPosts[0].sections?.[0]?.content?.substring(0, 150) + '...')}</p>
                                <Link to={`/blog/${displayPosts[0]._id || displayPosts[0].id}`} className="read-more">
                                    Read Article <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    )}

                    <div className="blog-grid">
                        {(activeFilter === 'All' ? filteredPosts.slice(1) : filteredPosts).map(post => (
                            <div key={post._id || post.id} className="blog-card">
                                <div className="card-img-wrapper">
                                    <img src={post.media || post.image} alt={post.title} />
                                </div>
                                <div className="card-content">
                                    <div className="post-meta">
                                        <span className="post-category">{post.category}</span>
                                        <span>•</span>
                                        <span>{new Date(post.createdAt || post.date).toLocaleDateString()}</span>
                                    </div>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt || (post.sections?.[0]?.content?.substring(0, 100) + '...')}</p>
                                    <Link to={`/blog/${post._id || post.id}`} className="read-more">
                                        Read More <ChevronRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <ContactSection />
            <Footer />
        </div>
    );
};

export default Blog;
