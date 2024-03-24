import React from 'react';

const NewsCard = ({ imageUrl, title, details, link, shortDetails }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-md p-2 m-2 h-full flex flex-col">
                {/* Header Section */}
                <div className="w-full flex-shrink-0">
                    <img className="w-full h-80 object-cover" src={imageUrl} alt={title} />
                </div>
                {/* Horizontal line */}
                <hr className="border-t border-gray-300" />

                {/* Body Section */}
                <div className="px-6 py-4 flex-grow">
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                    <p className="text-gray-700 text-base">{details}</p>
                </div>
                {/* Horizontal line */}
                <hr className="border-t border-gray-300" />

                {/* Footer Section */}
                <a href={link} className="block w-full" style={{ backgroundColor: '#2E2E2E' }}> {/* Light black transparent color */}
                    <div className="px-6 py-4">
                        <p className="text-white text-sm">{shortDetails}</p> {/* Display shortDetails */}
                        <span className="text-center text-white font-bold rounded text-sm">
                            Tap to know more
                        </span>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default NewsCard;
