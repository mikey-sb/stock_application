import StockChart from '../components/StockChart'
import CandleStickChart from '../components/CandleStickChart'
import '../style/home.css'
import NewsFeed from '../components/NewsFeed'

const Home = ({allStock, yahooNews}) => {
    
    return (
        <>
        
        <h1>HOME</h1>
        <div className="home-container">

           
           
            <div className="portfolio-value-container">
                < StockChart allStock={allStock} />
            </div>
           
            <div className="news-feed-container">
                { yahooNews ? < NewsFeed yahooNews={yahooNews}/> : null }
            </div>

            <div className="home-profile-container">
                <h1>Home Profile</h1>
            </div>
           < CandleStickChart allStock={allStock} />

        </div>
        
        </>
    )
}

export default Home




