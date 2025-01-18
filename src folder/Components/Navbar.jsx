import React from "react";
import { FaUserCircle, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Navbar = () => {

    const navigate = useNavigate();  // Initialize useNavigate

    const handleLogoClick = () => {
        navigate("/");  // Navigate to the homepage when clicking on the logo
    };

    const handleLoginClick = () => {
        navigate("/Loginpage");  // Navigate to the Login Page when clicked
    };

    const handleCartClick = () => {
        navigate("/Cart");  // Navigate to the Cart when clicked
    };

    const handleSearchClick = () => {
        navigate("/Search");  // Navigate to the search when clicked
    };

    const handleShopbycategory = () => {
        navigate("/Shopbycategory");  // Navigate to the Shopbycategory when clicked
    };

    const handleShopall = () => {
        navigate("/shop-all");  // Navigate to the Shopall when clicked
    };

    const handleAboutus = () => {
        navigate("/Aboutus");  // Navigate to the aboutus when clicked
    };

    const handleAskexpert = () => {
        navigate("/Askexpert");  // Navigate to the askexpert when clicked
    };




    return (
        <div className="bg-gradient-to-r from-[#ffffff] to-[#d6d6d6] shadow-md backdrop-blur-md bg-opacity-90">
            <div className="flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <div onClick={handleLogoClick} className="cursor-pointer flex-shrink-0">
                    <img
                        src="/logo.jpg"
                        alt="Glamify Logo"
                        className="h-12 object-contain"
                        style={{ height:"65px" }}

                    />
                </div>


                {/* Center Links */}
                <div className="hidden md:flex space-x-6 text-gray-800">
                    <a
                        href="/shop-all"
                        className="hover:underline hover:text-[#253068] transition"
                        onClick={handleShopall}
                    >
                        Shop All
                    </a>
                    <a
                        href="/shop-by-category"
                        className="hover:underline hover:text-[#253068] transition"
                        onClick={handleShopbycategory}
                    >
                        Shop By Category
                    </a>

                    <a
                        href="/Aboutus"
                        className="hover:underline hover:text-[#253068] transition"
                        onClick={handleAboutus}
                    >
                        About Us
                    </a>
                    <a
                        href="/Askexpert"
                        className="hover:underline hover:text-[#253068] transition"
                        onClick={handleAskexpert}
                    >
                        Ask Expert
                    </a>
                </div>

                {/* Right Icons */}

                <div className="flex items-center space-x-4">
                    <FaUserCircle onClick={handleLoginClick} className="text-[#253068] text-xl cursor-pointer hover:scale-110 transition-transform" />

                    <FaSearch onClick={handleSearchClick} className="text-[#253068] text-xl cursor-pointer hover:scale-110 transition-transform" />

                    <FaShoppingCart onClick={handleCartClick} className="text-[#253068] text-xl cursor-pointer hover:scale-110 transition-transform" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
