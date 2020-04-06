{"filter":false,"title":"index.js","tooltip":"/project4/index.js","undoManager":{"mark":73,"position":73,"stack":[[{"start":{"row":0,"column":0},"end":{"row":29,"column":3},"action":"insert","lines":["var  express =require('express');","var app = express();","var request = require('request');","","app.use(express.static('public'));","app.set('view engine', 'ejs');","","app.get(\"/\", function(req, res){","    res.render('home');","});","","app.get('/results', function(req, res) {","    var query = req.query.search;","    var url = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + query + \"&jscmd=data&format=json\";","    request(url, function( error, responce, dataStream){","        if(!error && responce.statusCode == 200){","            var data = JSON.parse(dataStream);","            res.render('results', {data: data, query: query});","        }","    });","    ","});","","app.get(\"*\", function(req, res){","   res.render('error'); ","});","","app.listen(process.env.PORT || 3000, function(){","    console.log('Server has been started');","});"],"id":1}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":33},"action":"remove","lines":["var request = require('request');"],"id":2},{"start":{"row":1,"column":20},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"insert","lines":["."],"id":3},{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"insert","lines":["e"]},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"insert","lines":["j"]},{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"insert","lines":["s"]}],[{"start":{"row":12,"column":4},"end":{"row":19,"column":7},"action":"remove","lines":["var query = req.query.search;","    var url = 'https://openlibrary.org/api/books?bibkeys=ISBN:' + query + \"&jscmd=data&format=json\";","    request(url, function( error, responce, dataStream){","        if(!error && responce.statusCode == 200){","            var data = JSON.parse(dataStream);","            res.render('results', {data: data, query: query});","        }","    });"],"id":4},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"remove","lines":["    "]},{"start":{"row":11,"column":40},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"remove","lines":["s"],"id":5},{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"remove","lines":["t"]},{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"remove","lines":["l"]},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"remove","lines":["u"]},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"remove","lines":["s"]},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"remove","lines":["e"]},{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"remove","lines":["r"]}],[{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["h"],"id":6},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["o"]},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["m"]},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["e"]}],[{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["r"],"id":7},{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["e"]},{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"insert","lines":["s"]},{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"insert","lines":["."]},{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"insert","lines":["r"]},{"start":{"row":12,"column":9},"end":{"row":12,"column":10},"action":"insert","lines":["e"]},{"start":{"row":12,"column":10},"end":{"row":12,"column":11},"action":"insert","lines":["n"]},{"start":{"row":12,"column":11},"end":{"row":12,"column":12},"action":"insert","lines":["d"]},{"start":{"row":12,"column":12},"end":{"row":12,"column":13},"action":"insert","lines":["e"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":12,"column":14},"end":{"row":12,"column":16},"action":"insert","lines":["()"],"id":8}],[{"start":{"row":12,"column":15},"end":{"row":12,"column":17},"action":"insert","lines":["''"],"id":9}],[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["h"],"id":10},{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["o"]},{"start":{"row":12,"column":18},"end":{"row":12,"column":19},"action":"insert","lines":["m"]},{"start":{"row":12,"column":19},"end":{"row":12,"column":20},"action":"insert","lines":["e"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["."]}],[{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["e"],"id":11},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["j"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["s"]}],[{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"remove","lines":["s"],"id":12},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"remove","lines":["j"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"remove","lines":["e"]},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"remove","lines":["."]}],[{"start":{"row":8,"column":23},"end":{"row":8,"column":24},"action":"remove","lines":["s"],"id":13},{"start":{"row":8,"column":22},"end":{"row":8,"column":23},"action":"remove","lines":["j"]},{"start":{"row":8,"column":21},"end":{"row":8,"column":22},"action":"remove","lines":["e"]},{"start":{"row":8,"column":20},"end":{"row":8,"column":21},"action":"remove","lines":["."]}],[{"start":{"row":13,"column":3},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":15,"column":0},"end":{"row":17,"column":3},"action":"insert","lines":["app.get('/home', function(req, res) {","    res.render('home')","});"],"id":15}],[{"start":{"row":17,"column":3},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":16},{"start":{"row":18,"column":0},"end":{"row":19,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":19,"column":0},"end":{"row":21,"column":3},"action":"insert","lines":["app.get('/home', function(req, res) {","    res.render('home')","});"],"id":17}],[{"start":{"row":21,"column":3},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":18},{"start":{"row":22,"column":0},"end":{"row":23,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":23,"column":0},"end":{"row":25,"column":3},"action":"insert","lines":["app.get('/home', function(req, res) {","    res.render('home')","});"],"id":19}],[{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"remove","lines":["e"],"id":20},{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"remove","lines":["m"]},{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"remove","lines":["o"]},{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"remove","lines":["h"]}],[{"start":{"row":15,"column":10},"end":{"row":15,"column":11},"action":"insert","lines":["i"],"id":21},{"start":{"row":15,"column":11},"end":{"row":15,"column":12},"action":"insert","lines":["n"]},{"start":{"row":15,"column":12},"end":{"row":15,"column":13},"action":"insert","lines":["f"]},{"start":{"row":15,"column":13},"end":{"row":15,"column":14},"action":"insert","lines":["o"]},{"start":{"row":15,"column":14},"end":{"row":15,"column":15},"action":"insert","lines":["1"]}],[{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"remove","lines":["e"],"id":22},{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"remove","lines":["m"]},{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"remove","lines":["o"]},{"start":{"row":16,"column":16},"end":{"row":16,"column":17},"action":"remove","lines":["h"]}],[{"start":{"row":16,"column":16},"end":{"row":16,"column":17},"action":"insert","lines":["i"],"id":23},{"start":{"row":16,"column":17},"end":{"row":16,"column":18},"action":"insert","lines":["n"]},{"start":{"row":16,"column":18},"end":{"row":16,"column":19},"action":"insert","lines":["f"]},{"start":{"row":16,"column":19},"end":{"row":16,"column":20},"action":"insert","lines":["o"]},{"start":{"row":16,"column":20},"end":{"row":16,"column":21},"action":"insert","lines":["1"]}],[{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"remove","lines":["e"],"id":24},{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"remove","lines":["m"]},{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"remove","lines":["o"]},{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"remove","lines":["h"]}],[{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"insert","lines":["i"],"id":25},{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"insert","lines":["n"]},{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["f"]},{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":["o"]},{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["2"]}],[{"start":{"row":19,"column":13},"end":{"row":19,"column":14},"action":"remove","lines":["e"],"id":26},{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"remove","lines":["m"]},{"start":{"row":19,"column":11},"end":{"row":19,"column":12},"action":"remove","lines":["o"]},{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"remove","lines":["h"]}],[{"start":{"row":19,"column":10},"end":{"row":19,"column":11},"action":"insert","lines":["i"],"id":27},{"start":{"row":19,"column":11},"end":{"row":19,"column":12},"action":"insert","lines":["n"]},{"start":{"row":19,"column":12},"end":{"row":19,"column":13},"action":"insert","lines":["f"]},{"start":{"row":19,"column":13},"end":{"row":19,"column":14},"action":"insert","lines":["o"]},{"start":{"row":19,"column":14},"end":{"row":19,"column":15},"action":"insert","lines":["2"]}],[{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"remove","lines":["e"],"id":28},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"remove","lines":["m"]},{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"remove","lines":["o"]},{"start":{"row":23,"column":10},"end":{"row":23,"column":11},"action":"remove","lines":["h"]}],[{"start":{"row":23,"column":10},"end":{"row":23,"column":11},"action":"insert","lines":["i"],"id":29},{"start":{"row":23,"column":11},"end":{"row":23,"column":12},"action":"insert","lines":["n"]},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["f"]},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":["o"]},{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["3"]}],[{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"remove","lines":["e"],"id":30},{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"remove","lines":["m"]},{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"remove","lines":["o"]},{"start":{"row":24,"column":16},"end":{"row":24,"column":17},"action":"remove","lines":["h"]}],[{"start":{"row":24,"column":16},"end":{"row":24,"column":17},"action":"insert","lines":["i"],"id":31},{"start":{"row":24,"column":17},"end":{"row":24,"column":18},"action":"insert","lines":["n"]},{"start":{"row":24,"column":18},"end":{"row":24,"column":19},"action":"insert","lines":["f"]},{"start":{"row":24,"column":19},"end":{"row":24,"column":20},"action":"insert","lines":["o"]},{"start":{"row":24,"column":20},"end":{"row":24,"column":21},"action":"insert","lines":["3"]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":33},"action":"remove","lines":["var request = require('request');"],"id":32},{"start":{"row":1,"column":20},"end":{"row":2,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["."],"id":33},{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["e"]},{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["j"]},{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["s"]}],[{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":["."],"id":34},{"start":{"row":15,"column":22},"end":{"row":15,"column":23},"action":"insert","lines":["e"]},{"start":{"row":15,"column":23},"end":{"row":15,"column":24},"action":"insert","lines":["j"]},{"start":{"row":15,"column":24},"end":{"row":15,"column":25},"action":"insert","lines":["s"]}],[{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"insert","lines":["."],"id":35},{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"insert","lines":["e"]},{"start":{"row":19,"column":23},"end":{"row":19,"column":24},"action":"insert","lines":["j"]},{"start":{"row":19,"column":24},"end":{"row":19,"column":25},"action":"insert","lines":["s"]}],[{"start":{"row":23,"column":21},"end":{"row":23,"column":22},"action":"insert","lines":["."],"id":36},{"start":{"row":23,"column":22},"end":{"row":23,"column":23},"action":"insert","lines":["e"]},{"start":{"row":23,"column":23},"end":{"row":23,"column":24},"action":"insert","lines":["j"]},{"start":{"row":23,"column":24},"end":{"row":23,"column":25},"action":"insert","lines":["s"]}],[{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["."],"id":37},{"start":{"row":27,"column":21},"end":{"row":27,"column":22},"action":"insert","lines":["e"]},{"start":{"row":27,"column":22},"end":{"row":27,"column":23},"action":"insert","lines":["j"]},{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["s"]}],[{"start":{"row":11,"column":20},"end":{"row":11,"column":24},"action":"remove","lines":[".ejs"],"id":38}],[{"start":{"row":15,"column":21},"end":{"row":15,"column":25},"action":"remove","lines":[".ejs"],"id":39},{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"insert","lines":["="]}],[{"start":{"row":15,"column":21},"end":{"row":15,"column":22},"action":"remove","lines":["="],"id":40}],[{"start":{"row":19,"column":21},"end":{"row":19,"column":25},"action":"remove","lines":[".ejs"],"id":41},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"insert","lines":["="]}],[{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"remove","lines":["="],"id":42}],[{"start":{"row":23,"column":21},"end":{"row":23,"column":25},"action":"remove","lines":[".ejs"],"id":43}],[{"start":{"row":27,"column":20},"end":{"row":27,"column":24},"action":"remove","lines":[".ejs"],"id":44}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["."],"id":45},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["h"]},{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["t"]},{"start":{"row":7,"column":23},"end":{"row":7,"column":24},"action":"insert","lines":["m"]},{"start":{"row":7,"column":24},"end":{"row":7,"column":25},"action":"insert","lines":["l"]}],[{"start":{"row":1,"column":20},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":46}],[{"start":{"row":2,"column":0},"end":{"row":4,"column":34},"action":"insert","lines":["app.use(express.static('css'));","app.engine('html', require('ejs').renderFile);","app.use(express.static(\"public\"));"],"id":47}],[{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"remove","lines":["'"],"id":48}],[{"start":{"row":10,"column":25},"end":{"row":10,"column":26},"action":"insert","lines":["\""],"id":49}],[{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"remove","lines":["'"],"id":50}],[{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["\""],"id":51}],[{"start":{"row":14,"column":15},"end":{"row":14,"column":21},"action":"remove","lines":["'home'"],"id":52},{"start":{"row":14,"column":15},"end":{"row":14,"column":26},"action":"insert","lines":["\"home.html\""]}],[{"start":{"row":18,"column":15},"end":{"row":18,"column":22},"action":"remove","lines":["'info1'"],"id":53},{"start":{"row":18,"column":15},"end":{"row":18,"column":26},"action":"insert","lines":["\"home.html\""]}],[{"start":{"row":22,"column":15},"end":{"row":22,"column":22},"action":"remove","lines":["'info2'"],"id":54},{"start":{"row":22,"column":15},"end":{"row":22,"column":26},"action":"insert","lines":["\"home.html\""]}],[{"start":{"row":26,"column":15},"end":{"row":26,"column":22},"action":"remove","lines":["'info3'"],"id":55},{"start":{"row":26,"column":15},"end":{"row":26,"column":26},"action":"insert","lines":["\"home.html\""]}],[{"start":{"row":18,"column":19},"end":{"row":18,"column":20},"action":"remove","lines":["e"],"id":56},{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"remove","lines":["m"]},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"remove","lines":["o"]},{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"remove","lines":["h"]}],[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["i"],"id":57},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["n"]},{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"insert","lines":["f"]},{"start":{"row":18,"column":19},"end":{"row":18,"column":20},"action":"insert","lines":["o"]},{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"insert","lines":["1"]}],[{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"remove","lines":["e"],"id":58},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"remove","lines":["m"]},{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"remove","lines":["o"]},{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"remove","lines":["h"]}],[{"start":{"row":22,"column":16},"end":{"row":22,"column":17},"action":"insert","lines":["i"],"id":59},{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"insert","lines":["n"]},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["f"]},{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["o"]},{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["`"]}],[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"remove","lines":["`"],"id":60}],[{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["2"],"id":61},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["3"]}],[{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"remove","lines":["3"],"id":62}],[{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"remove","lines":["e"],"id":63},{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"remove","lines":["m"]},{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"remove","lines":["o"]},{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"remove","lines":["h"]}],[{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["i"],"id":64},{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":["n"]},{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"insert","lines":["f"]},{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["o"]},{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":["3"]}],[{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"remove","lines":["'"],"id":65},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"remove","lines":["r"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"remove","lines":["o"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"remove","lines":["r"]},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"remove","lines":["r"]},{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"remove","lines":["e"]},{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"remove","lines":["'"]}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":16},"action":"insert","lines":["\"\""],"id":66}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["e"],"id":67},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["r"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["r"]},{"start":{"row":30,"column":18},"end":{"row":30,"column":19},"action":"insert","lines":["o"]},{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["r"]},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["."]},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["h"]},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["t"]}],[{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["m"],"id":68},{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["l"]}],[{"start":{"row":1,"column":20},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":69}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":22},"action":"insert","lines":["var date = new Date();"],"id":70}],[{"start":{"row":18,"column":38},"end":{"row":18,"column":39},"action":"insert","lines":["\\"],"id":71}],[{"start":{"row":18,"column":38},"end":{"row":18,"column":39},"action":"remove","lines":["\\"],"id":72}],[{"start":{"row":18,"column":38},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":73},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":19,"column":4},"end":{"row":19,"column":56},"action":"insert","lines":["console.log(\"The current day is \" + date.getDate());"],"id":74}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":19,"column":56},"end":{"row":19,"column":56},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1586141960893,"hash":"d9ef742bcd4fec9581d937694523b85fdd377820"}