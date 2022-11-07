import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png'

const Header = () => {
    const navItems = <>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-error' : '')} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-error' : '')} to='/login'>Blog</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg font-semibold">
                        {navItems}
                        <li><Link className="btn btn-outline btn-error normal-case rounded-full px-8 mb-2">Login</Link></li>
                        <li><Link className="btn btn-error hover:bg-transparent hover:text-red-600 normal-case rounded-full px-8">Register</Link></li>
                    </ul>
                </div>
                <img className='w-1/6' src={logo} alt="" />
                <Link className="btn btn-ghost normal-case text-xl text-error font-bold">
                    Dentist Fantastic
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <Link className="btn btn-outline btn-error normal-case rounded-full px-8 mr-2">Login</Link>
                <Link className="btn btn-error hover:bg-transparent hover:text-red-600 normal-case rounded-full px-8">Register</Link>
            </div>
        </div>
    );
};

export default Header;