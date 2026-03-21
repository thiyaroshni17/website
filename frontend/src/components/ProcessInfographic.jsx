import React from 'react';
import '../styles/Services.css';

const ProcessInfographic = () => {
    const steps = [
        {
            title: "Custom Software Development",
            description: [
                "Tailored software solutions for businesses.",
                "SaaS product development, Scalable & secure architectures. Implementing AI & Automation Solutions."
            ],
            icon: (
                <svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="currentColor" /></svg>
            )
        },
        {
            title: "Web & Mobile App Development",
            description: [
                "Websites, dashboards & web portals.",
                "Android & iOS apps. Secured payment gateways,High-performance, user-friendly apps"
            ],
            icon: (
                <svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 15h14l-4.5-6L11 14l-2.5-3z" fill="currentColor" /></svg>
            )
        },
        {
            title: "Enterprise Solutions (ERP/CRM)",
            description: [
                "Custom ERP & CRM systems.",
                "Business management tools & automated workflows. Scalable enterprise-grade software."
            ],
            icon: (
                <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor" /></svg>
            )
        },
        {
            title: "AI & Automation Solutions",
            description: [
                "AI-powered automation systems for businesses.",
                "AI agents, Chatbots. Whatsapp, Email & SMS automation. Workflow automation"
            ],
            icon: (
                <svg viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" fill="currentColor" /></svg>
            )
        },
        {
            title: "Data & Cloud Solutions",
            description: [
                "Business analytics & reporting.",
                "Cloud migration & management, Data visualization & intelligence systems."
            ],
            icon: (
                <svg viewBox="0 0 24 24"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z" fill="currentColor" /></svg>
            )
        },
        {
            title: "UI/UX, Integration & Support",
            description: [
                "UI/UX design for web & mobile apps.",
                "Third-party integrations, API development & maintenance. Testing, deployment,  Post-launch support & updates."
            ],
            icon: (
                <svg viewBox="0 0 24 24"><path d="M21 7H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 12H3V9h18v10zM7 16h7v2H7z" fill="currentColor" /></svg>
            )
        }
    ];

    return (
        <section className="process-infographic-section">
            <div className="section-container">
                <header className="process-header">
                    <h1>
                        <span className="orange-gradient-text">Custom services for</span><br />
                        <span className="business-gradient-text">your business needs</span>
                    </h1>
                </header>

                <div className="process-timeline">
                    {/* Snakelike Curved Line */}
                    <svg className="process-curve-svg-animated" viewBox="0 0 100 1200" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ec650a" stopOpacity="0" />
                                <stop offset="50%" stopColor="#ec650a" stopOpacity="1" />
                                <stop offset="100%" stopColor="#ff9d2e" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 50 0 
                               C 100 50, 100 150, 50 200 
                               C 0 250, 0 350, 50 400 
                               C 100 450, 100 550, 50 600 
                               C 0 650, 0 750, 50 800 
                               C 100 850, 100 950, 50 1000 
                               C 0 1050, 0 1150, 50 1200"
                            className="process-curve-animated-path"
                        />
                    </svg>

                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="process-content-box"></div>
                            <div className="process-icon-wrapper">
                                {step.icon}
                            </div>
                            <div className="process-content-box text-content">
                                <h3>{step.title}</h3>
                                <ul>
                                    {step.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessInfographic;
