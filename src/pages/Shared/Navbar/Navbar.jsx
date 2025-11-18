import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import useCart from '../../../hooks/useCart';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = (
        <>
            <li><Link className="text-base lg:text-lg font-medium" to='/'>Home</Link></li>
            <li><Link className="text-base lg:text-lg font-medium" to='/menu'>Our Menu</Link></li>
            <li><Link className="text-base lg:text-lg font-medium" to='/order/salad'>Our Orders</Link></li>
            <li>
                <Link to="/dashboard/cart" className="flex items-center text-base lg:text-lg font-medium">
                    <FaShoppingCart className="mr-2 text-xl" />
                    <span className="badge badge-secondary">+{cart.length}</span>
                </Link>
            </li>
            {user ? (
                <li>
                    <button
                        onClick={handleLogOut}
                        className="flex items-center gap-2 text-base lg:text-lg font-medium btn btn-ghost"
                    >
                        <FaSignOutAlt className="mr-2" /> LogOut
                    </button>
                </li>
            ) : (
                <li><Link className="text-base lg:text-lg font-medium" to='/login'>Login</Link></li>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-md fixed top-0 z-50 w-full px-4 sm:px-6 lg:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <Link to='/' className="text-2xl font-bold text-gray-800">Rassporium</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end hidden lg:flex">
                {/* Optional button placeholder */}
            </div>
        </div>
    );
};

export default Navbar;
