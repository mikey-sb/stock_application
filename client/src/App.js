import './App.css';
import Home from './containers/Home'
import NavBar from './components/NavBar';
import Profile from './containers/Profile'
import Stocks from './containers/Stocks'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { getWallet } from './WalletServices';
function App() {
  const [allStock, setAllStock] = useState(null);
  const [selectedStock, setSelectedStock] = useState('');
  const [selectedStockInfo, setSelectedStockInfo] = useState(null)
  const [boughtStockRecord, setBoughtStockRecord] = useState([])
  const [yahooStock, setYahooStock] = useState(null);
  const [allOwnedStocks, setAllOwnedStocks] = useState([])
  const [yahooNews, setYahooNews] = useState(null)
  const [wallet, setWallet] = useState(0);
  useEffect(() => {
      getWallet()
      .then((wallet) => {
          setWallet(wallet[0])
      })
  }, [])
  const apiKey = '6OYBENRW75CQHHNZ'
  const apiKey2 = 'BYBIX6SQ25IPZAUH'
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
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${selectedStock}&interval=5min&apikey=${apiKey2}`)
    .then(res => res.json())
    .then(data =>setSelectedStockInfo(data))
    .catch((err) => {
      console.log(err)
    })
  }
  const updateBoughtStocks = (newStock) => {
    const update = [...boughtStockRecord, newStock]
    setBoughtStockRecord(update)
  }
  useEffect(() => {
    getSelectedStockInfo()
  }, [selectedStock])
  const getYahooStock = () => {
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "7f1f9f12f0mshb61724ebaadc332p1f6658jsnd12fd2c73285",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
  }
})
.then(res => res.json())
.then(data =>setYahooStock(data))
.catch(err => {
  console.error(err);
})
}
useEffect(() => {
  getYahooStock()
}, [])
const getYahooNews = () => {
  fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "7f1f9f12f0mshb61724ebaadc332p1f6658jsnd12fd2c73285",
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
}
})
.then(res => res.json())
.then(data =>setYahooNews(data))
.catch(err => {
console.error(err);
})
}
useEffect(() => {
getYahooNews()
}, [])
  return (
    <Router>
    <>
    {yahooStock ? <NavBar yahooStock={yahooStock}/> : null}
    <Switch>
    {allStock ? <Route exact path="/" render={() => <Home wallet={wallet} allStock={allStock} yahooNews={yahooNews}/>}/> : null }
    {allStock ? <Route exact path="/profile" render={() => <Profile setWallet={setWallet} wallet={wallet} allStock={allStock} boughtStockRecord={boughtStockRecord} setAllOwnedStocks={setAllOwnedStocks}/>}/> : null }
    {allStock ? <Route exact path="/stocks" render={() => <Stocks setWallet={setWallet} wallet={wallet} selectedStock={selectedStock} setSelectedStock={setSelectedStock} selectedStockInfo={selectedStockInfo} updateBoughtStocks={updateBoughtStocks} yahooStock={yahooStock} boughtStockRecord={boughtStockRecord} allOwnedStocks={allOwnedStocks}/>}/> : null }
    </Switch>
    </>
    </Router>
  );
}
export default App;