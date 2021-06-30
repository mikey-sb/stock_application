import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import SearchDisplay from '../components/SearchDisplay'
import CandleStickChart from '../components/CandleStickChart'
import {useState} from 'react'
import BuyStockForm from '../components/BuyStockForm'
import PopularStocks from '../components/PopularStocks'
import "../style/stocks.css"
import "../style/stock-show.css"

const Stocks = ({setWallet, selectedStock, setSelectedStock, setSelectedStockInfo, selectedStockInfo, updateBoughtStocks, yahooStock, boughtStockRecord, wallet}) => {

    const [buyButtonClicked, setBuyButtonClicked] = useState(false);

    useEffect(() => {
        renderStockInfo()
        }, [selectedStockInfo])

        

    const renderStockInfo = () => {
        if(selectedStockInfo){
            return (
                <>
                <div className='stock-display-container'>
                    <div className="candlestick-container">
                            <CandleStickChart 
                            allStock={selectedStockInfo} />
                        </div>
                    <div className="search-display-container">
                        <SearchDisplay 
                            selectedStock={selectedStock} 
                            selectedStockInfo={selectedStockInfo}
                            handleAdd={handleAdd}
                        
                        />
                    </div>
                    
                </div>
                    
                </>
            )
        }
    }

  const renderPopularStock = () => {
      if(yahooStock){
          return (
              <>
                <PopularStocks yahooStock={yahooStock}/>  
              </>
          )
      }
  }

  const handleAdd = () => {
    if(buyButtonClicked === true){
        setBuyButtonClicked(false)
    }
    if(buyButtonClicked === false){
        setBuyButtonClicked(true)
    }       
}

  const renderBuyForm = () => {
    if(buyButtonClicked === true){
        // console.log(buyButtonClicked)
        return(
            <>
            <BuyStockForm setWallet={setWallet} wallet={wallet} selectedStockInfo={selectedStockInfo} updateBoughtStocks={updateBoughtStocks} boughtStockRecord={boughtStockRecord}/>
            </>
        )
    }
}

     return (
        <div>
           
                <>
                <h1 className="header">STOCKS</h1>
                <div className="search-container">
                    <SearchBar setSelectedStock={setSelectedStock}/>
                </div>


                <div className="buy-form-container" id="form">
                    {/* <button onClick={handleAdd}>Buy Stock</button> */}
                    {renderBuyForm()}
                </div>

                <div className="render-info-container">
                    {renderStockInfo()}
                </div>
                
                <div className="stocks-view-wrapper">
                    <div className="trending-container">
                        {/* {yahooStock ? <StockGainer yahooStock={yahooStock}/> : null} */}
                    </div>
                    <h1 className="pop-header">TRENDING STOCKS</h1>

                    <div className="popular-container">
                        {renderPopularStock()}
                    </div>
                </div>
                </>
                
            
        </div>
     )
}

export default Stocks
