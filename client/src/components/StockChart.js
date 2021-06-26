import React, {useState, useEffect} from 'react'
import HighCharts, { chart } from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
const StockChart = ({allStock}) => {
   
    const options = {
        title: {
            text: 'Portfolio Value'
          },
        xAxis: {
            categories: [],
            labels: {
                rotation: 90
            }
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

            let i = 0

            //Add all times to array, then go through and remove every n time to display on the x axis with enough space
            let tempTimeArray = []
            let tempValuesArray = []

            let reversedTimeSeries = Object.keys(allStock["Time Series (5min)"]).reverse();

            for(let key of reversedTimeSeries){
                let pricePoint = allStock["Time Series (5min)"][key]["1. open"]
                let timeAxis = key.substring(10, key.length-3)
                options["series"][0]["data"].push(Number(pricePoint))
                options["xAxis"]["categories"].push(timeAxis)
            }
            }
        }
    const renderChart = () => {
        if(allStock){
            setChartOptions()
            return <HighchartsReact highcharts={HighCharts} options={options} title={chartTitle}/>
        }
    }
    return (
        <>
            <div className="data-container">
            <ul>
                <li>{allStock ? allStock["Meta Data"]["2. Symbol"] : null}</li>
                {/* <li>{allStock ? allStock["Time Series (5min)"]["2021-06-23 20:00:00"]["1. open"] : null}</li> */}
            </ul>
            {renderChart()}
            </div>
        </>
    )
}
export default StockChart