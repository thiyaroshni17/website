import React from 'react';
import { Sparkles, TrendingUp, Zap } from "lucide-react";
import '../styles/Home.css'; // Importing Home.css where we'll add the styles

const DisplayCard = ({ index }) => {
    return (
        <div className={`display-card card-${index}`}>
            {/* Background image will be set via CSS */}
        </div>
    );
};

export default function DisplayCards() {
    return (
        <div className="cards-stack-container">
            {[0, 1, 2].map((i) => (
                <DisplayCard key={i} index={i} />
            ))}
        </div>
    );
}

