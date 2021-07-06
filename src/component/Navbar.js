import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <div className="My-navbar">

            <div className="navbar-container" id="navbar">
                <Link className="nav-item active-item" style={{flexBasis:"200px", flexGrow:"0",flexShrink:"1"}} to="/">
                    <i className="fas fa-home"></i> Home
                </Link>
                <Link className="nav-item" style={{flexBasis:"200px", flexGrow:"0",flexShrink:"1"}} to="/phones">
                <i class="fas fa-mobile-alt"></i>Phones
                </Link>
                <Link className="nav-item" style={{flexBasis:"40%", flexGrow:"0",flexShrink:"1"}} to="/cart">
                    <i className="fas fa-cart-plus"/>my cart
                </Link>
                <div className="nav-item" style={{flexBasis:"200px", flexGrow:"0",flexShrink:"1"}}>Contact us</div>
                <div className="nav-item" style={{flexBasis:"150px", flexGrow:"0",flexShrink:"1"}}>Sing in</div>
            </div> 
        </div>
    )
}
