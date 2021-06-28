import React, {useEffect, useState} from 'react'
import { getStocks } from '../../SharesServices'

const ProfileAllStock = ({boughtStockRecord}) => {

    const [stuff, setStuff] = useState([])

    useEffect(() => {
        getStocks()
        .then((stuff) => {
            console.log(stuff)
            setStuff(stuff)
        })
    }, [])

    const renderStuff = stuff.map(stock => {
        console.log(stock.stock)
        return (
            <>
            <p>Stock: {stock.stock}</p>
            <p>Total Buy Price: {stock.buyPrice}</p>
            <p>Number of Shares: {stock.numberOfShares}</p>
            <p>Stock Price: {stock.singlePrice}</p>
            <br></br>
            </>
        )
    })

    

    return (
        <div>
            <h1>ALL STOCKS OWNED</h1>
            <ul>
                {renderStuff}
            </ul>
        </div>
    )
}

export default ProfileAllStock
