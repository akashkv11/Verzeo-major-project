var express = require('express');
var app = express();
var path = require('path')
// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render(path.join(__dirname+'/views/form'));
});

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...');
});
