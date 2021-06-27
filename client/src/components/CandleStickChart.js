import HighCharts, { chart } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';

const CandleStickChart = ({allStock}) => {


    let options = [];
    let chartTitle = "";
        

    if ("Meta Data" in allStock) {

        let time_series_array = Object.keys(allStock["Time Series (5min)"])
        // console.log(time_series_array)

        let data_array = Object.values(allStock["Time Series (5min)"])
        // console.log(data_array)

        let stockSymbol = Object.values(allStock["Meta Data"]["2. Symbol"])

                // split the data set into ohlc and volume
            var ohlc = [],
            volume = [],
            dataLength = time_series_array.length,
            // set the allowed units for data grouping
            groupingUnits = [[
                'min',                         // unit name
                [5, 10, 15, 30]                             // allowed multiples
            ],
            ['hour', 
                [1, 4]
            ],
            ['day',
                [1, 3]
            ],
            ['week', [1, 2]]
            ]

            

        for (let i=0; i < dataLength; i += 1) {
            ohlc.push([
                time_series_array[i], // the date
                Number(data_array[i]['1. open']), // open
                Number(data_array[i]['2. high']), // high
                Number(data_array[i]['3. low']), // low
                Number(data_array[i]['4. close']), // close
            ]);

            

            volume.push([
                time_series_array[i], // the date
                Number(data_array[i]['5. volume']), // the volume
            ]);
        }

        // console.log('DataArray:', ohlc)
    

        chartTitle = {
            text: stockSymbol
        }
        // create the chart
        options = {

            rangeSelector: {
                selected: 1
            },

            title: {
                text: stockSymbol
            },

            yAxis: [{
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'OHLC'
                },
                height: '60%',
                lineWidth: 2,
                resize: {
                    enabled: true
                }
            }, {
                labels: {
                    align: 'right',
                    x: -3
                },
                title: {
                    text: 'Volume'
                },
                top: '65%',
                height: '35%',
                offset: 0,
                lineWidth: 2
            }],

            tooltip: {
                split: true
            },

            series: [{
                type: 'candlestick',
                name: 'AAPL',
                data: ohlc,
                dataGrouping: {
                    units: groupingUnits
                }
            }, {
                type: 'column',
                name: 'Volume',
                data: volume,
                yAxis: 1,
                dataGrouping: {
                    units: groupingUnits
                }
            }]
        };
    };

    

    

    const renderChart = () => {
        if("Meta Data" in allStock){
             return <HighchartsReact highcharts={HighCharts} constructorType={"stockChart"} options={options} title={chartTitle}/>
         }
    }
              
    return (
        <div>
            {renderChart()}
        </div>
    )
}

export default CandleStickChart
