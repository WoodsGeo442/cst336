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

app.get('/author', function(req, res){
    var firstName = req.query.firstname;
    var lastName = req.query.lastname;
    var stmt = 'select * from l9_author where firstName=\'' + firstName + '\' and lastName=\'' + lastName + '\';'
    
    //console.log('MySQL SQL Statement = ', stmt);
    connection.query(stmt, function(error,found){
        var author=null;
        if(error) throw error;
        if(found.length){
            author=found[0];
            author.dob=author.dob.toString().split(' ').slice(0,4).join(' ');
            author.dod=author.dod.toString().split(' ').slice(0,4).join(' ');
            
        }
        res.render('author', {author: author});
    });
});

app.get('/author/:aid', function(req, res){
    var stmt = 'select firstName, lastName, quote ' + 'from l9_author, l9_quotes ' + 'where l9_author.authorId = l9_quotes.authorId ' + ' and l9_author.authorId=\'' + req.params.aid + '\';'
    console.log('MySQL SQL Statement = ', stmt);
    connection.query(stmt, function(error, found){
        if(error) throw error;
        var name = found[0].firstName + ' ' + found[0].lastName;
        res.render('quotes', {name: name, quotes: found});
    });
    
});

app.get('/gender', function(req, res){
    var stmt = 'select quote, firstName, lastName ' + 'from l9_quotes, l9_author ' + 'where sex=\'' + req.query.gender + '\';'
    connection.query(stmt, function(error, found){
        if(error) throw error;
        var name = found[0].firstName + ' ' + found[0].lastName;
        res.render('quotes', {name: name, quotes: found});      
    });
});

app.get('/keyword', function(req, res){
    var stmt = 'select quote, firstName, lastName ' + 'from l9_quotes, l9_author ' + 'where l9_quotes.authorId=l9_author.authorId ' + 'and quote like\'%' + req.query.keyword + '%\';'
    connection.query(stmt, function(error, found){
        if(error) throw error;
        var name = found[0].firstName + ' ' + found[0].lastName;
        res.render('quotes', {name: name, quotes: found});      
    });
});

app.get('/category', function(req, res){
    var stmt = 'select quote, firstName, lastName ' + 'from l9_quotes, l9_author ' + 'where l9_quotes.authorId=l9_author.authorId ' + 'and country=\'' + req.query.country + '\';'
    connection.query(stmt, function(error, found){
        if(error) throw error;
        var name = found[0].firstName + ' ' + found[0].lastName;
        res.render('quotes', {name: name, quotes: found});      
    });
});

app.get('*', function(req, res){
    res.render('error');
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has been started");
})