import React, {useState, useEffect} from 'react'
import { updateStock } from '../../SharesServices';
import {postCash, getWallet, updateWallet} from '../../WalletServices'
const ProfileWallet = ({ownedStocks, setWallet, wallet}) => {
    const [inputNumber, setInputNumber] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const getPortfolioTotal = () => {
        const portfolioValue = ownedStocks.reduce((totalValue, stock) => {
            return totalValue + Number(stock.buyPrice)
        }, 0)
        return portfolioValue.toFixed(2)
    }
    const deposit = () => {
        setIsLoaded(true)
        const copyTotal = {...wallet}
        copyTotal.total_cash += Number(inputNumber)
        setWallet(copyTotal)
    }
    const withdraw = () => {
        setIsLoaded(true)
        const copyTotal = {...wallet}
        copyTotal.total_cash -= Number(inputNumber)
        setWallet(copyTotal)
    }
    const handleOnSubmit = (event) => {
        event.preventDefault()
        const copyTotal = {
            total_cash: wallet.total_cash, 
            profit: wallet.profit
        }
        updateWallet(wallet._id, copyTotal).then((data) => {
            }
        )
    }
    const handleNumberInput = (event) => {
        setInputNumber(event.target.value)
    }
    return (
        <form onSubmit={handleOnSubmit} className="wallet-form">
            <h1 className="header">WALLET</h1>
            <input type="number" min="0" onChange={handleNumberInput} className="wallet-input" placeholder=""/>
            <br></br>
            <div className="main1">
            <button onClick={() => deposit()} className="button">
                Deposit
            </button>
            <br></br>
            <button onClick={() => withdraw()} className="button">
                Withdraw
            </button>
            {isLoaded ? 
                <div class="main">
            <div class="loader active">
    <div class="check active">
      <span class="check-one"></span>
      <span class="check-two"></span>
    </div>
  </div>
  </div> : null}
            </div>
        <p className="wallet-total-cash">Total Cash: ${wallet.total_cash.toFixed(2)}</p>
        <p>Portfolio Value: ${getPortfolioTotal()}</p>
        {/* <p>Portfolio Value: {wallet.portfolio_value[(wallet.portfolio_value.length - 1)]}</p> */}
        </form>
    )
}
export default ProfileWallet