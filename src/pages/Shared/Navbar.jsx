import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useTheme } from "../../ThemeProvider/ThemeProvider ";

const Navbar = () => {
    const { user, handleLogOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme(); // Get dark mode status and toggle function

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div style={{ backgroundColor: isDarkMode ? '#1a1a1a' : '#f3f4f6', color: isDarkMode ? '#ffffff' : '#000000' }}>
            <div className="navbar w-11/12 mx-auto">
                {/* Navbar Start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/"
                                className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                            ><li><a>Home</a></li></NavLink>
                            <NavLink to="/allFoods"
                                className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                            ><li><a>All Foods</a></li></NavLink>
                            <NavLink to="/gallery"
                                className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                            ><li><a>Gallery</a></li></NavLink>
                            <NavLink to="/MyOrders"
                                className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                            ><li><a>My Orders</a></li></NavLink>
                            <NavLink to="/addFood"
                                className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                            ><li><a>Add Food</a></li></NavLink>
                            <NavLink to="/myFood"
                                className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                            ><li><a>My Added Food</a></li></NavLink>
                        </ul>
                    </div>
                    <NavLink to="/"><a className="btn btn-ghost font-bold text-3xl">
                        <img
                            className="h-20 w-20"
                            src={logo}
                            alt="logo" /> FODIS</a></NavLink>
                </div>
                {/* Navbar Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavLink to="/"
                            className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                        ><li><a>Home</a></li></NavLink>
                        <NavLink to="/allFoods"
                            className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                        ><li><a>All Foods</a></li></NavLink>
                        <NavLink to="/gallery"
                            className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                        ><li><a>Gallery</a></li></NavLink>
                        <NavLink to="/MyOrders"
                            className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                        ><li><a>My Orders</a></li></NavLink>
                        <NavLink to="/addFood"
                            className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                        ><li><a>Add Food</a></li></NavLink>
                        <NavLink to="/myFood"
                            className={({ isActive }) => (isActive ? "text-primary font-bold" : "text-gray-600")}
                        ><li><a>My Added Food</a></li></NavLink>
                    </ul>
                </div>
                {/* Navbar End */}
                <div className="navbar-end gap-4">
                    <label className="swap swap-rotate">
                        {/* Hidden checkbox controls the theme */}
                        <input type="checkbox" className="theme-controller" onChange={toggleTheme} checked={isDarkMode} />
                        {/* Sun icon */}
                        <svg
                            className="swap-off h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>
                        {/* Moon icon */}
                        <svg
                            className="swap-on h-10 w-10 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                    </label>
                    {user?.email ? (
                        <div className="flex gap-2 items-center">
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                                <img
                                    className="rounded-full h-10 w-10 cursor-pointer"
                                    src={user.photoURL || ""}
                                    alt="User Profile"
                                    onClick={toggleDropdown}
                                />
                            </div>
                            {isDropdownOpen && (
                                <div className="dropdown-menu absolute top-24 mt-2 w-48 bg-white rounded shadow-lg z-10">
                                    <NavLink to="/myFood"><div><a className="block px-4 py-2 text-gray-800">My Foods</a></div></NavLink>
                                    <NavLink to="/addFood"><div><a className="block px-4 py-2 text-gray-800">Add Food</a></div></NavLink>
                                    <NavLink to="/MyOrders"><div><a className="block px-4 py-2 text-gray-800">My Orders</a></div></NavLink>
                                </div>
                            )}
                            <button onClick={handleLogOut} className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 btn-secondary">
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <div className="flex justify-end gap-2">
                            <NavLink to="/logIn">
                                <div>
                                    <a className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 btn-primary">Log In</a>
                                </div>
                            </NavLink>
                            <NavLink to="/signup">
                                <div>
                                    <a className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 btn-secondary">Sign Up</a>
                                </div>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
