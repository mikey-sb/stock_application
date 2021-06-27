import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import SearchDisplay from '../components/SearchDisplay'
import CandleStickChart from '../components/CandleStickChart'
import StockGainer from '../components/StockGainer'
import {useState} from 'react'

const Stocks = ({selectedStock, setSelectedStock, selectedStockInfo, yahooStock}) => {

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


     return (
        <div>
           
                <>
                    <SearchBar setSelectedStock={setSelectedStock}/>
                    
                    {renderStockInfo()}

                    {yahooStock ? <StockGainer yahooStock={yahooStock}/> : null}
                </>
                
            
        </div>
     )
}

export default Stocks
