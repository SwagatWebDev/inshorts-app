import React, { useState } from 'react';

const Header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    const [isNavOpen, setIsNavOpen] = useState(false);

    const categories = [
        "Business",
        "Entertainment",
        "General",
        "Health",
        "Science",
        "Sports",
        "Technology"
    ];

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg h-16 flex items-center">
            <button className="text-black ml-4 focus:outline-none" onClick={toggleNav}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <img className="h-12 mx-auto" src={url} alt="logo" />

            {isNavOpen && (
                <div className="fixed inset-y-0 left-0 bg-white w-64 shadow-lg">
                    <div className="flex justify-between items-center py-4 px-4">
                        <div className="font-bold">Category</div>
                        <button className="text-black focus:outline-none" onClick={closeNav}>
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index} className="py-2 px-4 hover:bg-gray-200 rounded cursor-pointer" onClick={() => console.log(category)}>
                                {category}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
