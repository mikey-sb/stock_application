import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import SearchDisplay from '../components/SearchDisplay'
import CandleStickChart from '../components/CandleStickChart'
import {useState} from 'react'
import BuyStockForm from '../components/BuyStockForm'

const Stocks = ({selectedStock, setSelectedStock, setSelectedStockInfo, selectedStockInfo}) => {

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
        console.log(buyButtonClicked)
        return(
            <>
            <BuyStockForm selectedStockInfo={selectedStockInfo}/>
            </>
        )
    }
}

     return (
        <div>
           
                <>
                    <SearchBar setSelectedStock={setSelectedStock}/>
                    {renderStockInfo()}
                    <button onClick={handleAdd}>Buy Stock</button>
                    {renderBuyForm()}
                </>
                
            
        </div>
     )
}

export default Stocks
