import React from 'react'

const SearchBar = ({setSelectedStock}) => {

    const stockIsChanging = (event) => {
        event.preventDefault();
        let searchedStock = event.target[0].value
        setSelectedStock(searchedStock)
    }

    return (
        <div>
            <form className="form-container" onSubmit={stockIsChanging}>

                <label htmlFor="name">Symbol:</label>

                <input type="text" id="stockSearch" name="stockSearch" placeholder="IBM" required/>

                <input type="submit" value="Search" id="save"/>

            </form>
            
        </div>
    )
}

export default SearchBar
