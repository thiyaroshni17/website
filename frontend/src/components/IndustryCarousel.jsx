import React, { useState, useEffect } from 'react';

const IndustryCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(4);
    const totalItems = 7;
    const intervalTime = 2000;
    const [isPaused, setIsPaused] = useState(false);

    const industries = [
        "E-commerce",
        "Education",
        "Fintech",
        "Gym",
        "Healthcare",
        "Salon",
        "Company"
    ];

    useEffect(() => {
        if (isPaused) {
            console.log("Carousel Paused");
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex % totalItems) + 1);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [isPaused, totalItems]);

    const handleRadioChange = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ position: 'relative', zIndex: 100 }}
        >
            {Array.from({ length: totalItems }, (_, i) => (
                <input
                    key={`item-${i + 1}`}
                    type="radio"
                    name="slider"
                    id={`item-${i + 1}`}
                    checked={currentIndex === i + 1}
                    onChange={() => handleRadioChange(i + 1)}
                    style={{ display: 'none' }}
                />
            ))}

            <div className="cards-wrapper">
                {industries.map((industry, i) => (
                    <label
                        key={`song-${i + 1}`}
                        className="industry-card"
                        htmlFor={`item-${i + 1}`}
                        id={`song-${i + 1}`}
                    >
                    </label>
                ))}
            </div>
        </div>
    );
};

export default IndustryCarousel;
