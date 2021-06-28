import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import SearchDisplay from '../components/SearchDisplay'
import CandleStickChart from '../components/CandleStickChart'
import StockGainer from '../components/StockGainer'
import {useState} from 'react'
import BuyStockForm from '../components/BuyStockForm'
import PopularStocks from '../components/PopularStocks'
import "../style/stocks.css"

const Stocks = ({selectedStock, setSelectedStock, setSelectedStockInfo, selectedStockInfo, updateBoughtStocks, yahooStock, boughtStockRecord}) => {

    const [buyButtonClicked, setBuyButtonClicked] = useState(false);

    useEffect(() => {
        renderStockInfo()
    }, [selectedStockInfo])

  const renderStockInfo = () => {
      if(selectedStockInfo){
        return (
                <>
                <SearchDisplay selectedStock={selectedStock} selectedStockInfo={selectedStockInfo}/>
                <CandleStickChart allStock={selectedStockInfo} />
                {selectedStockInfo ? <button onClick={handleAdd}>Buy Stock</button> : null}
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
            <BuyStockForm selectedStockInfo={selectedStockInfo} updateBoughtStocks={updateBoughtStocks} boughtStockRecord={boughtStockRecord}/>
            </>
        )
    }
}

     return (
        <div>
           
                <>
                <div className="search-container">
                    <SearchBar setSelectedStock={setSelectedStock}/>
                </div>
                <div className="render-info-container">
                    {renderStockInfo()}
                </div>
                <div className="buy-form-container">
                    {/* <button onClick={handleAdd}>Buy Stock</button> */}
                    {renderBuyForm()}
                </div>
                <div className="stocks-view-wrapper">
                    <div className="trending-container">
                        {/* {yahooStock ? <StockGainer yahooStock={yahooStock}/> : null} */}
                    </div>
                    <div className="popular-container">
                        {renderPopularStock()}
                    </div>
                </div>
                </>
                
            
        </div>
     )
}

export default Stocks
