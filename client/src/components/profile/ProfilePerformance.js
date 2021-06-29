import React from 'react'

const ProfilePerformance = ({ownedStocks}) => {

    // console.log(ownedStocks)


    const uniqueStocks = ownedStocks.filter((stock) => {
        return ownedStocks.indexOf(stock) === ownedStocks.lastIndexOf(stock)
    })
    console.log(uniqueStocks)


    return (
        <div>
            <h1>Profit/Loss Graph</h1>


        </div>
    )
}

export default ProfilePerformance
