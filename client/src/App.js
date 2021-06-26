import './App.css';
import Home from './containers/Home'
import NavBar from './components/NavBar';
import Profile from './containers/Profile'
import Stocks from './containers/Stocks'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  const [allStock, setAllStock] = useState(null);
  const [selectedStock, setSelectedStock] = useState('');
  const [selectedStockInfo, setSelectedStockInfo] = useState(null)

  const apiKey = '6OYBENRW75CQHHNZ'
  const interval = '60min'


  const getStock = () => {
          fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`)
          .then(res => res.json())
          .then(data =>setAllStock(data))
          .catch((err) => {
              console.log(err)
          })
  }
  useEffect(() => {
      getStock()
  }, [])

  const getSelectedStockInfo = () => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedStock}&interval=5min&apikey=BYBIX6SQ25IPZAUH`)
    .then(res => res.json())
    .then(data =>setSelectedStockInfo(data))
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getSelectedStockInfo()
  }, [selectedStock])
  
  return (
    <Router>
    <>
    {allStock ? <NavBar allStock={allStock}/> : null}
    
    <Switch>
    {allStock ? <Route exact path="/" render={() => <Home allStock={allStock}/>}/> : null }
    {allStock ? <Route exact path="/profile" render={() => <Profile allStock={allStock}/>}/> : null }
    {allStock ? <Route exact path="/stocks" render={() => <Stocks selectedStock={selectedStock} setSelectedStock={setSelectedStock} selectedStockInfo={selectedStockInfo}/>}/> : null }

    </Switch>
    </>
    </Router>
  );
}

export default App;
