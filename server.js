var express = require('express');
var hbs     = require('hbs');
var db      = require('./db/connection');
var app     = express();


// Set hbs views engine(config)
app.set('view engine', 'hbs');
app.set('views', './views');

// Middleware (needed to render .hbs in html)
app.use(express.static(__dirname + '/public'));

// ******GET (READ) ROUTES
// Home
app.get('/', (req, res) => {
  res.render('app-welcome');
});
// Index
app.get('/candidates', (req, res) => {
  res.render('candidates-index', {
    candidates: db.candidates
  });
});

//******LISTENING PORT
app.listen(3001, () => {
  console.log('//********LISTENING ON PORT 3001********//');
});
