import React, {useState, useEffect} from 'react'
import { updateStock } from '../../SharesServices';
import {postCash, getCash, updateCash} from '../../WalletServices'

const ProfileWallet = ({ownedStocks, setWallet, wallet}) => {

    const [inputNumber, setInputNumber] = useState(null)

    const getPortfolioTotal = () => {
        const portfolioValue = ownedStocks.reduce((totalValue, stock) => {

            return totalValue + Number(stock.buyPrice)
            
        }, 0)

        console.log(portfolioValue)
        
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
        updateCash(wallet._id, copyTotal).then((data) => {
            }
        )
    }

    const handleNumberInput = (event) => {
        setInputNumber(event.target.value)
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <h1>WALLET</h1>
            <input type="number" onChange={handleNumberInput} />

            <button onClick={() => deposit()}>
          Deposit
            </button>
            <button onClick={() => withdraw()}>Withdraw</button>
        <p>Total Cash: ${wallet.total_cash}</p>
        <p>Portfolio Value: ${getPortfolioTotal()}</p>
        </form>
    )
}

export default ProfileWallet