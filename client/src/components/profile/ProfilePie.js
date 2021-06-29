import React from 'react'
import HighCharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official'
import { all } from 'proxy-addr';

const ProfilePie = ({allOwnedStock, ownedStocks}) => {

    // var output = ownedStocks.map((stock) => {
    //     stock.reduce((sameStock, stock) => {
    //         return sameStock + stock.stock

    //     })
    // })
    // console.log(ownedStocks)

    const options = {
        chart: {
          type: "pie"
        },
        title: {
            text: "Portfolio"
        },
        plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: $. {point.y:.1f}'
              }
            }
          },
        series: [
          {
            colorByPoint: true,
            data: ownedStocks.map((stock) => {
                return {name: stock.stock, y: Number(stock.buyPrice)}
            })
          }
        ]
      };



    return (
        <div>
            {/* <h1>Pie Chart</h1> */}
            <div>
                <PieChart highCharts={HighCharts} options={options} /> 
            </div>
        </div>
    )
}

export default ProfilePie

