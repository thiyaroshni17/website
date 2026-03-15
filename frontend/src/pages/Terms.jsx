import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Terms = () => {
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
                <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Terms & Conditions</h1>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Welcome to Escapeloop. These terms and conditions outline the rules and regulations for the use of Escapeloop's Website.
                </p>
                {/* Specific terms content goes here */}
                <p style={{ color: '#666', lineHeight: '1.6', marginTop: '20px' }}>
                    Please contact us if you need the full Terms & Conditions document.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Terms;
