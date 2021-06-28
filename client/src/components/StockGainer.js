import React from 'react'

const StockGainer = ({yahooStock}) => {



    let allYahooStocks = yahooStock.finance.result[0].quotes.map((quote, index) => {
        return (
            <ul key={index}>
                <li>Company: {quote.shortName}</li>
                <li>Symbol: {quote.symbol}</li>
                <li>Market Price: ${quote.regularMarketPrice}</li>
                <li>24hr Change: {Number(quote.regularMarketChangePercent).toFixed(2)}%</li>
            </ul>
        )
        })
    

        //  console?.log(yahooStock)
    return (
        <div>
        <h1>Trending Stocks</h1> 
            {allYahooStocks}
        </div>
    )
}


export default StockGainer
