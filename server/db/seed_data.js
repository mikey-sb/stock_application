use shares;
db.dropDatabase();

db.stocks.insertMany(
    [
        { 
            stock: "GME", 
            buyPrice: 150, 
            numberOfShares: 3, 
            singlePrice: 50 
        },
    ]
)

db.wallet.insertMany([
    {
        total_cash: 500,
        portfolio_value: 22000
    }
])