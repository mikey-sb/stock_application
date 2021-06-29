import React from 'react'
import {render} from 'react-dom'
import HighCharts from 'highcharts/highstock';
import PieChart from 'highcharts-react-official'
import { all } from 'proxy-addr';

const ProfilePie = ({allOwnedStock}) => {

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
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
              }
            }
          },
        series: [
          {
            colorByPoint: true,
            data: [
              {
                name: "IBM",  
                y: 2000
              },
              {
                  name: "TSLA",
                y: 20000
              }
            ]
          }
        ]
      };

    const render = () => {
        return (
            <div>
                <PieChart highCharts={HighCharts} options={options} />
            </div>
        )
    }
      


    return (
        <div>
            <h1>Pie Chart</h1>
            <p>{render()}</p>
        </div>
    )
}

export default ProfilePie

