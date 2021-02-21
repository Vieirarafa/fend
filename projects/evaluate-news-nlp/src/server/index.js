//Environment Variables
const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;
//Set the url base
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';

// Require Express to run server/routes and Start up an instance of app
const express = require('express');
const app = express();

//Configuring to use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//Require path 
//var path = require('path');
//const mockAPIResponse = require('./mockAPI.js');

const { default: fetch } = require('node-fetch');

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
})
//Post
app.post('/analyse',async (req, res) => {
  console.log(req.body)
  
  const response = await fetch(`${baseUrl}${apiKey}&of=json&lang=en&model=general&url=${req.body.url}`);
  try {
    const data = await response.json(); 
    
    console.log(data)           
    res.send(data)
    res.json()

} catch (error) {
  console.log(error.message)
}
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Listening on port 8080!')
  })



