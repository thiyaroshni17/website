import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page-container">
            <header className="legal-header" style={{ padding: '20px', background: '#ffffff', borderBottom: '1px solid #eee' }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: 'bold', fontSize: '24px' }}>
                    Escape<span style={{ color: '#ec650a' }}>loop</span>
                </Link>
            </header>
            <main style={{ maxWidth: '800px', margin: '60px auto', padding: '0 24px', minHeight: '60vh' }}>
                <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Privacy Policy</h1>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                    At Escapeloop, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Escapeloop and how we use it.
                </p>
                {/* Specific privacy policy content goes here */}
                <p style={{ color: '#666', lineHeight: '1.6', marginTop: '20px' }}>
                    If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Privacy;
