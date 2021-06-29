import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
import { IconContext } from "react-icons";
import "../style/ticker.css"

const PriceTicker = ({yahooStock}) => {

    const allYahooStocks = yahooStock.finance.result[0].quotes.map((quote, index) => {
        return (
            <>
            <ul key={index} className="ticker-ul">
                {/* <li>Company: {quote.shortName}</li> */}
                <li className="ticker-symbol">{quote.symbol}:</li>
                <li className="ticker-price">${quote.regularMarketPrice}</li>
                <li className={quote.regularMarketChangePercent > 0 ? 
                    "change-li, change-li-positive" 
                    : "change-li, change-li-negative"}>
                    {Number(quote.regularMarketChangePercent).toFixed(2)}%
                </li>

                {quote.regularMarketChangePercent > 0 ?
                    <li className="change-li-positive">
                        <FaArrowUp />
                    </li> 
                    : <li className="change-li-negative">
                        <FaArrowDown />
                    </li>}     
            </ul>
            </>
        )
        })
    

        // console?.log(yahooStock)
    return (
            <div className="ticker-wrapper">
                <div className="ticker1-container">
                    {allYahooStocks}
                </div>
                <div className="ticker2-container">
                    {allYahooStocks}
                </div>
            </div> 

    )
}

export default PriceTicker
