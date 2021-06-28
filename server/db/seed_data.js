use shares;
db.dropDatabase();

db.stocks.insertMany(
    [
        { 
            stock: "GME", // - 20 (input)
            buyPrice: 150, // [{Amazon...}]
            numberOfShares: 3, // stock value x buy_amount
            singlePrice: 50 // [{Amazon... buy_price buy_time}]
        },
    ]
)

db.wallet.insertMany([
    {
        total_cash: 500,
        profit: 0,
        portfolio_value: 0
    }
])