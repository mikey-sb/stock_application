import React from 'react'
import '../style/owned.css'

const OwnedStocks = ({allOwnedStocksOnce}) => {

    console?.log(allOwnedStocksOnce)

    const renderOwnedStocks = allOwnedStocksOnce.map(stock => {

    return (
       <>
            <div key={stock._id} className="th-container">
                <p classname="th-stock">Stock: {stock.stock}</p>
                <p className="th-buy-price">Total Value: ${stock.buyPrice.toFixed(2)}</p>
                <p className="th-shares">Shares: {stock.numberOfShares}</p>

            </div>

            <div className="history-span"></div>

            </>
    )
})

return (
    <div>
        <ul>
            {renderOwnedStocks}
        </ul>
    </div>
)

}

export default OwnedStocks
