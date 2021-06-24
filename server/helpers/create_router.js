const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function(collection) {
    const router = express.Router();

    //INDEX SHOW ALL
    router.get('/', (req, res) => {
        collection.find().toArray()
        .then(docs => res.json(docs))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err})
        })
    })

    //Show Single
    router.get('/:id', (req, res) => {
        const id = req.params.id
        collection.findOne({_id: ObjectID(id)})
        .then(doc => res.json(doc))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err})
        })
    })

    //POST
    router.post('/', (req, res) => {
        collection.insertOne(req.body)
        .then(doc => res.json(doc.ops[0]))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err})        
        })
    })

    //DELETE
    router.delete('/:id', (req, res) => {
        const id = req.params.id
        collection.deleteOne({_id: ObjectID(id)})
        .then(doc => res.json(doc))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err})        
        })
    })

    //UPDATE
    router.put('/:id', (req, res) => {
        const id = req.params.id
        const updatedStock = req.body
        collection.updateOne({_id: ObjectID(id)}, {$set: updatedStock} )
        .then(doc => res.json(doc))
        .catch((err) => {
            console.error(err)
            res.status(500)
            res.json({status: 500, error: err})
        })
    })
    return router;
};

module.exports = createRouter