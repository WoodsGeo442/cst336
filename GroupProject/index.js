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
    user: 'elijahhallera',
    password: 's@uc!n*$31',
    database: 'games'
});
connection.connect();


///////////////////////////////////////////////////////////////////
//              LOG IN/OUT INFORMATION                           //
///////////////////////////////////////////////////////////////////

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

app.get('/login', function(req,res){
    res.render('login');
})

app.post('/login', async function(req, res){
    let isUserExist   = await checkUsername(req.body.username);
    let hashedPasswd  = isUserExist.length > 0 ? isUserExist[0].password : '';
    let passwordMatch = await checkPassword(req.body.password, hashedPasswd);
    console.log(hashedPasswd);
    console.log(isUserExist);
    if(passwordMatch){
        req.session.authenticated = true;
        req.session.user = isUserExist[0].id;
        res.redirect('welcome');
    }
    else{
        res.render('login', {error: true});
    }
});

/* Function to Logout of session */
app.get('/logout', function(req, res){
   req.session.destroy();
   console.log("DONE");
   res.redirect('/');
});

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//
//
//
//
//
///////////////////////////////////////////////////////////////////
//              CREATE ACCOUNT INFORMATION                       //
///////////////////////////////////////////////////////////////////

app.get('/account_new', function(req,res){
    res.render('account_new');
})

app.post('/account_new', function(req, res){
  //console.log(req.body);
  let salt = 10;
  bcrypt.hash(req.body.password, salt, function(error, hash){
        if(error) throw error;
        connection.query('SELECT * FROM loginInfo;', function(error, result){
            if(error) throw error;
            if(result.length){
                var userID = result[result.length - 1].id + 1;
                let stmt = 'INSERT INTO loginInfo (id, username, password) VALUES (?, ?, ?)';
                let data = [userID, req.body.username, req.body.password];
                connection.query(stmt, data, function(error, result){
                  if(error) throw error;
                  res.redirect('/');
                })
            }
        });
    });
});


///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//
//
//
//
//
///////////////////////////////////////////////////////////////////
//              Search Developers                                //
///////////////////////////////////////////////////////////////////

app.get('/searchDevelopers', function(req, res){
    if(req.session.authenticated){
        var sql = 'select company_name from gameDevelopers';
            connection.query(sql, function(error, results) {
            if(error) throw error;
            var arr = [];
            results.forEach(function(r) {
                if (!arr.includes(r.company_name)) {
                    arr.push(r.company_name);
                }
            });
    	res.render('premiumpages/prem_searchD', {companies: arr});
    });
    } else {
        var sql = 'select company_name from gameDevelopers';
            connection.query(sql, function(error, results) {
            if(error) throw error;
            var arr = [];
            results.forEach(function(r) {
                if (!arr.includes(r.company_name)) {
                    arr.push(r.company_name);
                }
            });
        	res.render('searchDevelopers', {companies: arr});
        });
    }
});

app.get('/developerSearch', function(req, res){
    var sql = 'select * from gameDevelopers where company_name=\''  + req.query.company_name + '\';'
	    connection.query(sql, function(error, found){
	        console.log(sql);
	        var company_name = null;
	        if(error) throw error;
	        if(found.length){
	            var company_name = found[0];
                res.render('detailDevelopers', {company_name: company_name, games: found});
	        };
	    });
});

app.get('/developerResults', function(req, res){
    var sql = 'select * from gameDevelopers where company_name=\''  + req.query.company_name + '\';'
	    connection.query(sql, function(error, found){
	        console.log(sql);
	        var company_name = null;
	        if(error) throw error;
	        if(found.length){
	            var company_name = found[0];
                res.render('detailDevelopers', {company_name: company_name, games: found});
	        };
	    });
});

app.get('/developerResults/:did', function(req, res){
    var sql = 'select * from gameDevelopers where gameDevelopers_id=\''  + req.query.did + '\';'
	    connection.query(sql, function(error, found){
	        console.log(sql);
	        var game = null;
	        if(error) throw error;
	        if(found.length){
	            var name = found[0].title;
                res.render('detailDevelopers', {name: name, games: found});
	        };
	    });
});
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//
//
//
//
//
///////////////////////////////////////////////////////////////////
//              SEARCH GAMES                                     //
///////////////////////////////////////////////////////////////////
app.get('/gameSearch', function(req, res){
    var sql = 'select * from videoGames where title=\''  + req.query.gameTitle + '\';'
	    connection.query(sql, function(error, found){
	        console.log(sql);
	        var game = null;
	        if(error) throw error;
	        if(found.length){
	            var game = found[0];
                res.render('detailGame', {game: game, games: found});
	        };
	    });
});

app.get('/results', function(req, res){
    var sql = 'select * from videoGames where title=\''  + req.query.gameTitle + '\';'
	    connection.query(sql, function(error, found){
	        console.log(sql);
	        var game = null;
	        if(error) throw error;
	        if(found.length){
	            var name = found[0].title;
                res.render('detailGame', {name: name, games: found});
	        };
	    });
});

app.get('/results/:vid', function(req, res){
    var sql = 'select * from videoGames where videogame_id=\''  + req.query.vid + '\';'
	    connection.query(sql, function(error, found){
	        console.log(sql);
	        var game = null;
	        if(error) throw error;
	        if(found.length){
	            var name = found[0].title;
                res.render('detailGame', {name: name, games: found});
	        };
	    });
});

app.get('/searchGames', function(req, res){
    if(req.session.authenticated){
        res.render('premiumpages/prem_searchG')
    } else {
        res.render('searchGames');
    }
});

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
//
//
//
//
//
///////////////////////////////////////////////////////////////////
//             Authenticated Routes                              //
///////////////////////////////////////////////////////////////////

app.get('/account', isAuthenticated, function(req, res){
    res.render('profile');
});

app.get('/welcome', isAuthenticated, function(req, res){
    res.render('premiumpages/prem_welcome', {username: req.session.username});
});

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

app.get('/genreSearch', function(req, res){
    var sql = 'select genre, title, videogame_id from videoGames where genre=\''  + req.query.gameGenre + '\';'
	    connection.query(sql, function(error, found){
	        console.log(sql);
	        var game = null;
	        if(error) throw error;
	        if(found.length){
	            var name = found[0].title;
                res.render('genreSearchResult', {name: name, games: found});
	        };
	    });
});

//routes
app.get('/', function(req, res){
    if(req.session.authenticated){
        res.render('premiumpages/prem_home')
    } else {
        res.render('home');
    }
});

app.get('*', function(req, res){
    res.render('error');
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log("Server has been started");
});
