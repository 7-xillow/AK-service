const express = require('express');
const path = require('path');
var compression = require('compression');
const port = 3002;

const retrieve = require('../database/retrieve.js'); // module for query a specific house in DB

// set up server
var app = express();
app.set('port', port);

// parsing and gzip compression
app.use(express.urlencoded({'extended': true}));
app.use(compression())

// specify the directory of static files
app.use('/', express.static(path.join(__dirname, '../client/dist')));

// response to request
app.get('/api/summary/data/:id', (req, res) =>{
  var {id} = req.params;
  retrieve(id, (err, data) =>{
    if (err) { // if error occures, send status code of 500
      console.log(err); 
      res.send(500);
    } else {
      if(data){ // send data back to client if retrieved
        res.jsonp(data);    
      } else { // if query succeed but no data retrieve, send message to client about issue
        res.send('no house with such id value');
      }
    }
  });
  
})

// start server
app.listen(port, () => {
  console.log('Listening on', port);
});

module.exports = app;