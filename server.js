var express = require('express');
var hbs     = require('hbs');
var app     = express();

// Set hbs views engine(config)
app.set('view engine', 'hbs');
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('app-welcome');
});

app.listen(3001, () => {
  console.log('//********LISTENING ON PORT 3001********//');
});
