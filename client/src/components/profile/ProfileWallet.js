import React, {useState, useEffect} from 'react'
import { updateStock } from '../../SharesServices';
import {postCash, getCash, updateCash} from '../../WalletServices'

const ProfileWallet = ({ownedStocks}) => {

    const [total, setTotal] = useState(0);
    const [inputNumber, setInputNumber] = useState(null)

    useEffect(() => {
        getCash()
        .then((total) => {
            setTotal(total[0])

        })
    }, [])

    const getPortfolioTotal = () => {
        const portfolioValue = ownedStocks.reduce((totalValue, stock) => {

            return totalValue + Number(stock.buyPrice)
            
        }, 0)
        
        return portfolioValue.toFixed(2)
    }

    const deposit = () => {
        const copyTotal = {...total}
        copyTotal.total_cash += Number(inputNumber)
        setTotal(copyTotal)
    }

    const withdraw = () => {
        const copyTotal = {...total}
        copyTotal.total_cash -= Number(inputNumber)
        setTotal(copyTotal)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault()
        const copyTotal = {
            total_cash: total.total_cash, 
            profit: total.profit
        }
        updateCash(total._id, copyTotal).then((data) => {
            // addCash(data)
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
        <p>Total Cash: ${total.total_cash}</p>
        <p>Portfolio Value: ${getPortfolioTotal()}</p>
        </form>
    )
}

export default ProfileWallet
