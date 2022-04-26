const fetch =require('node-fetch')
const express = require('express')
const cors=require("cors")
const https = require('https')
const app = express()
const port = 3000
const axios=require('axios')
const queryString = require('query-string');
var bodyParser = require('body-parser')
const { request } = require('http');
var corsOptions = {
  origin:true,
  optionsSuccessStatus: 200,
  methods:['GET', 'PUT', 'POST']
}
app.use(cors(corsOptions))
var jsonParser = bodyParser.json()

var client_id = '95fa9c7ce7d542be80ed239591cf48f7';
var client_secret='0ec7f62346c44f0b88c9e665ce337d9b'
var redirect_uri = 'http://localhost:4200/';


app.get('/spotify-login',(req, res) => {
  console.log(req)
 // var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email user-library-read  user-read-playback-state';
  res.set('Access-Control-Allow-Origin', '*');
  res.redirect('https://accounts.spotify.com/authorize?' +
      queryString.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state:'WDKFOW20342'
    }));
})


app.post('/spotify-token',jsonParser,async (req, res) =>{
  console.log(req.body)
  var code = req.body.code || null;
  var state = req.body.state || null;
  axios({
    url: 'https://accounts.spotify.com/api/token',
    method: 'post',
    params: {
      grant_type: 'client_credentials'
    },
    headers: {
      'Accept':'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: client_id,
      password: client_secret
    }
  }).then(response=>{res.status(200).send(response.data)})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
