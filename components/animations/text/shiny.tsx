"use client";

import React from 'react';

interface ShinyTextProps {
    text: string;
    color?: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '', color = 'text-[#21ee21a4]' }) => {
    const animationDuration = `${speed}s`;

    return (
        <div
            className={`${color} bg-clip-text inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
            style={{
                backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0.2) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.4) 60%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                animationDuration: animationDuration,
            }}
        >
            {text}
        </div>
    );
};

export default ShinyText;