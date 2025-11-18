import { FaHome, FaCalendar, FaShoppingCart, FaAd, FaList } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart();

    return (
        <div className="flex min-h-screen">
            {/* Dashboard Sidebar */}
            <div className="w-64 bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg z-10">
                <ul className="menu p-4 space-y-4">
                    {/* User Links */}
                    <li>
                        <NavLink to="/dashboard/userHome" className="flex items-center gap-2">
                            <FaHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/history" className="flex items-center gap-2">
                            <FaCalendar />
                            Order History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart" className="flex items-center gap-2">
                            <FaShoppingCart />
                            My Cart ({cart.length})
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review" className="flex items-center gap-2">
                            <FaAd />
                            Add a Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/paymentHistory" className="flex items-center gap-2">
                            <FaList />
                            Payment History
                        </NavLink>
                    </li>

                    {/* Shared Links */}
                    <div className="divider my-6"></div>
                    <li>
                        <NavLink to="/" className="flex items-center gap-2">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad" className="flex items-center gap-2">
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact" className="flex items-center gap-2">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-8 overflow-y-auto bg-gray-100">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
