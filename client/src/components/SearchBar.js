import React from 'react'

const SearchBar = ({setSelectedStock}) => {

    const stockIsChanging = (event) => {
        event.preventDefault();
        let searchedStock = event.target[0].value
        setSelectedStock(searchedStock)
    }

    return (
        <div>
            <form className="form-container" id="stockForm" onSubmit={stockIsChanging}>

                {/* <label htmlFor="name">Symbol:</label>

                <input type="text" id="stockSearch" name="stockSearch" placeholder="IBM"/>

                <label for="stocks">Choose a Stock:</label> */}

                <select name="stocks" id="stockSelect">
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
                    <option value="PYPL">PYPL</option>
                </select>

                <input type="submit" value="Search" id="save"/>

            </form>

            

            
        </div>
    )
}

export default SearchBar
