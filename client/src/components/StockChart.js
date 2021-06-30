import HighCharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official';
const StockChart = ({wallet}) => {

    const portVal = wallet.portfolio_value[(wallet.portfolio_value.length-1)]
   
    const options = {
        title: {
            text: `Portfolio Value: $${portVal.toFixed(2)}`
          },
        xAxis: {
            categories: [],
            labels: {
                rotation: 0
            }
        },
        series: [{
            name: 'Portfolio Value',
            data: [],
            
        }]
    }
    const chartTitle = {
        text: 'Portfolio'
    }

    const setChartOptions = () => {
        for(let i = 0; i < (wallet.portfolio_value.length); i++){
            options["series"][0]["data"].push(wallet.portfolio_value[i])
        }
    }
    const renderChart = () => {
        if(wallet){
            setChartOptions()
            return <HighchartsReact highcharts={HighCharts} options={options} title={chartTitle}/>
        }
    }
    return (
        <>
            <div className="data-container">
            {renderChart()}
            </div>
        </>
    )
}
export default StockChart