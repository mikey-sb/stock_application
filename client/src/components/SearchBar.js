import React from 'react'

const SearchBar = ({handleStockChange}) => {





    return (
        <div>
            <form className="form-container" onSubmit={handleStockChange}>

                <label htmlFor="name">Symbol:</label>

                <input type="text" id="stockSearch" name="stockSearch" placeholder="IBM" required/>

                <input type="submit" value="Search" id="save"/>

            </form>
            
        </div>
    )
}

export default SearchBar
