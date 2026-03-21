import React from 'react';
import '../styles/Services.css';

const LogoCarousel = () => {
    const logos = [
        '/antigravity-color.png',
        '/evolution-logo.png',
        '/express.png',
        '/figma.png',
        '/mongodb.webp',
        '/n8n.png',
        '/node.png',
        '/python.png',
        '/react.png',
        '/typescript.webp'
    ];

    // Duplicate logos for seamless infinite scroll
    const displayLogos = [...logos, ...logos];

    return (
        <div className="logo-carousel-section">
            <h2 className="carousel-title">Technology Used</h2>
            <div className="logo-carousel-container">
                <div className="logo-carousel-track">
                    {displayLogos.map((logo, index) => (
                        <div key={index} className="logo-item">
                            <img src={logo} alt={`Tech Logo ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
