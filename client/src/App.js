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

  const [viewSelectedStock, setViewSelectedStock] = useState(null);

  const stockSymbolArray = ['AAPL', 'MSFT', 'AMZN', 'GOOG', 'FB', 'TSLA', 'BABA', 'TSM', 'V', 'NVDA']

  const getStock = () => {
          fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=6OYBENRW75CQHHNZ')
          .then(res => res.json())
          .then(data =>setAllStock(data))
          .catch((err) => {
              console.log(err)
          })
  }
  useEffect(() => {
      getStock()
  }, [])

  const sym =  selectedStock

  const getSelectedStock = () => {
    
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sym}&interval=5min&apikey=BYBIX6SQ25IPZAUH`)
    .then(res => res.json())
    .then(data =>setViewSelectedStock(data))
    .catch((err) => {
        console.log(err)
    })
  }

  useEffect(() => {
    getSelectedStock()
  }, [sym])

  
  return (
    <Router>
    <>
    {allStock ? <NavBar allStock={allStock}/> : null}
    
    <Switch>
    {allStock ? <Route exact path="/" render={() => <Home allStock={allStock}/>}/> : null }
    {allStock ? <Route exact path="/profile" render={() => <Profile allStock={allStock}/>}/> : null }
    {allStock ? <Route exact path="/stocks" render={() => <Stocks allStock={allStock} selectedStock={selectedStock} setSelectedStock={setSelectedStock} viewSelectedStock={viewSelectedStock}/>}/> : null }

    </Switch>
    </>
    </Router>
  );
}

export default App;
