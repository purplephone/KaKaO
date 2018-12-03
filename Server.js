var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var session = require('express-session');
var mongo = require('mongoose');
var passport = require('passport');
require('./config/passport')(passport);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(express.static('public'));

app.use(passport.initialize());
app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));





var db = mongo.connection;
db.on('error',console.error);
db.once('open',function(){
  console.log("MongoDB gogo");
});
mongo.connect('mongodb://Kim:tjsvndrl12!@ds123834.mlab.com:23834/mjuctable');



var port = process.env.PORT || 80;
var router = require('./router/MainControl')(app);
var server = app.listen(port, function(){
  console.log("gogo server " + port);
});
