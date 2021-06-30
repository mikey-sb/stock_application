import StockChart from '../components/StockChart'
import CandleStickChart from '../components/CandleStickChart'
import '../style/home.css'
import NewsFeed from '../components/NewsFeed'

const Home = ({allStock, yahooNews, wallet}) => {
    
    return (
        <>
        
        <h1 className="header">HOME</h1>

        <div className="home-container">

            <div className="portfolio-value-container">
                < StockChart wallet={wallet} allStock={allStock} />
            </div>
           
            <div className="news-feed-container">
                { yahooNews ? <NewsFeed yahooNews={yahooNews}/> : null }
            </div>

            <div className="home-profile-container">
                <h1>Home Profile</h1>
            </div>

        </div>
        
        </>
    )
}

export default Home




