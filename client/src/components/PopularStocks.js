import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import "../style/stocks.css"

const PopularStocks = ({yahooStock}) => {

    const allYahooStocks = yahooStock.finance.result[0].quotes.map((quote, index) => {

    return (
        <>
        <div className="pop-wrapper">
            <ul key={index} className="popular-ul">
                <li className="pop-symbol">{quote.symbol}</li>
                <li className="pop-name">{quote.shortName}</li>
                <li className="pop-price">${quote.regularMarketPrice}</li>
            </ul>
            <ul className="pop-price-change-container">
                <li className={quote.regularMarketChangePercent > 0 ? 
                    "pop-change-li, change-li-positive" 
                    : "pop-change-li, change-li-negative"}>
                    {Number(quote.regularMarketChangePercent).toFixed(2)}%
                </li>
                    {quote.regularMarketChangePercent > 0 ?
                        <li className="pop-change-symbol, change-li-positive">
                            <FaArrowUp />
                        </li> 
                        : <li className="pop-change-symbol, change-li-negative">
                            <FaArrowDown />
                        </li>}     
            </ul>

        </div>
        <div className="pop-span"></div>

        
        </>
    )
    })
    
    return (
        <div>
            {allYahooStocks}
        </div>
    )
}

export default PopularStocks
