const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const createRouter = require('./helpers/create_router.js')
const cors = require('cors')

app.use(express.json())
app.use(cors())

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
.then((client) => {
    const db = client.db('shares')
    const stocksCollection = db.collection('stocks')
    const stocksRouter = createRouter(stocksCollection)
    app.use('/api/stocks', stocksRouter)
})
.catch(console.error)

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
.then((client) => {
    const db = client.db('shares')
    const walletCollection = db.collection('wallet')
    const walletRouter = createRouter(walletCollection)
    app.use('/api/profile', walletRouter)
})
.catch(console.error)

app.listen(5000, function() {
    console.log(`Listening on port ${this.address().port}`); })