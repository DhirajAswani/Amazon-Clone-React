import React from 'react'
import logo from './logo.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <div className='header'>
                <Link to="/">
                    <img className='header_logo' src={logo} />
                </Link>
            
                <div className='header_search'>
                    <input className='header_searchInput' type='text' />
                    <SearchIcon className="header_searchIcon"/>
                </div>
                <div className='header_nav'>
                    <div className='header_option'>
                        <span className='header_OptionLineOne'>Hello</span>
                        <span className="header_OptionLineTwo">Sign In</span>
                    </div>
                    <div className='header_option'>
                        <span className='header_OptionLineOne'>Returns </span>
                        <span className="header_OptionLineTwo">& Orders</span>
                    </div>
                    <div className='header_option'>
                        <span className='header_OptionLineOne'>Your</span>
                        <span className="header_OptionLineTwo">Prime</span>
                    </div>
                    <Link to="/checkout">
                        <div className="header_OptionBasket">
                            <ShoppingCartIcon/>
                            <span className="header_OptionLineTwo header_basketCount">0</span>
                        </div>   
                    </Link>                              
                </div>
            </div>
        </div>  
    )
}

export default Header
