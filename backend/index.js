require('dotenv').config()

const express = require('express')
const http = require("http");
const app = express();  
const server = http.createServer(app); 
const bodyParser = require("body-parser"); 

var emailRoutes = require('./routes/email');   

var cors = require('cors');
app.use(bodyParser.json()); 
app.use(express.static('public'))

app.use(function(req, res, next) {
  res.header('application/json;charset=UTF-8')
  res.header('Access-Control-Allow-Credentials', true)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/email", emailRoutes); 

app.use(cors());
app.options('*', cors());

server.listen(4000, () => console.log(`Listening on port ${4000}`));
