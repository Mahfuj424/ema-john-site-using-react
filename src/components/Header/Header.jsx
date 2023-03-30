import React from 'react';
import logo from "../../../images/Logo.svg";
const Header = () => {
    return (
        <nav className='bg-slate-800 h-20 flex justify-between pe-20 ps-20 py-5'>
            <img className='cursor-pointer' src={logo} alt="" />
            <div className='text-white'>
                <a className='me-5' href="/order">Order</a>
                <a className='me-5' href="/orderReview">Order Review</a>
                <a className='me-5' href="/manageInventory">Manage Inventory</a>
                <a href="/logIn">Login</a>
            </div>
        </nav>
    );
};

export default Header;