const baseURL = 'http://localhost:5000/api/stocks/'

export const getStocks = () => {
    return fetch(baseURL).then(res => res.json)
}

export const postStock = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
}

export const deleteStock = (id) => {
    return fetch(baseURL + id, {
        method: 'Delete'
    })
}

export const updateStock = (id, payload) => {
    return fetch(baseURL +id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
}