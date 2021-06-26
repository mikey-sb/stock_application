import React, {useState} from 'react'
import { updateStock, postStock } from '../../SharesServices';

const Wallet = ({allStock}) => {

    const [total, setTotal] = useState(null);
    const [inputNumber, setInputNumber] = useState(null)
    // const [stock, setStock] = useState("")
    // const [PurchasedPrice, setPurchasedPrice] = useState(0)
    // const [QuantityPurchased, setQuantityPurchased] = useState(0)

    



    const deposit = () => {
        console.log(total)

        setTotal(total + Number(inputNumber))
    }

    const withdraw = () => {
        setTotal(total - Number(inputNumber))
    }
    const addCash = (total) => {
        setTotal(total)  //add cash should hold on the whole object not a number

    }


    const handleOnSubmit = (event) => {
        event.preventDefault()
        console.log()
        postStock(allStock).then((data) => {
            addCash(data)
            }
        )
    }
    return (
        <form onSubmit={handleOnSubmit} method="post">
            <input type="number" name="total_cash" onChange={event => {setInputNumber(event.target.value)}} />

            <button onClick={() => deposit()}>
          Submit
            </button>
            <button onClick={() => withdraw()}>Withdraw</button>
        <p>Total: {total}</p>

        {/* <p id="output"> 
         {output}
        </p> */}
        </form>
    )
}

export default Wallet
