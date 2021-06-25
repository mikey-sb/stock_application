import React from 'react'
import SearchBar from '../components/SearchBar'
import SearchDisplay from '../components/SearchDisplay'
import {useState} from 'react'

const Stocks = ({selectedStock, setSelectedStock, viewSelectedStock}) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    

    
    const handleStockChange = function(e) {
        e.preventDefault();
        setSelectedStock(e.target[0].value);
        setIsSubmitted(true);
        
     }
    
  console.log({viewSelectedStock})

    // const isFormSubmitted = isSubmitted

     return (

        <div>
            {isSubmitted
            ? <SearchBar handleStockChange={handleStockChange}/>
            : <><SearchBar handleStockChange={handleStockChange}/>
            <SearchDisplay viewSelectedStock={viewSelectedStock}/></>}
        </div>

     )

}

export default Stocks
