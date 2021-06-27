import { useState } from "react"


const BuyStockForm = ({selectedStockInfo}) => {

    const [amountOfShares, setAmountOfShares] = useState(1)

    const objectKeys = Object.keys(selectedStockInfo["Time Series (5min)"])
    const firstKey = objectKeys[0]

    const getPrice = () => {
        const stockOpen = selectedStockInfo["Time Series (5min)"][firstKey]["1. open"]
        return stockOpen * amountOfShares

        
        console.log(stockOpen)
    }

    const handleSharesAmountChange = (event) => {
        console.log(event)
        setAmountOfShares(event.target.value)
    }

    return (
        <>
            <form>
                <label>{`Stock: ${selectedStockInfo["Meta Data"]["2. Symbol"]}`}</label>
                <br></br>
                <label>{`Price: $${getPrice()}`}</label>
                <br></br>
                <label>Number of shares: </label>
                <input type="number" name="stockAmount" onChange={handleSharesAmountChange} required/>
                <br></br>
                <input type="submit" name="buy" value="Buy"/>
            </form>
        </>
    )

}

export default BuyStockForm