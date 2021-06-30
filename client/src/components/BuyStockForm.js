import { useState } from "react"
import { postStock } from "../SharesServices"
import { updateWallet } from "../WalletServices"
import "../style/stock-show.css"
const BuyStockForm = ({selectedStockInfo, updateBoughtStocks, boughtStockRecord, wallet, setWallet}) => {
    const [amountOfShares, setAmountOfShares] = useState(1)
    const [isLoaded, setIsLoaded] = useState(false)
    const objectKeys = Object.keys(selectedStockInfo["Time Series (5min)"])
    const firstKey = objectKeys[0]
    const getPrice = () => {
        const stockOpen = selectedStockInfo["Time Series (5min)"][firstKey]["1. open"]
        return stockOpen * amountOfShares
    }
    const handleSharesAmountChange = (event) => {
        setAmountOfShares(event.target.value)
    }
    const updateWalletFunction = (priceOfBuy) => {
        const copyWallet = {...wallet}
        console.log(copyWallet)
        copyWallet.total_cash -= priceOfBuy
        console.log(copyWallet.portfolio_value)
        const previousPortfolioValue = wallet.portfolio_value[(wallet.portfolio_value.length-1)]
        const newPortValue = previousPortfolioValue + priceOfBuy
        copyWallet.portfolio_value.push(newPortValue)
        return copyWallet
    }
    const handleBuySubmit = (event) => {
        event.preventDefault()
        setIsLoaded(true)
        const nameOfStock = event.target[0]["form"][0]["value"]
        const priceOfBuy = Number(event.target[0]["form"][1]["value"])
        const numOfStock = Number(event.target[0]["form"][2]["value"])
        const singleStockPrice = Number(event.target[0]["form"][3]["value"])
        const purchaseRecord = {
            "stock": nameOfStock,
            "buyPrice": priceOfBuy,
            "numberOfShares": numOfStock,
            "singlePrice": singleStockPrice
        }
        updateBoughtStocks(purchaseRecord)
        postStock(purchaseRecord)
        const updatedWallet = updateWalletFunction(priceOfBuy)
        console.log(updatedWallet)
        setWallet(updatedWallet)
        const copyWallet = {...updatedWallet}
        delete copyWallet._id
        updateWallet(wallet._id, copyWallet)
        .then(result => console.log(result))
        
    }
    return (
        <>
            <form onSubmit={handleBuySubmit} className="form-form">
                <label className="form-label">{`${selectedStockInfo["Meta Data"]["2. Symbol"]}`}</label>
                <input type="hidden" name="stockName" value={selectedStockInfo["Meta Data"]["2. Symbol"]}></input>
                <br></br>
                <label className = 'buy-amount'>{`Price: $${getPrice().toFixed(2)}`}</label>
                <br></br>
                <label className = 'buy-amount'>Wallet: ${wallet.total_cash.toFixed(2)}</label>
                <input type="hidden" name="amountPrice" value={getPrice()} className = "buy-amount"></input>
                <br></br>
                <label>Shares: </label><br></br>
                <input className = "buy-amount" type="number" name="amountStock" onChange={handleSharesAmountChange} className="stock-buy-input"required/>
                <input className = "buy-amount" type="hidden" name="singlePrice" value={selectedStockInfo["Time Series (5min)"][firstKey]["1. open"]}></input>
                <br></br>
                <input type="submit" name="buy" value="BUY" className="button"/>
                {isLoaded ? 
                <div class="main">
            <div class="loader active">
    <div class="check active">
      <span class="check-one"></span>
      <span class="check-two"></span>
    </div>
  </div>
  </div> : null}
            </form>
        </>
    )
}
export default BuyStockForm