import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-gradient-to-r from-amber-200 via-white to-amber-200 shadow-md px-4">
            {/* Left Side */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                             className="h-6 w-6" 
                             fill="none" 
                             viewBox="0 0 24 24" 
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                  d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-lg z-[1] mt-3 w-48 p-2 shadow-lg">
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/products'>Products</Link></li>
                        <li><Link href='/dashboard'>Dashboard</Link></li>
                    </ul>
                </div>
                {/* Brand */}
                <Link href="/" className="btn btn-ghost normal-case text-2xl font-bold text-amber-700">
                    Mr DIY
                </Link>
            </div>

            {/* Center Menu (Desktop) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-6 text-lg font-medium">
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/products'>Products</Link></li>
                    <li><Link href='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>

            {/* Right Side */}
            <div className="navbar-end">
                <Link href='/login' className='btn btn-sm rounded-full bg-amber-500 text-white hover:bg-lime-700 px-5'>
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
