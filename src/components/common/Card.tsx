import React from 'react';

interface CardProps {
    title: string;
    description: string;
    onHoverContent?: React.ReactNode;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, onHoverContent, onClick }) => {
    return (
        <div 
            className="relative p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105"
            onClick={onClick}
        >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
            {onHoverContent && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 text-white rounded-lg opacity-0 transition-opacity hover:opacity-100">
                    {onHoverContent}
                </div>
            )}
        </div>
    );
};

export default Card;