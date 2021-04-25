const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const port = process.env.PORT || 5000;

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

    // services Database
    const services = client.db("knockKnock").collection("services");

    app.post('/addService', (req, res) => {
        const newService = req.body;
        services.insertOne(newService)
        .then(result => {
            console.log('inserted count', result.insertedCount);
            res.send(result.insertedCount > 0);
        })
    })

    app.get('/services', (req, res) => {
        services.find()
        .toArray((err, service) => {
            res.send(service);
        })
    })

    // delete service
    app.delete('/deleteService/:id', (req, res) => {
        const id = ObjectID(req.params.id);
        services.findOneAndDelete({_id: id})
        .then(document => res.send(document.value))
    })

    // PurchasedService Database
    const purchased = client.db("knockKnock").collection("purchasedService");
    app.post('/purchaseService', (req, res) => {
        const newPurchase = req.body;
        console.log(newPurchase);
        purchased.insertOne(newPurchase)
        .then(result => {
            res.send(result.insertedCount > 0);
        })
    })

    app.get('/adminPurchasedServices', (req, res) => {
        purchased.find()
        .toArray((err, documents) => {
            res.send(documents);
        })
    })

    app.get('/purchasedServices', (req, res) => {
        purchased.find({email: req.query.email})
        .toArray((err, documents) => {
            res.send(documents);
        })
    })

    app.get('/getOrder/:id', (req, res) => {
        const { id } = req.params;
        purchased.find({ _id: ObjectID(id) })
        .toArray((error, documents) => {
            res.send(documents[0])
        });
    })

    app.patch('/updateOrderStatus', (req, res) => {
        const { _id, ...rest } = req.body;
        purchased.updateOne({ _id: ObjectID(_id) }, { $set: { ...rest } })
        .then(result => {
            res.send(result.modifiedCount > 0)
        });
    })

    // Admin Database
    const adminCollection = client.db("knockKnock").collection("admin");
    app.post('/makeAdmin', (req, res) => {
        adminCollection.insertOne({ ...req.body })
        .then(result => {
            res.send(result.insertedCount > 0)
        });
    })

    app.get('/checkUserRole', (req, res) => {
        adminCollection.find({email: req.query.email})
        .toArray((error, documents) => {
            res.send(documents.length > 0)
        });
    })

    // reviews Database
    const reviews = client.db("knockKnock").collection("reviews");
    app.post('/addReview', (req, res) => {
        const newReview = req.body;
        console.log(newReview);
        reviews.insertOne(newReview)
        .then(result => {
            res.send(result.insertedCount > 0);
        })
    })

    app.get('/reviews', (req, res) => {
        reviews.find()
        .toArray((err, review) => {
            res.send(review);
        })
    })
});

app.listen(process.env.PORT || port);