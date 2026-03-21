import React from 'react';
import { LineChart, Zap, ShieldCheck, BarChart } from 'lucide-react';
import '../styles/Services.css';

const ServiceVisual = () => {
    return (
        <div className="service-visual-container">
            {/* Orange Splash Background */}
            <div className="orange-splash"></div>
            
            {/* Cutout Image with Blending */}
            <div className="service-main-img-wrapper">
                <img src="/service_v2.png" alt="Service Showcase" className="service-main-img" />
            </div>

            {/* Floating Boxes */}
            <div className="service-floating-box top-left">
                <LineChart className="sf-icon" size={16} />
                <span>Faster Growth</span>
            </div>
            
            <div className="service-floating-box top-right">
                <Zap className="sf-icon" size={16} />
                <span>Low Cost</span>
            </div>
            
            <div className="service-floating-box bottom-left">
                <ShieldCheck className="sf-icon" size={16} />
                <span>Easy to Use</span>
            </div>
            
            <div className="service-floating-box bottom-right">
                <BarChart className="sf-icon" size={16} />
                <span>24/7 Support</span>
            </div>
        </div>
    );
};

export default ServiceVisual;
