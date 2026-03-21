import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen, ChevronRight, Instagram, Linkedin, Facebook, Phone } from 'lucide-react';
import Footer from '../components/Footer';
import '../styles/Home.css';
import '../styles/BlogDetail.css';
import { useModal } from '../context/ModalContext';

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const { openModal } = useModal();
    const [activeSection, setActiveSection] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/escapeloop/${id}`);
                setBlog(response.data);
                if (response.data.sections?.length > 0) {
                    setActiveSection(response.data.sections[0].id);
                }
            } catch (error) {
                console.error('Error fetching blog:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            if (!blog?.sections) return;
            const scrollPosition = window.scrollY + 100;

            for (const section of blog.sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [blog]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Adjust for sticky header if any
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (loading) {
        return (
            <div className="blog-loader-container">
                <div className="premium-loader"></div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="error-page">
                <h1>Blog Not Found</h1>
                <Link to="/blog" className="back-link">
                    <ArrowLeft size={20} /> Back to Journal
                </Link>
            </div>
        );
    }

    return (
        <div className="blog-detail-overlay">
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

            <article className="blog-article">
                <header className="article-hero">
                    <div className="hero-background">
                        {blog.mediaType === 'video' ? (
                            <video src={blog.media} autoPlay muted loop playsInline className="hero-media" />
                        ) : (
                            <img src={blog.media || "/blog-placeholder.jpg"} alt={blog.title} className="hero-media" />
                        )}
                        <div className="hero-overlay"></div>
                    </div>

                    <div className="hero-text-container">
                        <Link to="/blog" className="breadcrumb">
                            <ArrowLeft size={16} /> The Journal
                        </Link>
                        <h1 className="article-title">{blog.title}</h1>
                        <div className="article-meta">
                            <div className="meta-item">
                                <User size={16} />
                                <span>{blog.author}</span>
                            </div>
                            <div className="meta-item">
                                <Calendar size={16} />
                                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                            </div>
                            <div className="meta-item">
                                <Clock size={16} />
                                <span>{blog.sections?.length * 2 || 5} min read</span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="article-layout">
                    <aside className="article-sidebar">
                        <div className="sticky-sidebar">
                            <div className="sidebar-card toc-card">
                                <h3>{blog.tocTitle || 'Table of Contents'}</h3>
                                <ul className="toc-list">
                                    {blog.sections?.map((section) => (
                                        <li key={section.id}>
                                            <button
                                                className={`toc-link ${activeSection === section.id ? 'active' : ''}`}
                                                onClick={() => scrollToSection(section.id)}
                                            >
                                                {section.title}
                                                {activeSection === section.id && <ChevronRight size={14} />}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="sidebar-card share-card">
                                <h3>Spread the Word</h3>
                                <div className="share-grid">
                                    <a href="#" className="blog-share-btn instagram" title="Share on Instagram">
                                        <Instagram size={20} />
                                        <span className="sr-only">Instagram</span>
                                    </a>
                                    <a href="#" className="blog-share-btn linkedin" title="Share on LinkedIn">
                                        <Linkedin size={20} />
                                        <span className="sr-only">LinkedIn</span>
                                    </a>
                                    <a href="#" className="blog-share-btn facebook" title="Share on Facebook">
                                        <Facebook size={20} />
                                        <span className="sr-only">Facebook</span>
                                    </a>
                                    <a href="#" className="blog-share-btn generic" title="More Sharing Options">
                                        <Share2 size={20} />
                                        <span className="sr-only">Share</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <main className="article-content">
                        {blog.sections?.map((section) => (
                            <section key={section.id} id={section.id} className="content-section">
                                <h2 className="section-title">{section.title}</h2>
                                <div className="section-body">
                                    {section.content.split('\n').map((para, i) => (
                                        para && <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </section>
                        ))}

                        {blog.tags?.length > 0 && (
                            <div className="article-tags">
                                {blog.tags.map(tag => (
                                    <span key={tag} className="tag">#{tag}</span>
                                ))}
                            </div>
                        )}
                    </main>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default BlogDetail;
