import React from 'react'

const SearchDisplay = ({selectedStockInfo, selectedStock}) => {

const renderSelectedStockInfo = () => {
    if("Meta Data" in selectedStockInfo){
        const objectKeys = Object.keys(selectedStockInfo["Time Series (5min)"])
        const firstKey = objectKeys[0]
        
        return (
            <>
        <li>{selectedStockInfo["Meta Data"]["2. Symbol"]}</li>
        <li>{selectedStockInfo["Time Series (5min)"][firstKey]["1. open"]}</li>
        </>
        )
    }
}

    return (
        <div>
            <ul>
                {renderSelectedStockInfo()}
            </ul>
        </div>
    )
}

export default SearchDisplay
