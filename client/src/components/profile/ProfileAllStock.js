import React, {useEffect, useState} from 'react'
import { getStocks } from '../../SharesServices'

const ProfileAllStock = ({boughtStockRecord, ownedStocks}) => {

    // console.log(ownedStocks)

    const renderStocks = ownedStocks.map(stock => {
        return (
            <div key={stock._id}>
            <p>Stock: {stock.stock}</p>
            <p>Total Buy Price: ${stock.buyPrice}</p>
            <p>Number of Shares: {stock.numberOfShares}</p>
            <p>Stock Price: ${stock.singlePrice}</p>
            <br></br>
            </div>
        )
    })

    return (
        <div>
            <h1>ALL STOCKS OWNED</h1>
            <ul>
                {renderStocks}
            </ul>
        </div>
    )
}

export default ProfileAllStock
