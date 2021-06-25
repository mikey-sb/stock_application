import StockChart from '../components/StockChart'

const Home = ({allStock}) => {
    console.log(allStock)
    return (
        <>
        
        
        <div className="home-container">
           <h1>HOME</h1>

           < StockChart allStock={allStock} />

        </div>
        
        </>
    )
}

export default Home




