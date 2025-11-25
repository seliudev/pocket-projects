import { Link } from "react-router-dom";
import logo from "../assets/miffy2.jpg"

const NavBar = () => {
    return (
        <nav className="bg-indigo-950 text-white px-6 py-4 shadow-md">
            <div className="container mx-auto ml-0 flex items-center">
                {/* Logo / Site Title */}
                <Link to="https://github.com/seliudev" className="mr-5 hover:border-indigo-300 border-5 rounded-full">
                    <img
                        src={logo}
                        alt="Seliudev Logo"
                        className="w-10 h-10 rounded-full"
                    />
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-6 text-xl">
                    <Link to="/" className="hover:text-indigo-200">
                        Home
                    </Link>
                    <Link to="/" className="hover:text-indigo-200">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
