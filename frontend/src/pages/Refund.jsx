import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Refund = () => {
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
                <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Refund & Cancellation Policy</h1>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                    Thank you for choosing Escapeloop. Your satisfaction is our priority. This policy outlines the conditions under which refunds and cancellations are processed for our services and products.
                </p>
                {/* Specific refund policy content goes here */}
                <p style={{ color: '#666', lineHeight: '1.6', marginTop: '20px' }}>
                    Please reach out to our support team for specific refund requests or inquiries.
                </p>
            </main>
            <Footer />
        </div>
    );
};

export default Refund;
