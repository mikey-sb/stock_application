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
    // const button = 
    //         document.addEventListener("DOMContentLoaded", function () {
    //         var btn = document.querySelector(".button"),
    //           loader = document.querySelector(".loader"),
    //           check = document.querySelector(".check");
          
    //         btn.addEventListener("click", function () {
    //           loader.classList.add("active");
    //         });
          
    //         loader.addEventListener("animationend", function () {
    //           check.classList.add("active");
    //         });
    //       }); 
    

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
            </div>
        <p className="wallet-total-cash">Total Cash: ${wallet.total_cash}</p>
        <p>Portfolio Value: ${getPortfolioTotal()}</p>
        {/* <p>Portfolio Value: {wallet.portfolio_value[(wallet.portfolio_value.length - 1)]}</p> */}
        </form>
    )
}

export default ProfileWallet