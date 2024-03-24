import React from 'react';

const Header = () => {
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';

    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg h-16 flex items-center">
            <button className="text-black ml-4 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <img className="h-12 mx-auto" src={url} alt="logo" />
        </div>
    );
}

export default Header;

