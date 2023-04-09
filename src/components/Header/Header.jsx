import React from 'react';
import logo from "../../../images/Logo.svg";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='bg-slate-800 h-20 flex justify-between pe-20 ps-20 py-5'>
            <img className='cursor-pointer' src={logo} alt="" />
            <div className='text-white'>
                <Link className='me-5' to="/">Shop</Link>
                <Link className='me-5' to="/orders">Orders</Link>
                <Link className='me-5' to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;