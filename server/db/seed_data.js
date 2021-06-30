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
        {
            stock: "RBLX", 
            buyPrice: 120, 
            numberOfShares: 2, 
            singlePrice: 60
        },
        {
            stock: "JET2", 
            buyPrice: 20, 
            numberOfShares: 10, 
            singlePrice: 2
        }
    ]
)
db.wallet.insertMany([
    {
        total_cash: 500,
        portfolio_value: [150, 270, 290]
    }
])