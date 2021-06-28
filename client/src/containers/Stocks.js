import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import SearchDisplay from '../components/SearchDisplay'
import CandleStickChart from '../components/CandleStickChart'
import StockGainer from '../components/StockGainer'
import {useState} from 'react'
import BuyStockForm from '../components/BuyStockForm'

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
                    <SearchBar setSelectedStock={setSelectedStock}/>
                    {renderStockInfo()}
                    
                    {renderBuyForm()}

                    {yahooStock ? <StockGainer yahooStock={yahooStock}/> : null}
                </>
                
            
        </div>
     )
}

export default Stocks
