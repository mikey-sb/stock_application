import React, {useEffect, useState} from 'react'
import { getStocks } from '../../SharesServices'

const ProfileAllStock = ({boughtStockRecord, ownedStocks}) => {

    // console.log(ownedStocks)

    const renderStocks = ownedStocks.map(stock => {
        return (
            <>
            <div key={stock._id} className="th-container">
                <p>Stock: {stock.stock}</p>
                <p className="th-buy-price">Buy Price: ${stock.buyPrice}</p>
                <p>Shares: {stock.numberOfShares}</p>
                <p>Price: ${stock.singlePrice}</p>
            </div>
            <div className="history-span"></div>
            </>

        )
    })

    return (
        <div>
            <h1 className="header">TRANSACTION HISTORY</h1>
            <ul>
                {renderStocks}
            </ul>
        </div>
    )
}

export default ProfileAllStock
