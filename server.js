var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
var ReactDOMServer = require('react-dom/server');
require("node-jsx").install();
var React = require("react");
 App = React.createFactory(require("./app"));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    var markup = ReactDOMServer.renderToString(App());  
    res.render('main', { 
     title: 'Express',
    markup: markup ,
    
  });
});


app.listen(3000);