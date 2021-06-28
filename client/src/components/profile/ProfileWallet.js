import React, {useState, useEffect} from 'react'
import { updateStock } from '../../SharesServices';
import {postCash, getCash, updateCash} from '../../WalletServices'

const ProfileWallet = () => {

    const [total, setTotal] = useState(0);
    const [inputNumber, setInputNumber] = useState(null)
    // const [stock, setStock] = useState("")
    // const [PurchasedPrice, setPurchasedPrice] = useState(0)
    // const [QuantityPurchased, setQuantityPurchased] = useState(0)

    useEffect(() => {
        getCash()
        .then((total) => {
            setTotal(total[0])
            console.log("asdasd")

        })
    }, [])
    
    // const addCash = (total) => {
    //     setTotal(total)  //add cash should hold on the whole object not a number

    // }


    const deposit = () => {
        // console.log(total)
        const copyTotal = {...total}
        copyTotal.total_cash += Number(inputNumber)
        setTotal(copyTotal)
    }

    const withdraw = () => {
        const copyTotal = {...total}
        copyTotal.total_cash -= Number(inputNumber)
        setTotal(copyTotal)
    }
    
    // const walletItem = total.map((cash) => {
    //     return <p>{cash.total_cash}</p>
    // })


    const handleOnSubmit = (event) => {
        event.preventDefault()
        const copyTotal = {
            total_cash: total.total_cash, 
            profit: total.profit
        }
        updateCash(total._id, copyTotal).then((data) => {
            // addCash(data)
            console.log(data)
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
        <p>Total: {total.total_cash}</p>
        </form>
    )
}

export default ProfileWallet
