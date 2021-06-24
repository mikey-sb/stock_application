use stocks_db
db.dropDatabase();

db.stocks.insertMany(
    [
        { 
            total_cash: 100, // - 20 (input)
            stocks_held: [], // [{Amazon...}]
            total_stocks_value: 0, // stock value x buy_amount
            transaction_history: {} // [{Amazon... buy_price buy_time}]
        },
    ]
)


// 20 Amazon 
// 50 Tesla 
// 30 bitcoin