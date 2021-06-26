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


     return (
        <div>
           
                <>
                    <SearchBar handleStockChange={handleStockChange}/>
                    
                    {isSubmitted ? <SearchDisplay viewSelectedStock={viewSelectedStock}/> : null }
                </>
                
            
        </div>
     )
}

export default Stocks
