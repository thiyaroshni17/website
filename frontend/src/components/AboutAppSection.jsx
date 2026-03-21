import { Shield, Clock, CheckCircle, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const AboutAppSection = () => {
    return (
        <section className="about-app-section">
            <div className="about-app-container">
                <div className="about-app-orange-card">
                    {/* Background Animated Curves */}
                    <div className="about-app-bg-curves">
                        <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="curve-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ec650a" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#ec650a" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#ff9d2e" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 0 100 Q 250 50 500 200 T 1000 300"
                                className="curved-line-path"
                                style={{ animationDelay: '0s', opacity: 0.2 }}
                            />
                            <path
                                d="M 0 300 Q 300 350 500 200 T 1000 100"
                                className="curved-line-path"
                                style={{ animationDelay: '-5s', opacity: 0.15 }}
                            />
                            <path
                                d="M 0 200 Q 400 100 600 300 T 1000 200"
                                className="curved-line-path"
                                style={{ animationDelay: '-2s', opacity: 0.1 }}
                            />
                        </svg>
                    </div>

                    {/* Left Content */}
                    <div className="about-app-left">
                        <h2 className="about-app-title">GYM Software</h2>
                        <p className="about-app-description">
                            Launch and manage your gym effortlessly with our all-in-one software. From member managemnet to attendance tracking and payments, everything is built to simplify your daily operations and scale your fitness business.
                        </p>

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

                    {/* Center Phone Mockup (CSS-based for reliability) */}
                    <div className="about-app-center">
                        <div className="css-phone-mockup-container">
                            <div className="css-phone-case">
                                <div className="css-phone-bezel">
                                    <div className="css-phone-speaker"></div>
                                    <div className="css-phone-screen">
                                        <video
                                            src="/phone.mp4"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="phone-video"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="about-app-right">
                        <div className="app-feature-item">
                            <div className="app-feature-icon-wrapper">
                                <span className="app-feature-number">10+</span>
                            </div>
                            <div className="app-feature-text">
                                <h4 className="app-feature-label">All-in-One Gym Management</h4>
                            </div>
                        </div>

                        <div className="app-feature-item">
                            <div className="app-feature-icon-wrapper">
                                <Clock className="app-feature-icon" size={24} />
                            </div>
                            <div className="app-feature-text">
                                <h4 className="app-feature-label">Smart attendance system</h4>
                            </div>
                        </div>

                        <div className="app-feature-item">
                            <div className="app-feature-icon-wrapper">
                                <Shield className="app-feature-icon" size={24} />
                            </div>
                            <div className="app-feature-text">
                                <h4 className="app-feature-label">Payments & Billing automation</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAppSection;
