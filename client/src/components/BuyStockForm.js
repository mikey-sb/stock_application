import { useState } from "react"


const BuyStockForm = ({selectedStockInfo, updateBoughtStocks}) => {

    const [amountOfShares, setAmountOfShares] = useState(1)

    const objectKeys = Object.keys(selectedStockInfo["Time Series (5min)"])
    const firstKey = objectKeys[0]

    const getPrice = () => {
        const stockOpen = selectedStockInfo["Time Series (5min)"][firstKey]["1. open"]
        return stockOpen * amountOfShares
    }

    const handleSharesAmountChange = (event) => {
        setAmountOfShares(event.target.value)
    }

    const handleBuySubmit = (event) => {
        event.preventDefault()
        console.log(event)
        const nameOfStock = event.target[0]["form"][0]["value"]
        const priceOfBuy = event.target[0]["form"][1]["value"]
        const numOfStock = event.target[0]["form"][2]["value"]
        const purchaseRecord = {
            "stock": nameOfStock,
            "price": priceOfBuy,
            "amount": numOfStock
        }
        updateBoughtStocks(purchaseRecord)

    }

    return (
        <>
            <form onSubmit={handleBuySubmit}>
                <label>{`Stock: ${selectedStockInfo["Meta Data"]["2. Symbol"]}`}</label>
                <input type="hidden" name="stockName" value={selectedStockInfo["Meta Data"]["2. Symbol"]}></input>
                <br></br>
                <label>{`Price: $${getPrice()}`}</label>
                <input type="hidden" name="amountPrice" value={getPrice()}></input>
                <br></br>
                <label>Number of shares: </label>
                <input type="number" name="amountStock" onChange={handleSharesAmountChange} required/>
                <br></br>
                <input type="submit" name="buy" value="Buy"/>
            </form>
        </>
    )

}

export default BuyStockForm