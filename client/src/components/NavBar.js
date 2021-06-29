import React from 'react'
import '../style/nav_bar.css'
import '../style/main.css'
import {Link} from 'react-router-dom'
import PriceTicker from './PriceTicker'
import stocks_logo from '../img/stocks_logo.png'


const NavBar = ({yahooStock}) => {

    return (
        <>
        <div className="nav-wrapper">
        <div className="logo-container">
            <img src={stocks_logo} alt="company logo" width='100px'></img>         
        </div>

        <div className="nav-container">      
            <ul className="nav-ul">
                <li>
                    <Link to="/">HOME</Link>
                </li>             
                <li>
                    <Link to="/profile">PROFILE</Link>
                </li>
                <li>
                    <Link to="/stocks">STOCKS</Link>
                </li>
            </ul>
        </div>
        </div>
        <div className="ticker-container-nav">

            {yahooStock ? <PriceTicker yahooStock={yahooStock}/> : null}
        
        </div>
        <div className="nav-span"></div>
        </>
    )
}

export default NavBar