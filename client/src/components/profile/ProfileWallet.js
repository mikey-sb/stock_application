import React, {useState, useEffect} from 'react'
import {postCash, getCash, updateCash} from '../../WalletServices'

const ProfileWallet = () => {

    const [total, setTotal] = useState([]);
    const [inputNumber, setInputNumber] = useState(null)
    // const [stock, setStock] = useState("")
    // const [PurchasedPrice, setPurchasedPrice] = useState(0)
    // const [QuantityPurchased, setQuantityPurchased] = useState(0)

    
    const addCash = (total) => {
        setTotal(total)  //add cash should hold on the whole object not a number

    }


    const deposit = () => {
        console.log(total)

        setTotal(total + Number(inputNumber))
    }

    const withdraw = () => {
        setTotal(total - Number(inputNumber))
    }
    


    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log()
        postCash(total).then((data) => {
            addCash(data)
            }
        )
    }


    return (
        <form onSubmit={handleOnSubmit}>
            <h1>WALLET</h1>
            <input type="number" onChange={event => {setInputNumber(event.target.value)}} />

            <button onClick={() => deposit()}>
          Submit
            </button>
            <button onClick={() => withdraw()}>Withdraw</button>
        <p>Total: {total}</p>
        </form>
    )
}

export default ProfileWallet
