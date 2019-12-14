const express = require('express');
const CORS = require('cors');
const admin = require('firebase-admin');
const server = express();

const app = admin.initializeApp();


app({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  });


server.use(CORS());

server.get('/', (req, res) => {
    //gives all the recipes
})

server.get('/:id', (req, res) => {
    //gets recipe by id
})

server.post('/recipe', (req, res) => {
    //adds new recipe
})

const port = //environment or 3200

server.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})