import React, {useState, useEffect} from 'react'
import HighCharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
const StockChart = ({allStock}) => {
   
    const options = {
        title: {
            text: `${allStock["Meta Data"]["2. Symbol"]}`
          },
        
        series: [{
            name: 'Profit',
            data: []
        }]
    }
    const chartTitle = {
        text: 'Portfolio'
    }
    const setChartOptions = () => {
        if(allStock){
            options["series"][0]["name"] = allStock["Meta Data"]["2. Symbol"]
            for(let banana in allStock["Time Series (5min)"]){
                let pricePoint = allStock["Time Series (5min)"][banana]["1. open"]
                options["series"][0]["data"].push(Number(pricePoint))
            }
            console.log(options)
        }
    }
    const renderChart = () => {
        if(allStock){
            setChartOptions()
            return <HighchartsReact highcharts={HighCharts} options={options} title={chartTitle}/>
        }
    }
    // console.log(allStock["Time Series (5min)"])
    return (
        <>
            <div className="data-container">
            <ul>
                <li>{allStock ? allStock["Meta Data"]["2. Symbol"] : null}</li>
                <li>{allStock ? allStock["Time Series (5min)"]["2021-06-23 20:00:00"]["1. open"] : null}</li>
            </ul>
            {renderChart()}
            </div>
        </>
    )
}
export default StockChart