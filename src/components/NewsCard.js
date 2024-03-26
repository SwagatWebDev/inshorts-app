import React, { useState } from 'react';

const NewsCard = ({ imageUrl, title, details, link, shortDetails }) => {
    const [swipeDirection, setSwipeDirection] = useState(null);
    const [startY, setStartY] = useState(null);

    const handleTouchStart = (e) => {
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
        if (!startY) return;
        const currentY = e.touches[0].clientY;
        const diff = startY - currentY;

        if (diff > 0) {
            // Swipe up detected
            setSwipeDirection('up');
        } else {
            // Swipe down detected
            setSwipeDirection('down');
        }
    };

    const handleTouchEnd = () => {
        setStartY(null);
        setSwipeDirection(null);
    };

    return (
        <div className={`max-w-md bg-white rounded-xl overflow-hidden shadow-md m-2 flex-grow flex flex-col swipe-${swipeDirection}`}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}>
            {/* Header Section */}
            <div className="flex-none">
                <img className="w-full object-cover" src={imageUrl} alt={title} style={{ maxHeight: '220px' }} />
            </div>
            {/* Horizontal line */}
            <hr className="border-t border-gray-300" />

            {/* Body Section */}
            <div className="flex-grow px-6 py-3 overflow-hidden" style={{ maxHeight: '300px' }}>
                <h2 className="text-md font-bold mb-2">{title}</h2>
                <p className="text-gray-700 text-sm" style={{ height: '300px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical' }}>
                    {details}
                </p>
            </div>
            {/* Horizontal line */}
            <hr className="border-t border-gray-300" />

            {/* Footer Section */}
            <a href={link} className="block w-full" style={{ backgroundColor: '#2E2E2E' }}>
                {/* Light black transparent color */}
                <div className="px-6 py-4">
                    <p className="text-white text-sm">{shortDetails}</p> {/* Display shortDetails */}
                    <span className="text-center text-white font-bold rounded text-sm">
                        Tap to know more
                    </span>
                </div>
            </a>
        </div>
    );
};

export default NewsCard;
