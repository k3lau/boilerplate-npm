
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//console.log("Hello World");
/*
app.get("/", function(req, res) {
  //res.send('Hello Express');
  var absolutePath = __dirname + '/views/index.html';
  res.sendFile(absolutePath);
});
*/
/*
app.get('/json', function(req, res){
  var message = 'Hello json';
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    return res.json({"message": message.toUpperCase()})
  }else{
    return res.json({"message": message})
  }
});
*/

//app.use(express.static(__dirname + "/public"));
// --> 7)  Mount the Logger middleware here

/*
app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req, res) {
  //res.send({time: req.time});
  res.send({'hey':'oh'})
});
*/
/*
app.get('/:word/echo', (req, res, next) =>
        {
  res.json({'echo':req.params.word});
});
*/
/*
app.get('/name', (req, res, next) => {
  //res.json({'name': req.query.first + ' ' + req.query.last});
  res.json({'name': req.query});
});
*/

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});
// --> 11)  Mount the body-parser middleware  here

/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
