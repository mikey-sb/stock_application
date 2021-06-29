import React from 'react'
import CandleStickChart from './CandleStickChart'


const SearchDisplay = ({selectedStockInfo, selectedStock, handleAdd}) => {

const renderSelectedStockInfo = () => {
    
    if("Meta Data" in selectedStockInfo){
        const objectKeys = Object.keys(selectedStockInfo["Time Series (5min)"])
        const firstKey = objectKeys[0]
        
        
        return (
            <ul className="display-stock-ul">
                {/* <li>{`Stock: ${selectedStockInfo["Meta Data"]["2. Symbol"]}`}</li> */}
                <li className="display-stock-price">{`$${selectedStockInfo["Time Series (5min)"][firstKey]["1. open"]}`}
                </li>
                <li>
                    <div className="buy-button-container">
                        <button onClick={handleAdd} className="buy-button">
                            Buy Stock
                        </button>
                    </div>         
                </li>

            </ul>
        )
    }
}

    return (
        <div>
            
                {renderSelectedStockInfo()}
            
        </div>
    )
}

export default SearchDisplay
