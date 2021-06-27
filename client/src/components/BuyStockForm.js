
const BuyStockForm = ({selectedStockInfo}) => {

    return (
        <>
            <form>
                <label>{`Stock: ${selectedStockInfo["Meta Data"]["2. Symbol"]}`}</label>
                <br></br>
                <label>Number of shares: </label>
                <input type="number" name="stockAmount" required/>
                <input type="submit" name="buy" value="Buy"/>
            </form>
        </>
    )

}

export default BuyStockForm