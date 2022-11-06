import React from 'react'
import logo from "./images/logoBlack.png"
import "./NavBar.css";
import {Link} from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
function NavBar() {
return (

        <div className="navbar">
            <a href='./'>

                <img src={logo} className="header_logo" alt=''/>
            
             </a>

            
            <div className="header_nav">
            <div className="header_option">
        
  
        <Link to={Login}>
  
  {/*
  */}          

                <span
                className="header_optionLineOne">
                    Login
                </span>
  
            </Link>
           
            
  
            <Link to={Register}>
       

                <span
                className="header_optionLineTwo">
                    Register
            </span>
  
            </Link>
        
            </div>
{         /*
            <Link to="/checkout">
            <div className="header_shoppingBasket">
                <ShoppingBasketIcon/>


                <span className="header_optionLineOne header_shoppingBasket">
                        {basket?.length}
                </span>
            </div>
        </Link>
*/}
        </div>
    
        </div>
    
  )
}

export default NavBar;