import StockChart from '../components/StockChart'
import CandleStickChart from '../components/CandleStickChart'

const Home = ({allStock}) => {
    console.log(allStock)
    return (
        <>
        
        
        <div className="home-container">
           <h1>HOME</h1>

           < StockChart allStock={allStock} />
           
           < CandleStickChart allStock={allStock} />

        </div>
        
        </>
    )
}

export default Home




