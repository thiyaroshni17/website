import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { UserCheck, LayoutDashboard, Brain, MessageSquare, Cloud, CheckCircle2, Download, Phone, Users, History, Zap, Clock, Bell, MessageCircle, Instagram, Linkedin, Youtube, Facebook } from 'lucide-react';
import '../styles/Home.css';
import '../styles/Products.css';
import { useModal } from '../context/ModalContext';

const Products = () => {
    const { openModal } = useModal();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [billingCycle, setBillingCycle] = useState('annually');
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
    });

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
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', mobile: '', email: '', message: '' });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleCycle = (cycle) => {
        setBillingCycle(cycle);
    };

    const gridRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!gridRef.current) return;
        const rect = gridRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gridRef.current.style.setProperty('--x', `${x}px`);
        gridRef.current.style.setProperty('--y', `${y}px`);
    };

    const prices = {
        free: { monthly: 0, annually: 0, '2years': 0 },
        lite: { monthly: 499, annually: 4999, '2years': 8999 },
        pro: { monthly: 999, annually: 9999, '2years': 17999 },
        elite: { monthly: 1699, annually: 16999, '2years': 29999 }
    };

    const billingLabels = {
        monthly: {
            free: 'Free forever',
            lite: 'Billed monthly',
            pro: 'Billed monthly',
            elite: 'Billed monthly'
        },
        annually: {
            free: 'Free forever',
            lite: 'Billed annually',
            pro: 'Billed annually',
            elite: 'Billed annually'
        },
        '2years': {
            free: 'Free forever',
            lite: 'Billed every 2 years',
            pro: 'Billed every 2 years',
            elite: 'Billed every 2 years'
        }
    };

    return (
        <div className="pp-page-container">
            <nav className="navbar on-white">
                <div className="logo">
                    <img src="/logo.png" alt="Escapeloop Logo" className="logo-img" />
                    <div className="logo-text-wrapper">
                        <span className="logo-name">
                            <span className="logo-highlight">esc</span>
                            <span className="logo-secondary">apeloop</span>
                        </span>
                        <span className="logo-tagline">TECH SOLUTIONS</span>
                    </div>
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

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''} on-white`}>
                    <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/products" onClick={() => setIsMenuOpen(false)} style={{ color: '#ff6a3d', fontWeight: '600' }}>Products</Link></li>
                    <li><Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link></li>
                    <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                </ul>
            </nav>

            <main className="pp-main-content">
                <section className="pp-hero-grid-section" ref={gridRef} onMouseMove={handleMouseMove}>
                    <div className="pp-glow pp-glow-1"></div>
                    <div className="pp-glow pp-glow-2"></div>
                    <div className="pp-grid-layer"></div>
                    <div className="pp-grid-reveal"></div>

                    <div className="pp-pricing-header" style={{ paddingTop: "30px" }}>
                        <h2>Choose the right plan for your business.</h2>
                        <div className="pp-cta-big" style={{ "paddingBottom": "10px" }}>
                            <span className="pp-cta-black">Start for </span>
                            <span className="pp-cta-orange">free. </span>
                            <span className="pp-cta-black">Upgrade Anytime</span>
                        </div>
                        <p>Scale effortlessly with features designed for growth, small to large gyms.</p>
                    </div>

                    <div className="pp-action-buttons" style={{ paddingBottom: "20px" }}>
                        <button className="pp-action-btn pp-download-btn">
                            <Download size={20} />
                            Download App
                        </button>
                        <button className="pp-action-btn pp-call-btn" onClick={openModal}>
                            <Phone size={20} />
                            Expert Call
                        </button>
                        <a href="https://wa.me/919342742656?text=Hi%2C%20can%20i%20get%20more%20info%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer" className="pp-action-btn pp-whatsapp-btn" style={{ textDecoration: 'none' }}>
                            <MessageCircle size={20} />
                            WhatsApp Us
                        </a>
                    </div>

                    <div className="pp-toggle-container">
                        <div className="pp-toggle-group">
                            <button
                                className={`pp-toggle-item ${billingCycle === 'monthly' ? 'active' : ''}`}
                                onClick={() => toggleCycle('monthly')}
                            >
                                Monthly
                            </button>
                            <button
                                className={`pp-toggle-item ${billingCycle === 'annually' ? 'active' : ''}`}
                                onClick={() => toggleCycle('annually')}
                            >
                                Annually
                                <span className="pp-discount-badge">Save 20%</span>
                            </button>
                            <button
                                className={`pp-toggle-item ${billingCycle === '2years' ? 'active' : ''}`}
                                onClick={() => toggleCycle('2years')}
                            >
                                2 Years
                                <span className="pp-discount-badge">Save 30%</span>
                            </button>
                        </div>
                    </div>
                </section>

                <div className="pp-pricing-grid">
                    {/* Free Plan */}
                    <div className="pp-product-card">
                        <div className="pp-card-header">
                            <h3>Free Plan</h3>
                            <p className="pp-card-description">Essential features to get you started.</p>
                        </div>
                        <div className="pp-price-container">
                            <p className="pp-price">
                                <span className="pp-starting-text">Starting from</span><br />
                                ₹0 <span className="pp-price-suffix">/  forever</span>
                            </p>
                            <p className="pp-billing-info">{billingLabels[billingCycle].free}</p>
                        </div>
                        <ul className="pp-features-list">
                            <li>QR attendance</li>
                            <li>1 admin login</li>
                            <li>100 members</li>
                            <li>Limited WhatsApp messages and emails</li>
                            <li>Membership management</li>
                            <li>Subscription management</li>
                            <li>Finance management</li>
                            <li>Lead management</li>
                            <li>Staff management</li>
                            <li>Equipment management</li>
                            <li>Paying and billing system</li>
                        </ul>
                        <button className="pp-card-demo-btn">
                            Download
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pp-btn-arrow">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Lite Plan */}
                    <div className="pp-product-card">
                        <div className="pp-card-header">
                            <h3>Lite Plan</h3>
                            <p className="pp-card-description">Perfect for new and small - scale gyms.</p>
                        </div>
                        <div className="pp-price-container">
                            <p className="pp-price">
                                <span className="pp-starting-text">Starting from</span><br />
                                ₹{prices.lite[billingCycle]} <span className="pp-price-suffix">/{billingCycle === 'monthly' ? 'mo' : billingCycle === 'annually' ? 'yr' : '2yr'}</span>
                            </p>
                            <p className="pp-billing-info">{billingLabels[billingCycle].lite}</p>
                        </div>
                        <ul className="pp-features-list">
                            <li>All free plan features</li>
                            <li>Keypad & QR attendance</li>
                            <li>1 admin login</li>
                            <li>2 Staff logins</li>
                            <li>Unlimited WhatsApp messages & emails</li>
                            <li>Unlimited members</li>
                            <li>Message automation</li>
                            <li>Automated report update</li>
                            <li>Device included</li>
                        </ul>
                        <button className="pp-card-demo-btn">
                            Purchase
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pp-btn-arrow">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="pp-product-card pp-popular">
                        <span className="pp-popular-badge">Most Popular</span>
                        <div className="pp-card-header">
                            <h3>Pro Plan</h3>
                            <p className="pp-card-description">Everything a growing business needs.</p>
                        </div>
                        <div className="pp-price-container">
                            <p className="pp-price">
                                <span className="pp-starting-text">Starting from</span><br />
                                ₹{prices.pro[billingCycle]} <span className="pp-price-suffix">/{billingCycle === 'monthly' ? 'mo' : billingCycle === 'annually' ? 'yr' : '2yr'}</span>
                            </p>
                            <p className="pp-billing-info">{billingLabels[billingCycle].pro}</p>
                        </div>
                        <ul className="pp-features-list">
                            <li>All Lite plan features</li>
                            <li>Password+Biometric or RFID</li>
                            <li>1 Admin login</li>
                            <li>5 Staff login</li>
                            <li>PT Sessions, Steam & Class Booking Followup</li>
                            <li>Staff mobile app</li>
                            <li>AI customised fitness plan generator</li>
                            <li>Device included</li>
                        </ul>
                        <button className="pp-card-demo-btn">
                            Purchase
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pp-btn-arrow">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>

                    {/* Elite Plan */}
                    <div className="pp-product-card">
                        <div className="pp-card-header">
                            <h3>Elite Plan</h3>
                            <p className="pp-card-description">Advanced features for large gyms.</p>
                        </div>
                        <div className="pp-price-container">
                            <p className="pp-price">
                                <span className="pp-starting-text">Starting from</span><br />
                                ₹{prices.elite[billingCycle]} <span className="pp-price-suffix">/{billingCycle === 'monthly' ? 'mo' : billingCycle === 'annually' ? 'yr' : '2yr'}</span>
                            </p>
                            <p className="pp-billing-info">{billingLabels[billingCycle].elite}</p>
                        </div>
                        <ul className="pp-features-list">
                            <li>Password+FaceID</li>
                            <li>Unlimited WhatsApp messages & emails</li>
                            <li>Unlimited members</li>
                            <li>Message automation</li>
                            <li>Staff mobile app</li>
                            <li>Multi branch portal</li>
                            <li>AI suggested business insights</li>
                            <li>AI customised fitness plan generator</li>
                            <li>Device included</li>
                        </ul>
                        <button className="pp-card-demo-btn">
                            Purchase
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pp-btn-arrow">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                <section className="pp-comparison-section">
                    <h2>Detailed Feature Comparison</h2>
                    <div className="pp-comparison-table-wrapper">
                        <table className="pp-comparison-table">
                            <thead>
                                <tr>
                                    <th style={{ width: '32%' }}>Feature</th>
                                    <th className="pp-text-center">Free</th>
                                    <th className="pp-text-center">Lite</th>
                                    <th className="pp-text-center">Pro</th>
                                    <th className="pp-text-center">Elite</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Attendance Type</td>
                                    <td className="pp-text-center">QR</td>
                                    <td className="pp-text-center">Keypad & QR</td>
                                    <td className="pp-text-center">Password + Bio/RFID + QR</td>
                                    <td className="pp-text-center">Password + FaceID + QR</td>
                                </tr>
                                <tr>
                                    <td>Admin Login</td>
                                    <td className="pp-text-center">1</td>
                                    <td className="pp-text-center">1</td>
                                    <td className="pp-text-center">1</td>
                                    <td className="pp-text-center">1</td>
                                </tr>
                                <tr>
                                    <td>Staff Login</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center">2</td>
                                    <td className="pp-text-center">5</td>
                                    <td className="pp-text-center">Unlimited</td>
                                </tr>
                                <tr>
                                    <td>Members</td>
                                    <td className="pp-text-center">100</td>
                                    <td className="pp-text-center">Unlimited</td>
                                    <td className="pp-text-center">Unlimited</td>
                                    <td className="pp-text-center">Unlimited</td>
                                </tr>
                                <tr>
                                    <td>WhatsApp & Emails</td>
                                    <td className="pp-text-center">Limited</td>
                                    <td className="pp-text-center">Unlimited</td>
                                    <td className="pp-text-center">Unlimited</td>
                                    <td className="pp-text-center">Unlimited</td>
                                </tr>
                                <tr>
                                    <td>Management Modules (Membership, Subscription, Finance, Lead, Staff, Equipment)</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                </tr>
                                <tr>
                                    <td>Paying and Billing System</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                </tr>
                                <tr>
                                    <td>Automated Reports Update & Message Automation</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                </tr>
                                <tr>
                                    <td>Attendance Device Included</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                </tr>
                                <tr>
                                    <td>Staff Mobile App</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                </tr>
                                <tr>
                                    <td>AI Customised Fitness Plan Generator</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                </tr>
                                <tr>
                                    <td>PT Sessions, Steam & Class Booking Followup</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                </tr>
                                <tr>
                                    <td>Personalised Smart Cards (₹50/each)</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                </tr>
                                <tr>
                                    <td>AI Suggested Business Insights & Multi Branch Portal</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                </tr>
                                <tr>
                                    <td>Customized Gym Mobile App</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-x">✘</td>
                                    <td className="pp-text-center pp-icon-check">✔</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="pp-full-features">
                    <div className="pp-features-container">
                        <div className="pp-section-intro">
                            <h2>Core Software Features</h2>
                            <p>Everything you need to run a modern, efficient, and profitable gym.</p>
                        </div>

                        <div className="pp-features-grid">
                            <div className="pp-feature-row">
                                <div className="pp-feature-module">
                                    <div className="pp-feature-module-header">
                                        <div className="pp-feature-icon-wrapper">
                                            <UserCheck size={32} />
                                        </div>
                                        <h3>Smart Attendance System</h3>
                                    </div>
                                    <p className="pp-feature-module-desc">Manage member and staff attendance using multiple secure technologies designed for gyms.</p>
                                    <ul className="pp-module-list">
                                        <li><CheckCircle2 size={16} /> Keypad entry + QR attendance</li>
                                        <li><CheckCircle2 size={16} /> Biometric + password attendance</li>
                                        <li><CheckCircle2 size={16} /> RFID card + password entry</li>
                                        <li><CheckCircle2 size={16} /> Face recognition + password entry</li>
                                        <li><CheckCircle2 size={16} /> Staff & Member tracking</li>
                                    </ul>
                                    <div className="pp-feature-benefit">
                                        <strong>Benefit:</strong> Flexible options allow gyms to choose the most convenient system while ensuring accurate check-ins.
                                    </div>
                                </div>
                                <div className="pp-feature-image-wrapper">
                                    <div className="pp-orange-splash"></div>
                                    
                                    {/* Floating Boxes */}
                                    <div className="pp-floating-box pp-float-attendance-tl">
                                        <Users size={18} className="pp-floating-icon" />
                                        <span>Unlimited user entry</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-attendance-tr">
                                        <History size={18} className="pp-floating-icon" />
                                        <span>Unlimited punch logs</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-attendance-bl">
                                        <Zap size={18} className="pp-floating-icon" />
                                        <span>Free device integration</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-attendance-br">
                                        <Clock size={18} className="pp-floating-icon" />
                                        <span>24/7 office access</span>
                                    </div>

                                    <img src="/attendance.png" alt="Biometric Attendance System" className="pp-feature-main-img" />
                                </div>
                            </div>

                            <div className="pp-feature-row mirrored">
                                <div className="pp-feature-module">
                                    <div className="pp-feature-module-header">
                                        <div className="pp-feature-icon-wrapper">
                                            <LayoutDashboard size={32} />
                                        </div>
                                        <h3>Complete Gym Management</h3>
                                    </div>
                                    <p className="pp-feature-module-desc">A centralized system to manage all gym operations including members, staff, finances, and equipment.</p>
                                    <ul className="pp-module-list">
                                        <li><CheckCircle2 size={16} /> Unlimited member & photo profiles</li>
                                        <li><CheckCircle2 size={16} /> Membership & subscription management</li>
                                        <li><CheckCircle2 size={16} /> Lead management & CRM</li>
                                        <li><CheckCircle2 size={16} /> Salary, Payroll & Expense tracking</li>
                                        <li><CheckCircle2 size={16} /> Equipment maintenance alerts</li>
                                    </ul>
                                    <div className="pp-feature-benefit">
                                        <strong>Benefit:</strong> Gym owners can manage their entire business from one platform without manual spreadsheets.
                                    </div>
                                </div>

                                <div className="pp-feature-image-wrapper">
                                    <div className="pp-orange-splash"></div>
                                    
                                    {/* Floating Boxes */}
                                    <div className="pp-floating-box pp-float-management-tl">
                                        <Users size={18} className="pp-floating-icon" />
                                        <span>Member database</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-management-tr">
                                        <CheckCircle2 size={18} className="pp-floating-icon" />
                                        <span>Digital billing</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-management-bl">
                                        <LayoutDashboard size={18} className="pp-floating-icon" />
                                        <span>Staff scheduling</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-management-br">
                                        <Clock size={18} className="pp-floating-icon" />
                                        <span>Integrated payments</span>
                                    </div>

                                    <img src="/gympic_cutout.png" alt="Gym Management Illustration" className="pp-feature-main-img" />
                                </div>
                            </div>

                            <div className="pp-feature-row">
                                <div className="pp-feature-module">
                                    <div className="pp-feature-module-header">
                                        <div className="pp-feature-icon-wrapper">
                                            <Brain size={32} />
                                        </div>
                                        <h3>AI Powered Fitness & BI</h3>
                                    </div>
                                    <p className="pp-feature-module-desc">Advanced artificial intelligence helps gyms improve member experience and make smarter decisions.</p>
                                    <ul className="pp-module-list">
                                        <li><CheckCircle2 size={16} /> AI customized workout & diet plans</li>
                                        <li><CheckCircle2 size={16} /> AI churn prediction (cancelation prevention)</li>
                                        <li><CheckCircle2 size={16} /> AI business insights & financial analytics</li>
                                        <li><CheckCircle2 size={16} /> CRM insights based on behavior</li>
                                    </ul>
                                    <div className="pp-feature-benefit">
                                        <strong>Benefit:</strong> AI helps gyms increase retention, improve training quality, and make data-driven decisions.
                                    </div>
                                </div>

                                <div className="pp-feature-image-wrapper">
                                    <div className="pp-orange-splash"></div>
                                    
                                    {/* Floating Boxes */}
                                    <div className="pp-floating-box pp-float-ai-tl">
                                        <Brain size={18} className="pp-floating-icon" />
                                        <span>Customized workouts</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-ai-tr">
                                        <UserCheck size={18} className="pp-floating-icon" />
                                        <span>Churn prediction</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-ai-bl">
                                        <LayoutDashboard size={18} className="pp-floating-icon" />
                                        <span>Business analytics</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-ai-br">
                                        <Brain size={18} className="pp-floating-icon" />
                                        <span>CRM insights</span>
                                    </div>

                                    <img src="/women_cutout.png" alt="AI Powered Fitness Illustration" className="pp-feature-main-img" />
                                </div>
                            </div>

                            <div className="pp-feature-row mirrored">
                                <div className="pp-feature-module">
                                    <div className="pp-feature-module-header">
                                        <div className="pp-feature-icon-wrapper">
                                            <MessageSquare size={32} />
                                        </div>
                                        <h3>Automation & Communication</h3>
                                    </div>
                                    <p className="pp-feature-module-desc">Automate communication with members and staff through WhatsApp and email to save time.</p>
                                    <ul className="pp-module-list">
                                        <li><CheckCircle2 size={16} /> Automated bills, invoices & enrollments</li>
                                        <li><CheckCircle2 size={16} /> Lead follow-up & renewal reminders</li>
                                        <li><CheckCircle2 size={16} /> Birthday wishes & staff payslips</li>
                                        <li><CheckCircle2 size={16} /> Pending payment & CRM notifications</li>
                                    </ul>
                                    <div className="pp-feature-benefit">
                                        <strong>Benefit:</strong> Automation reduces manual work and ensures members always receive timely updates.
                                    </div>
                                </div>

                                <div className="pp-feature-image-wrapper">
                                    <div className="pp-orange-splash"></div>
                                    
                                    {/* Floating Boxes */}
                                    <div className="pp-floating-box pp-float-automation-tl">
                                        <Bell size={18} className="pp-floating-icon" />
                                        <span>Automated notifications</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-automation-tr">
                                        <MessageSquare size={18} className="pp-floating-icon" />
                                        <span>WhatsApp integration</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-automation-bl">
                                        <Zap size={18} className="pp-floating-icon" />
                                        <span>Payment reminders</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-automation-br">
                                        <Users size={18} className="pp-floating-icon" />
                                        <span>Member engagement</span>
                                    </div>

                                    <img src="/whatsapp_cutout.png" alt="Automation & Communication Illustration" className="pp-feature-main-img" />
                                </div>
                            </div>

                            <div className="pp-feature-row pp-support-row">
                                <div className="pp-feature-module">
                                    <div className="pp-feature-module-header">
                                        <div className="pp-feature-icon-wrapper">
                                            <Cloud size={32} />
                                        </div>
                                        <h3>Cloud Platform & Support</h3>
                                    </div>
                                    <p className="pp-feature-module-desc">Reliable cloud infrastructure and dedicated support to ensure smooth gym operations.</p>
                                    <ul className="pp-module-list">
                                        <li><CheckCircle2 size={16} /> Secure cloud data storage</li>
                                        <li><CheckCircle2 size={16} /> Data migration & device integration</li>
                                        <li><CheckCircle2 size={16} /> 24/7 customer support</li>
                                        <li><CheckCircle2 size={16} /> Automated reports for owners</li>
                                        <li><CheckCircle2 size={16} /> Software maintenance & updates</li>
                                    </ul>
                                    <div className="pp-feature-benefit">
                                        <strong>Benefit:</strong> Access data anytime while enjoying reliable performance and continuous technical support.
                                    </div>
                                </div>

                                <div className="pp-feature-image-wrapper">
                                    <div className="pp-orange-splash"></div>
                                    
                                    {/* Floating Boxes */}
                                    <div className="pp-floating-box pp-float-support-tl">
                                        <Phone size={18} className="pp-floating-icon" />
                                        <span>24/7 dedicated support</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-support-tr">
                                        <Cloud size={18} className="pp-floating-icon" />
                                        <span>Secure data backup</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-support-bl">
                                        <Download size={18} className="pp-floating-icon" />
                                        <span>Easy data migration</span>
                                    </div>
                                    <div className="pp-floating-box pp-float-support-br">
                                        <Zap size={18} className="pp-floating-icon" />
                                        <span>Regular updates</span>
                                    </div>

                                    <img src="/support.png" alt="Cloud Platform & Support Illustration" className="pp-feature-main-img" />
                                </div>
                            </div>
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
                                        <p className="contact-value">
                                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=escapeloop25@gmail.com&body=HI%2C%20Can%20I%20get%20more%20info%20about%20services%3F" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                                escapeloop25@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.23h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <div style={{ cursor: 'pointer' }} onClick={openModal}>
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
                                        <a href="https://wa.me/919342742656?text=Hi%2C%20can%20i%20get%20more%20info%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer" className="contact-value" style={{ textDecoration: 'none', color: 'inherit' }}>+91 93427 42656</a>
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
                                        <a href="https://share.google/sDVcEiymecPhbyAwS" target="_blank" rel="noopener noreferrer" className="contact-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            No 5/23 , perumal kovil street, thideer nagar,<br></br> maduravoyal, chennai - 600095, Tamil Nadu, India
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right: Contact Form */}
                        <div className="contact-form-card">
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Name" 
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
                                        placeholder="Email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        name="message"
                                        rows="4" 
                                        placeholder="Tell us about your project..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="contact-submit-btn">Send Message</button>
                            </form>
                        </div>
                    </div>

                    {/* Social links — full width below the two columns */}
                    <div className="ct-social-connect">
                        <h3>Follow Our Journey</h3>
                        <div className="ct-social-links">
                            <a href="https://www.facebook.com/profile.php?id=61579488132101" target="_blank" rel="noopener noreferrer" className="ct-social-btn facebook" aria-label="Facebook">
                                <Facebook size={20} />
                                <span>Escape Loop</span>
                            </a>
                            <a href="https://www.instagram.com/escapeloop_tech_solutions?igsh=MWx2OHpjZHljb3Mzdg==" target="_blank" rel="noopener noreferrer" className="ct-social-btn instagram">
                                <Instagram size={20} />
                                <span>escapeloop_tech_solutions</span>
                            </a>
                            <a href="https://www.youtube.com/@EscapeloopTechSolutions" target="_blank" rel="noopener noreferrer" className="ct-social-btn youtube">
                                <Youtube size={20} />
                                <span>Escapeloop Tech Solutions</span>
                            </a>
                            <a href="https://www.linkedin.com/in/escapeloop-tech-solutions-452a943b8?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="ct-social-btn linkedin">
                                <Linkedin size={20} />
                                <span>Escapeloop Tech Solutions</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
