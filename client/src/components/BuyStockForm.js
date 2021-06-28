import { useState } from "react"
import { postStock } from "../SharesServices"
import { updateCash } from "../WalletServices"

const BuyStockForm = ({selectedStockInfo, updateBoughtStocks, boughtStockRecord, wallet, setWallet}) => {

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

    const updateWallet = (priceOfBuy) => {
        const copyWallet = {...wallet}
        console.log(copyWallet)
        copyWallet.total_cash -= priceOfBuy
        
        return copyWallet
    }

    const handleBuySubmit = (event) => {
        event.preventDefault()
        const nameOfStock = event.target[0]["form"][0]["value"]
        const priceOfBuy = Number(event.target[0]["form"][1]["value"])
        const numOfStock = event.target[0]["form"][2]["value"]
        const singleStockPrice = event.target[0]["form"][3]["value"]
        const purchaseRecord = {
            "stock": nameOfStock,
            "buyPrice": priceOfBuy,
            "numberOfShares": numOfStock,
            "singlePrice": singleStockPrice
        }
        updateBoughtStocks(purchaseRecord)
        postStock(purchaseRecord)
        const updatedWallet = updateWallet(priceOfBuy)
        setWallet(updateWallet)
        // updateCash(wallet._id, copyWallet)
        // .then(result => console.log(result))
        
    }

    return (
        <>
            <form onSubmit={handleBuySubmit}>
                <label>{`Stock: ${selectedStockInfo["Meta Data"]["2. Symbol"]}`}</label>
                <input type="hidden" name="stockName" value={selectedStockInfo["Meta Data"]["2. Symbol"]}></input>
                <br></br>
                <label>{`Price: $${getPrice()}`}</label>
                <br></br>
                <label>Wallet: ${wallet.total_cash}</label>
                <input type="hidden" name="amountPrice" value={getPrice()}></input>
                <br></br>
                <label>Number of shares: </label>
                <input type="number" name="amountStock" onChange={handleSharesAmountChange} required/>
                <input type="hidden" name="singlePrice" value={selectedStockInfo["Time Series (5min)"][firstKey]["1. open"]}></input>
                <br></br>
                <input type="submit" name="buy" value="Buy"/>
            </form>
        </>
    )

}

export default BuyStockForm