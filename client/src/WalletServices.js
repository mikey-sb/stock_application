const baseURL = 'http://localhost:5000/api/profile/'
const apiURL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=6OYBENRW75CQHHNZ'

export const getWallet = () => {
    return fetch(baseURL).then(res => res.json())
}

export const postCash = (payload) => {
    console.log(payload)
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
}

export const removeCash = (id) => {
    return fetch(baseURL + id, {
        method: 'Delete'
    })
}

export const updateWallet = (id, payload) => {
    return fetch(baseURL +id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
}