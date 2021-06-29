import HighCharts, { chart } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';

const CandleStickChart = ({allStock}) => {


    let options = [];
    let chartTitle = "";
        

    if ("Meta Data" in allStock) {

        let time_series_array = Object.keys(allStock["Time Series (5min)"])

        let data_array = Object.values(allStock["Time Series (5min)"])

        let stockSymbol = Object.values(allStock["Meta Data"]["2. Symbol"])
        let ssj = String(stockSymbol.join(''))


                // split the data set into ohlc and volume
            var ohlc = [],
            volume = [],
            dataLength = time_series_array.length,
            // set the allowed units for data grouping
            groupingUnits = [
            ['week',
                [1, 3]
            ],
            ['month', [1, 2]]
            ]

            

        for (let i=0; i < dataLength; i += 1) {

                let date = new Date(time_series_array[i]);
                let time_ms = date.getTime();
            ohlc.push([
                Number(time_ms), // the date
                Number(data_array[i]['1. open']), // open
                Number(data_array[i]['2. high']), // high
                Number(data_array[i]['3. low']), // low
                Number(data_array[i]['4. close']), // close
            ]);

            

            volume.push([
                Number(time_ms), // the date
                Number(data_array[i]['5. volume']), // the volume
            ]);
        }
        

        chartTitle = {
            text: ssj
        }
        // create the chart
        options = {

            rangeSelector: {
                selected: 1
            },

            title: {
                text: ssj
            },

            chart: {
                width: 1050,
                
            },

            xAxis: [{resize: {
                enabled: true
            }}],

            

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
                split: false
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
