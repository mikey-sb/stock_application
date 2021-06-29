import React from 'react'
import HighCharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official'

const WalletPie = ({wallet}) => {


    const temp = Number(wallet.total_cash)
    const temp2 = Number(wallet.portfolio_value[(wallet.portfolio_value.length-1)])

// (wallet.portfolio_value.length-1)
// const portVal = wallet.portfolio_value[(wallet.portfolio_value.length-1)]

    
    const options = {
        chart: {
          type: "pie"
        },
        title: {
            text: "Wallet"
        },
        plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<p>{point.name}</p>: $. {point.y:.1f}'
              }
            }
          },
          series: [
            {
              data: [
                {
                  name: "Wallet" , 
                  y: temp
                },
                {
                  name: "Portfolio Value",  
                  y: temp2
                }
              ]
            }
          ]
      };

    return (
        <div>
            {/* <h1>wallet pie</h1> */}
            <PieChart HighCharts={HighCharts} options={options} />
        </div>
    )
}

export default WalletPie
