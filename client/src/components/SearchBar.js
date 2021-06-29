import React from 'react'
import "../style/stock-select.css"

const SearchBar = ({setSelectedStock}) => {

    const stockIsChanging = (event) => {
        event.preventDefault();
        let searchedStock = event.target[0].value
        setSelectedStock(searchedStock)
    }

    return (
        <div className="form-container" >
            <form id="stockForm" onSubmit={stockIsChanging}>

                {/* <label htmlFor="name">Symbol:</label>

                <input type="text" id="stockSearch" name="stockSearch" placeholder="IBM"/>

                <label for="stocks">Choose a Stock:</label> */}

                <select name="stocks" id="stockSelect" class="stock-select">
                    <option value="IBM">IBM</option>
                    <option value="AAPL">AAPL</option>
                    <option value="GOOG">GOOG</option>
                    <option value="AMZN">AMZN</option>
                    <option value="MSFT">MSFT</option>
                    <option value="TSLA">TSLA</option>
                    <option value="TSM">TSM</option>
                    <option value="NVDA">NVDA</option>
                    <option value="JPM">JPM</option>
                    <option value="MA">MA</option>
                    <option value="GME">GME</option>
                    <option value="FOX">FOX</option>
                    <option value="MACK">MACK</option>
                    <option value="OSIR">OSIR</option>
                    <option value="NEO">NEO</option>
                    <option value="NDAQ">NDAQ</option>
                    <option value="LBIX">LBIX</option>
                    <option value="IPDN">IPDN</option>
                    <option value="FSC">FSC</option>
                    <option value="PYPL">PYPL</option>  
                </select>
                <br></br>

                <input type="submit" value="Search" id="save" className="stock-search-submit"/>

            </form>

            

            
        </div>
    )
}

export default SearchBar
