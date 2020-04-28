/*App Configuration*/
var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var session = require('express-session');
var bcrypt = require('bcrypt');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: 'top secret code!',
    resave: true,
    saveUninitialized: true
}));
app.set('view engine', 'ejs');

/*Configure MySQL DBMS*/
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'geowoods',
    password: 'Rockydale442',
    database: 'games'
});
connection.connect();

/* Middleware */
function isAuthenticated(req, res, next){
    if(!req.session.authenticated) res.redirect('/login');
    else next();
}

function checkUsername(username){
    let stmt = 'SELECT * FROM loginInfo WHERE username=?';
    return new Promise(function(resolve, reject){
       connection.query(stmt, [username], function(error, results){
           if(error) throw error;
           resolve(results);
       }); 
    });
}

function checkPassword(password, hash){
    // return new Promise(function(resolve, reject){
    //   bcrypt.compare(password, hash, function(error, result){
    //       if(error) throw error;
    //       resolve(result);
    //   }); 
    // });
    if(password == hash){
        return true;
    } else {
        return false;
    }
}

//routes
app.get('/', function(req, res){
    // var sql = 'select country from l9_author';
    // connection.query(sql, function(error, results) {
    //     if(error) throw error;
    //     var arr = [];
    //     results.forEach(function(r) {
    //         if (!arr.includes(r.country)) {
    //             arr.push(r.country);
    //         }
    //     });
    //     res.render('home', {countries: arr});
    // });
    res.render('home');
});

app.get('/login', function(req,res){
    res.render('login');
})

app.post('/login', async function(req, res){
    let isUserExist   = await checkUsername(req.body.username);
    console.log(isUserExist);
    let hashedPasswd  = isUserExist.length > 0 ? isUserExist[0].password : '';
    console.log(hashedPasswd);
    let passwordMatch = await checkPassword(req.body.password, hashedPasswd);
    if(passwordMatch){
        req.session.authenticated = true;
        req.session.user = isUserExist[0].username;
        res.redirect('welcome');
    }
    else{
        console.log(passwordMatch);
        res.render('login', {error: true});
    }
});

app.get('/welcome', function(req, res){
    res.render('welcome');
});

app.get('/results', function(req, res){
    res.render('results');
})

app.get('*', function(req, res){
    res.render('error');
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has been started");
});