var express = require('express')
var app = express();

var port = process.env.PORT || 8001;
app.use(express.static('public'))


app.listen(port, function(){
  console.log('Running on port: ', port);
})
