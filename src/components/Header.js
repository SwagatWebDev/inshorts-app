import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-purple-400 to-indigo-500 shadow-lg p-4">
            <div className="logo-container flex items-center">
                <Link to="/">
                    <img className="w-10" src={LOGO_URL} alt="Logo" />
                </Link>
                <div className="ml-4 text-3xl font-bold text-white">inshorts</div>
            </div>
            <div className="flex items-center">
            </div>
        </div>
    );
};

export default Header;
