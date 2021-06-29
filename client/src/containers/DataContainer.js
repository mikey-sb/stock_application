import React, {useState, useEffect} from 'react'

const DataContainer = () => {

    const [allStock, setAllStock] = useState(null);


    const getStock = () => {
            fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo')
            .then(res => res.json())
            .then(data =>setAllStock(data))
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getStock()
    }, [])

    return (
        <>
            <div className="data-container">
            <ul>
                <li>{allStock ? allStock["Meta Data"]["1. Information"] : null}</li>
                <li>{allStock ? allStock["Meta Data"]["2. Symbol"] : null}</li>
            </ul>
            </div>
        </>
    )
}

export default DataContainer