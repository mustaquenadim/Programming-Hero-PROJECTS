const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const port = process.env.PORT || 8000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.u704q.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log('error!', err);

    // bookList Database
    const bookCollection = client.db("lighthouse").collection("books");

    app.post('/addBook', (req, res) => {
        const newBook = req.body;
        bookCollection.insertOne(newBook)
        .then(result => {
            console.log('inserted count', result.insertedCount);
            res.send(result.insertedCount > 0);
        })
    })

    app.get('/books', (req, res) => {
        bookCollection.find()
        .toArray((err, books) => {
            res.send(books);
        })
    })

    app.delete('/deleteBook/:id', (req, res) => {
        const id = ObjectID(req.params.id);
        bookCollection.findOneAndDelete({_id: id})
        .then(document => res.send(document.value))
    })

    // Orders Database
    const orders = client.db("lighthouse").collection("orders");
    app.post('/addOrder', (req, res) => {
        const newOrder = req.body;
        console.log(newOrder);
        orders.insertOne(newOrder)
        .then(result => {
            res.send(result.insertedCount > 0);
        })
    })

    app.get('/orders', (req, res) => {
        orders.find({email: req.query.email})
        .toArray((err, documents) => {
            res.send(documents);
        })
    })
});

app.listen(process.env.PORT || port);