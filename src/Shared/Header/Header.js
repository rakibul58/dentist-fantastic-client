import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user , logOut} = useContext(AuthContext);

    // logout
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    //Nav links
    const navItems = <>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-error' : '')} to='/'>Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? 'text-error' : '')} to='/blog'>Blog</NavLink></li>
        {
            user && <>
                <li><NavLink className={({ isActive }) => (isActive ? 'text-error' : '')} to='/addService'>Add Services</NavLink></li>
            </>
        }
    </>

    const navButtons = <>
        <li><Link to='/login' className="btn btn-outline btn-error normal-case rounded-full px-8 lg:mr-2">Login</Link></li>
        <li><Link to='/register' className="btn btn-error text-white hover:bg-transparent hover:text-red-600 normal-case rounded-full px-8 mt-2 lg:mt-0">Register</Link></li>
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
                        {/* for collapsed navbar */}
                        {user ? <>
                            <li>
                                <button className="btn btn-outline btn-error normal-case rounded-full px-8 mb-2">Logout</button>
                            </li>
                        </>
                            :  navButtons }
                    </ul>
                </div>
                {/* Nav Logo */}
                <img className='w-1/6' src={logo} alt="" />
                {/* Nav Title */}
                <Link className="btn btn-ghost normal-case text-xl text-error font-bold">
                    Dentist Fantastic
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-lg font-semibold">
                    {navItems}
                </ul>
            </div>
            {/* For Laptop view */}
            <div className="navbar-end hidden lg:flex">
                <ul className='menu menu-horizontal'>
                    {user ? <>
                        <li>
                            <button onClick={handleLogOut} className="btn btn-outline btn-error normal-case rounded-full px-8">Logout</button>
                        </li>
                    </>
                        :  navButtons }
                </ul>
            </div>
        </div>
    );
};

export default Header;