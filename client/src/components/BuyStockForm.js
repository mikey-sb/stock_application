
const BuyStockForm = () => {

    return (
        <>
            <form>
                <label>Stock:</label>
                <label>Number of shares: </label>
                <input type="number" name="stockAmount" required/>
                <input type="submit" name="buy" value="Buy"/>
            </form>
        </>
    )

}

export default BuyStockForm