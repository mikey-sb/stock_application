import React, {useState, useEffect} from 'react'
import { updateCash, postCash, getCash } from '../../WalletServices';

const Wallet = () => {

    // const [inputNumber, setInputNumber] = useState(null)
    const [totalCash, setTotalCash] = useState(null)



    
    // const [stock, setStock] = useState("")
    // const [PurchasedPrice, setPurchasedPrice] = useState(0)
    // const [QuantityPurchased, setQuantityPurchased] = useState(0)

    useEffect(() => {
        getCash()
        .then((totalCash) => {
            setTotalCash(totalCash)
        })
    }, [])    
    console.log(totalCash)




    // const deposit = () => {
    //     console.log(totalCash)

    //     setTotalCash(totalCash + Number(inputNumber))
    // }

    // const withdraw = () => {
    //     setTotalCash(totalCash - Number(inputNumber))
    // }

    // const addCash = (cash) => {
    //     console.log(totalCash)
    //     setTotalCash([...totalCash, cash])
    // }

    // const handleOnSubmit = (event) => {
    //     event.preventDefault()
    //     console.log()
    //     postCash(totalCash).then((data) => {
    //         addCash(data)
    //         }
    //     )
    }
    return (
        <form onSubmit={handleOnSubmit} method="post">
            <input type="number" name="total_cash" onChange={event => {setInputNumber(event.target.value)}} />

            <button onClick={() => deposit()}>
          Submit
            </button>
            <button onClick={() => withdraw()}>Withdraw</button>
        <p>Total: {totalCash.total_cash}</p>

        {/* <p id="output"> 
         {output}
        </p> */}
        </form>
    )
}

export default Wallet
