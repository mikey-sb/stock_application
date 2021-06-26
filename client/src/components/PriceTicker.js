import React from 'react'

const PriceTicker = ({allStock}) => {
    return (
        <>
        
        <div className="ticker-container">
            <ul>
                <li>{allStock["Meta Data"]["2. Symbol"]}</li>
                <li>{allStock["Time Series (5min)"]["2021-06-25 19:50:00"]["4. close"]}</li>
            </ul>
            <ul>
                <li>{allStock["Meta Data"]["2. Symbol"]}</li>
                <li>{allStock["Time Series (5min)"]["2021-06-25 19:50:00"]["4. close"]}</li>
            </ul>
            <ul>
                <li>{allStock["Meta Data"]["2. Symbol"]}</li>
                <li>{allStock["Time Series (5min)"]["2021-06-25 19:50:00"]["4. close"]}</li>
            </ul>
            <ul>
                <li>{allStock["Meta Data"]["2. Symbol"]}</li>
                <li>{allStock["Time Series (5min)"]["2021-06-25 19:50:00"]["4. close"]}</li>
            </ul>
            <ul>
                <li>{allStock["Meta Data"]["2. Symbol"]}</li>
                <li>{allStock["Time Series (5min)"]["2021-06-25 19:50:00"]["4. close"]}</li>
            </ul>
            <ul>
                <li>{allStock["Meta Data"]["2. Symbol"]}</li>
                <li>{allStock["Time Series (5min)"]["2021-06-25 19:50:00"]["4. close"]}</li>
            </ul>
        </div>
        </>
    )
}

export default PriceTicker
