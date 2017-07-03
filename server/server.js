'use strict'

// import serverConfig from './config'
const serverConfig = require('./config');

const mongoose = require('mongoose')

const app = require('./app')

mongoose.connect(serverConfig.mongoURL, (err, res) => {
  if(err) {
    return console.log(`Error to connect the Mongo database: ${err}`);
  }
  console.log('Connection to the Mongo database, established')
  app.listen(serverConfig.port, () =>  {
    console.log(`Server is running on http://localhost:${serverConfig.port}`)
  })
})
