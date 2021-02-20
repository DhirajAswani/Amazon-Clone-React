import React from 'react'
import logo from './logo.png'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';




function Header() {

    const[{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user)
        {
            auth.signOut();
        }
    }

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
                    <Link to={!user && '/login'}>
                        <div onClick={handleAuthentication} className='header_option'>
                        
                            <span className='header_OptionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                            <span className="header_OptionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                    </Link>
                    <Link to="/orders">
                        <div className='header_option'>
                            <span className='header_OptionLineOne'>Returns </span>
                            <span className="header_OptionLineTwo">& Orders</span>
                        </div>
                    </Link>
                    <div className='header_option'>
                        <span className='header_OptionLineOne'>Your</span>
                        <span className="header_OptionLineTwo">Prime</span>
                    </div>
                    <Link to="/checkout">
                        <div className="header_OptionBasket">
                            <ShoppingCartIcon/>
                            <span className="header_OptionLineTwo header_basketCount">{basket.length}</span>
                        </div>   
                    </Link>                              
                </div>
            </div>
        </div>  
    )
}

export default Header
