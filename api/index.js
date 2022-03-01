const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');
var bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

//const corsOptions = {
//  origin: ['http://localhost:3000', 'http://localhost:4000'],
//  credentials: true, //access-control-allow-credentials:true
//  optionSuccessStatus: 200,
//};
//
//app.use(cors(corsOptions));

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB Connection Successful');
    console.log(
      `Return path is ${path.join(
        __dirname,
        '../app/client/build',
        'index.html'
      )}`
    );
  })
  .catch((err) => console.log(err));

//make the app accept json format request

/*
app.use(
  express.json();
);
*/
// parse application/json
app.use(express.json({}));
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '/client/build')));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/movies', movieRoute);
app.use('/api/lists', listRoute);

app.get('*', (req, res) => {
  console.log('For every unmatch request apa lanjiao u return');
  console.log(
    `Apa lanjiao path is ${path.join(__dirname, '/client/build', 'index.html')}`
  );
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running');
});
