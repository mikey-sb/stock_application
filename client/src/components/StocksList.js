import React from 'react'
import '../List.css'

const StocksList = ({ allStocks, getStocks}) => {

    const StocksCoins = allStocks.map((Stocks, index) => {
            
            return(
                <ul key={index}>
                    
                    <li></li>
    
                </ul>
                )
        })
       

    
    
    

    return (
        <>
        <div className="list-container">
            
        </div>
       
        
       </>
    )
}

export default StocksList
