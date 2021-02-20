var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

<<<<<<< Updated upstream
app.use(express.static('dist'))
=======
//Configuring to use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
>>>>>>> Stashed changes

console.log(__dirname)

app.get('/', function (req, res) {
<<<<<<< Updated upstream
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
=======
     res.sendFile('dist/index.html')
});
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
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Listening on port 8080!')
  });


>>>>>>> Stashed changes

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
