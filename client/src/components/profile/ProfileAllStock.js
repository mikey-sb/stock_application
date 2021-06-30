import React, {useEffect, useState} from 'react'
import { getStocks } from '../../SharesServices'

const ProfileAllStock = ({boughtStockRecord, ownedStocks}) => {

    // console.log(ownedStocks)

    const renderStocks = ownedStocks.map(stock => {
        return (
            <>
            <div key={stock._id} className="th-container">
                <p classname="th-stock">Stock: {stock.stock}</p>
                <p className="th-buy-price">Buy Price: ${stock.buyPrice.toFixed(2)}</p>
                <p className="th-shares">Shares: {stock.numberOfShares}</p>
                <p className="th-price">Price: ${stock.singlePrice}</p>
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
