import React, {useState, useEffect} from 'react'
import { updateStock } from '../../SharesServices';
import {postCash, getWallet, updateWallet} from '../../WalletServices'

const ProfileWallet = ({ownedStocks, setWallet, wallet}) => {

    const [inputNumber, setInputNumber] = useState(null)

    const getPortfolioTotal = () => {
        const portfolioValue = ownedStocks.reduce((totalValue, stock) => {

            return totalValue + Number(stock.buyPrice)
        }, 0)
        
        return portfolioValue.toFixed(2)
    }

    const deposit = () => {
        const copyTotal = {...wallet}
        copyTotal.total_cash += Number(inputNumber)
        setWallet(copyTotal)
    }

    const withdraw = () => {
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
            <input type="number" onChange={handleNumberInput} className="wallet-input" placeholder=""/>
            <br></br>
            <button onClick={() => deposit()} className="deposit-button">
                Deposit
            </button>
            <button onClick={() => withdraw()} className="withdraw-button">
                Withdraw
            </button>
        <p className="wallet-total-cash">Total Cash: ${wallet.total_cash.toFixed(2)}</p>
        <p>Portfolio Value: ${getPortfolioTotal()}</p>
        {/* <p>Portfolio Value: {wallet.portfolio_value[(wallet.portfolio_value.length - 1)]}</p> */}
        </form>
    )
}

export default ProfileWallet