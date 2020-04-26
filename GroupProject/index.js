/*App Configuration*/
var express = require("express");
var app = express();
var mysql = require('mysql');
app.use(express.static('public'));
app.set('view engine', 'ejs');

/*Configure MySQL DBMS*/
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'geowoods',
    password: 'Rockydale442',
    database: 'quotes_db'
});
connection.connect();

//routes
app.get('/', function(req, res){
    res.render('home');
});

app.get('/welcome', function(req, res){
    res.render('welcome');
});

app.get('*', function(req, res){
    res.render('error');
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has been started");
});