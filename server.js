var express = require('express');
var hbs     = require('hbs');
var app     = express();

// Set hbs views engine(config)
app.set('view engine', 'hbs');
app.set('views', './views');

// Middleware (needed to render .hbs to .html)
app.use(express.static(__dirname + '/public'));

// Get (read) routes
app.get('/', (req, res) => {
  res.render('app-welcome');
});

app.get('/candidates', (req, res) => {
  res.render('candidates-index', {
    numCandidates: 32
  });
});

app.listen(3001, () => {
  console.log('//********LISTENING ON PORT 3001********//');
});
