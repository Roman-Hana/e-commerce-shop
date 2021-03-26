const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51Hr3VSHHAqrIpxNQhNRxjxWdPkiYToz4MxMVHTnmjbiy7hM0vrin7YGS2RiY6RnO30Yx6cJfEeb2ofif6XrIyB6Z00dCEPCVRa');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)