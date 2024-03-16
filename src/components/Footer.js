import React from 'react';

const Footer = () => {
    return (
        <div className="footer-container bg-gradient-to-r from-purple-200 to-indigo-400 shadow-lg p-4">
            <div className="footer flex justify-between">
                <div className="company-info text-black">
                    <h2 className="text-2xl font-bold">Inshorts</h2>
                    <p>Stay informed with concise news snippets from around the world!</p>
                    <p className="text-sm">&copy; {new Date().getFullYear()} Inshorts. All Rights Reserved.</p>
                </div>
                <div className="address text-black">
                    <h3 className="text-lg font-bold mb-2">Contact Us</h3>
                    <p>New Delhi, India</p>
                    <p>contact@inshorts.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
