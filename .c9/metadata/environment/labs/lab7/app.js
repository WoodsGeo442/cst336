{"filter":false,"title":"app.js","tooltip":"/labs/lab7/app.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":55,"column":2},"action":"insert","lines":["const express = require(\"express\");","const app = express();","app.use(express.static('css'));","app.engine('html', require('ejs').renderFile);","app.use(express.static(\"public\"));","","//routes","app.get(\"/\", function(req, res){","    res.render(\"index.html\");","});","","app.get(\"/home\", function(req, res){","    res.render(\"index.html\");","});","","app.get(\"/mercury\", function(req, res){","    res.render(\"mercury.html\");","});","","app.get(\"/venus\", function(req, res){","    res.render(\"venus.html\");","});","","app.get(\"/earth\", function(req, res){","    res.render(\"earth.html\");","});","","app.get(\"/mars\", function(req, res){","    res.render(\"mars.html\");","});","","app.get(\"/jupiter\", function(req, res){","    res.render(\"jupiter.html\");","});","","app.get(\"/saturn\", function(req, res){","    res.render(\"saturn.html\");","});","","app.get(\"/uranus\", function(req, res){","    res.render(\"uranus.html\");","});","","app.get(\"/neptune\", function(req, res){","    res.render(\"neptune.html\");","});","","/* The handler for undefined routes */","app.get(\"*\", function(req, res){","   res.send(\"<h2 style='color: red;'> Sorry, Page not found !</h2>\"); ","});","","/* Start the application server */","app.listen(process.env.PORT || 3000, function(){","    console.log(\"Server has been started\");","})"],"id":1}],[{"start":{"row":11,"column":0},"end":{"row":45,"column":3},"action":"remove","lines":["app.get(\"/home\", function(req, res){","    res.render(\"index.html\");","});","","app.get(\"/mercury\", function(req, res){","    res.render(\"mercury.html\");","});","","app.get(\"/venus\", function(req, res){","    res.render(\"venus.html\");","});","","app.get(\"/earth\", function(req, res){","    res.render(\"earth.html\");","});","","app.get(\"/mars\", function(req, res){","    res.render(\"mars.html\");","});","","app.get(\"/jupiter\", function(req, res){","    res.render(\"jupiter.html\");","});","","app.get(\"/saturn\", function(req, res){","    res.render(\"saturn.html\");","});","","app.get(\"/uranus\", function(req, res){","    res.render(\"uranus.html\");","});","","app.get(\"/neptune\", function(req, res){","    res.render(\"neptune.html\");","});"],"id":2},{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"remove","lines":["",""]},{"start":{"row":9,"column":3},"end":{"row":10,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":102.091796875,"selection":{"start":{"row":13,"column":13},"end":{"row":13,"column":66},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1584749928638,"hash":"e799389f7553308aabf391e411bd31f6d8df78a0"}