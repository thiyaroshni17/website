import React, { useState } from 'react';
import { Send, X } from 'lucide-react'; 
import '../styles/Chatbot.css';

const MessageIcon = ({ size = 28 }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M21 11.5C21 15.6421 17.6421 19 13.5 19C12.1884 19 10.9667 18.6631 9.90426 18.0694L5 19.5L6.43056 14.5957C5.83688 13.5333 5.5 12.3116 5.5 11.5C5.5 7.35786 8.85786 4 13.5 4C18.1421 4 21 7.35786 21 11.5Z" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        <path d="M10 10H17M10 14H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    </svg>
);

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [chatHistory, setChatHistory] = useState([
        { type: 'bot', text: 'Hi! Welcome to Escapeloop. How can we help you automate your business today?' }
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;

        // Add user message
        const newUserMsg = { type: 'user', text: message };
        setChatHistory(prev => [...prev, newUserMsg]);
        setMessage("");

        // Simulate bot response
        setTimeout(() => {
            setChatHistory(prev => [...prev, {
                type: 'bot',
                text: "Thanks for reaching out! One of our experts will be with you shortly to discuss your automation needs."
            }]);
        }, 1000);
    };

    return (
        <div className="chatbot-container">
            {/* Chat Window */}
            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <h3>Escapeloop Support</h3>
                    <button className="chatbot-close" onClick={() => setIsOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <div className="chatbot-messages">
                    {chatHistory.map((msg, idx) => (
                        <div key={idx} className={`chat-bubble ${msg.type}`}>
                            {msg.text}
                        </div>
                    ))}
                </div>

                <form className="chatbot-input-area" onSubmit={handleSend}>
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button type="submit" className="chatbot-send">
                        <Send size={20} />
                    </button>
                </form>
            </div>

            {/* FAB */}
            <button
                className="chatbot-fab"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Open chat"
            >
                {isOpen ? (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ) : (
                    <MessageIcon size={28} />
                )}
            </button>
        </div>
    );
};

export default Chatbot;
