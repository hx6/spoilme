const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fixedUrl = '/api/v1';
const cors = require('cors')

const listRouter = require('./routes/list')
const userRouter = require('./routes/userExtended')
let db = mongoose.connection

db.on('error',function(){
  console.log("Error connecting to the database");
});
db.once('open', function() {
  console.log("Connected to the database");
});

//Connecting to the db
const dbLink = "mongodb+srv://patatapoderosa:tortilla@cluster0-g6ujr.mongodb.net/spoily?retryWrites=true&w=majority" 
mongoose.connect(dbLink, {useNewUrlParser: true})

//Middlewares
app.use(bodyParser.json());
app.use(cors())

app.use(express.static('public'))
//routes
app.use(fixedUrl + '/list', listRouter) //cuando entre en se carga que
app.use(fixedUrl + '/user', userRouter)

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;

app.listen(process.env.PORT || 3000, function () {
  console.log('Server active in http://localhost:3000')
});
