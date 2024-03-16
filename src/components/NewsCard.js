// NewsCard.js
import React from 'react';

const NewsCard = ({ imageUrl, title, details, link }) => {
    return (
        <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-md p-2 m-2">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-gray-700 text-base">{details}</p>
            </div>
            <div className="px-6 py-4 bg-gradient-to-t from-gray-200 to-transparent backdrop-blur-md">
                <a href={link} className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsCard;
