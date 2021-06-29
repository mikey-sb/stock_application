import React from 'react'
import '../style/nav_bar.css'
import '../style/main.css'
import {Link} from 'react-router-dom'
import PriceTicker from './PriceTicker'
import stocks_logo from '../img/stocks_logo.png'


const NavBar = ({yahooStock}) => {

    // console.log({allStock})
    return (
        <>
        <div className="nav-wrapper">
        <div className="logo-container">
            <img src={stocks_logo} alt="company logo" width='100px'></img>         
        </div>

        <div className="nav-container">      
            <ul className="nav-ul">
                <li>
                    <Link to="/">Home</Link>
                </li>             
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/stocks">Stocks</Link>
                </li>
            </ul>
        </div>
        </div>
        <div className="ticker-container-nav">

            {/* {yahooStock ? <PriceTicker yahooStock={yahooStock}/> : null} */}
        
        </div>
        </>
    )
}

export default NavBar