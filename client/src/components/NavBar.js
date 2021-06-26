import React from 'react'
import '../style/nav_bar.css'
import '../style/main.css'
import {Link} from 'react-router-dom'
import PriceTicker from './PriceTicker'



const NavBar = ({allStock}) => {

    // console.log({allStock})
    return (
        <>
        
        
        <div className="nav-wrapper">
        <div className="logo-container">
           <h3>Stock App</h3>       
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
                <li>
              
                </li>
            </ul>
        </div>
        </div>
        <div className="ticker-container-nav">
        {/* <PriceTicker allStock={allStock}/> */}
        
        </div>
      
        </>
    )
}

export default NavBar


  


