import '../styles/Timeline.css';

const Timeline = () => {
    const timelineData = [
        {
            title: "Custom Software Development",
            description: "Custom software solutions ,Web & Mobile application development, Secured payment portals."
        },
        {
            title: "AI, Automation & Data Solutions",
            description: "Conversational AI chatbot & Messaging automation, workflow automation, business analytics."
        },
        {
            title: "Cloud, System & Infrastructure",
            description: "Cloud infrastructure setup & migration, system integration & API development, security & compliance."
        },
        {
            title: "Business Management Systems",
            description: "ERP & CRM development, inventory & supply chain management, attendance device integration."
        }
    ];

    return (
        <div className="timeline-container">
            <div className="timeline-line"></div>
            {timelineData.map((item, index) => (
                <div key={index} className="timeline-item">
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-para">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
