import React from 'react'
import logo from "./images/logoBlack.png"
import "./NavBar.css";

function NavBar() {
return (
<div className="navbar">
                <img src={logo} className="header_logo" alt=''/>
            <div className="header_nav">
            <div className="header_option">
                <span
                className="header_optionLineOne">
                    Login
                </span>
                <span
                className="header_optionLineTwo">
                    Register
            </span>
            </div>
        </div>
        </div>
    )
}

export default NavBar;