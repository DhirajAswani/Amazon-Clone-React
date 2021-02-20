const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IMfvWLiDZzPhv5KBeHryRJlwACvfVnO5FRZx8iLCbgcrmoDo9bf8dEWdGFjBQBBbPSKv2dxyWqqin793Htmcr3l00eRwBHOSK')

// App config

const app = express();

// Middleware
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
//app.use(cors({origin: true}));
app.use(express.json());

// API Route

app.get('/', (request, response) => response.status(200).send("Hello World"))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request received >>>>>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits
        currency: "inr",
    });

    //Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})


// Listen Command

exports.api = functions.https.onRequest(app)

//http://localhost:5001/clone-94a19/us-central1/api

