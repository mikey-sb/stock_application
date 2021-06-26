import React, { useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import SearchDisplay from '../components/SearchDisplay'
import CandleStickChart from '../components/CandleStickChart'
import {useState} from 'react'

const Stocks = ({selectedStock, setSelectedStock, setSelectedStockInfo, selectedStockInfo}) => {

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
                </>
                
            
        </div>
     )
}

export default Stocks
