import React from 'react';
import '../styles/CPU.css';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaGoogleDrive } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { SiN8N } from 'react-icons/si';
import { RiFileExcel2Fill } from 'react-icons/ri';


const CPU = () => {
    return (
        <div className="cpu-container">
            <svg viewBox="0 0 200 100" className="cpu-svg">
                <defs>
                    <filter id="ray-glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="0.8" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    <linearGradient id="cpu-bg-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="20%" stopColor="#999999" />
                        <stop offset="80%" stopColor="#FFFFFF" />
                    </linearGradient>

                    <linearGradient id="cpu-text-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#000000" />
                        <stop offset="100%" stopColor="#808080" />
                    </linearGradient>

                    <path id="path1" d="M 10 10 h 79.5 q 5 0 5 5 v 30" />
                    <linearGradient id="ray-grad-1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff0000" /><stop offset="100%" stopColor="rgba(255,255,0,0.4)" /></linearGradient>
                    <linearGradient id="ray-grad-2" x1="100%" y1="0%" x2="0%" y2="0%"><stop offset="0%" stopColor="#ff0000" /><stop offset="100%" stopColor="rgba(255,255,0,0.4)" /></linearGradient>
                    <linearGradient id="ray-grad-3" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff0000" /><stop offset="100%" stopColor="rgba(255,255,0,0.4)" /></linearGradient>
                    <linearGradient id="ray-grad-4" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#ff0000" /><stop offset="100%" stopColor="rgba(255,255,0,0.4)" /></linearGradient>
                    <linearGradient id="ray-grad-5" x1="100%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#ff0000" /><stop offset="100%" stopColor="rgba(255,255,0,0.4)" /></linearGradient>
                    <linearGradient id="ray-grad-6" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" stopColor="#ff0000" /><stop offset="100%" stopColor="rgba(255,255,0,0.4)" /></linearGradient>
                    <linearGradient id="ray-grad-7" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ff0000" /><stop offset="100%" stopColor="rgba(255,255,0,0.4)" /></linearGradient>
                    <linearGradient id="ray-grad-8" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ff0000" /><stop offset="100%" stopColor="rgba(255,255,0,0.4)" /></linearGradient>
                    <path id="path2" d="M 180 10 h -69.7 q -5 0 -5 5 v 30" />
                    <path id="path3" d="M 130 20 v 21.8 q 0 5 -5 5 h -10" />
                    <path id="path4" d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" />
                    <path id="path5" d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" />
                    <path id="path6" d="M 94.8 108 v -59" />
                    <path id="path7" d="M 42 85 h 41 q 5 0 5 -5 v -7 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" />
                    <path id="path8" d="M 15 65 h 40 q 5 0 5 -5 v -8.5 q 0 -5 5 -5 h 20" />
                </defs>

                <use href="#path1" className="base-path" />
                <use href="#path2" className="base-path" />
                <use href="#path3" className="base-path" />
                <use href="#path4" className="base-path" />
                <use href="#path5" className="base-path" />
                <use href="#path6" className="base-path" />
                <use href="#path7" className="base-path" />
                <use href="#path8" className="base-path" />

                <FaWhatsapp x="5" y="5" width="10" height="10" fill="#999999" />
                <FaInstagram x="175" y="5" width="10" height="10" fill="#999999" />
                <FaLinkedin x="125" y="15" width="10" height="10" fill="#999999" />
                <MdEmail x="165" y="75" width="10" height="10" fill="#999999" />
                <SiN8N x="130" y="60" width="10" height="10" fill="#999999" />
                <FaGithub x="89.8" y="103" width="10" height="10" fill="#999999" />
                <FaGoogleDrive x="37" y="80" width="10" height="10" fill="#999999" />
                <RiFileExcel2Fill x="10" y="60" width="10" height="10" fill="#999999" />


                <use href="#path1" className="ray r1" filter="url(#ray-glow)" />
                <use href="#path2" className="ray r2" filter="url(#ray-glow)" />
                <use href="#path3" className="ray r3" filter="url(#ray-glow)" />
                <use href="#path4" className="ray r4" filter="url(#ray-glow)" />
                <use href="#path5" className="ray r5" filter="url(#ray-glow)" />
                <use href="#path6" className="ray r6" filter="url(#ray-glow)" />
                <use href="#path7" className="ray r7" filter="url(#ray-glow)" />
                <use href="#path8" className="ray r8" filter="url(#ray-glow)" />

                <g className="cpu-core">
                    <rect x="85" y="40" width="30" height="20" rx="2" fill="url(#cpu-bg-gradient)" />
                    <text x="100" y="51.5" textAnchor="middle" className="cpu-text" fill="url(#cpu-text-gradient)">AUTOMATE</text>

                    <rect x="93" y="37.5" width="2" height="4" rx="0.5" fill="#ffffff" />
                    <rect x="105" y="37.5" width="2" height="4" rx="0.5" fill="#ffffff" />

                </g>
            </svg>
        </div>
    );
};

export default CPU;
