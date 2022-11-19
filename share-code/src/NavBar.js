import React from 'react'
import logo from "./images/logoBlack.png"
import "./NavBar.css";
import  {BrowserRouter as Router,Routes, Route} from  "react-router-dom";
import App from "./App";
function NavBar() {
    return(
        <div className="navbar">
        {/*
<Router>
<Routes>
            <Route path={App} element={
            <img src={logo} className="header_logo" alt=''/>
        } />
        <Route path={Login} element={
            <span
            className="header_optionLineOne">
            Login
            </span>
                } />
            <Route path={Register} element={
            <span
            className="header_optionLineTwo">
                Register
        </span>

                } />
            </Routes>
        </Router>
        */}
                <img src={logo} className="header_logo" alt=''/>
            <div className="header_nav">
            <div className="header_option">
                <span
                className="header_optionLineOne" >
                    Login
                </span>
                <span
                className="header_optionLineTwo" >
                    Register
            </span>
            </div>
        </div>

        </div>

    )
}

export default NavBar;