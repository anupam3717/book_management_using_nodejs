require('dotenv').config();
const mongoose = require('mongoose')
const url= process.env.DB_URL;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
   
  };
  
  mongoose.connect(url, connectionParams)
    .then(() => {
      console.log('Connected to database');
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });

module.exports = mongoose.connection;