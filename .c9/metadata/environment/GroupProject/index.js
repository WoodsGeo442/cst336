{"filter":false,"title":"index.js","tooltip":"/GroupProject/index.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":63,"column":28},"end":{"row":63,"column":30},"action":"insert","lines":["()"],"id":73}],[{"start":{"row":63,"column":29},"end":{"row":63,"column":30},"action":"insert","lines":["r"],"id":74},{"start":{"row":63,"column":30},"end":{"row":63,"column":31},"action":"insert","lines":["e"]},{"start":{"row":63,"column":31},"end":{"row":63,"column":32},"action":"insert","lines":["q"]},{"start":{"row":63,"column":32},"end":{"row":63,"column":33},"action":"insert","lines":[","]}],[{"start":{"row":63,"column":33},"end":{"row":63,"column":34},"action":"insert","lines":[" "],"id":75},{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"insert","lines":["r"]},{"start":{"row":63,"column":35},"end":{"row":63,"column":36},"action":"insert","lines":["e"]},{"start":{"row":63,"column":36},"end":{"row":63,"column":37},"action":"insert","lines":["s"]}],[{"start":{"row":63,"column":38},"end":{"row":63,"column":40},"action":"insert","lines":["{}"],"id":76}],[{"start":{"row":63,"column":39},"end":{"row":65,"column":0},"action":"insert","lines":["","    ",""],"id":77}],[{"start":{"row":64,"column":4},"end":{"row":64,"column":5},"action":"insert","lines":["r"],"id":78},{"start":{"row":64,"column":5},"end":{"row":64,"column":6},"action":"insert","lines":["e"]},{"start":{"row":64,"column":6},"end":{"row":64,"column":7},"action":"insert","lines":["s"]},{"start":{"row":64,"column":7},"end":{"row":64,"column":8},"action":"insert","lines":["."]},{"start":{"row":64,"column":8},"end":{"row":64,"column":9},"action":"insert","lines":["r"]},{"start":{"row":64,"column":9},"end":{"row":64,"column":10},"action":"insert","lines":["e"]},{"start":{"row":64,"column":10},"end":{"row":64,"column":11},"action":"insert","lines":["n"]},{"start":{"row":64,"column":11},"end":{"row":64,"column":12},"action":"insert","lines":["d"]}],[{"start":{"row":64,"column":12},"end":{"row":64,"column":13},"action":"insert","lines":["e"],"id":79},{"start":{"row":64,"column":13},"end":{"row":64,"column":14},"action":"insert","lines":["r"]}],[{"start":{"row":64,"column":14},"end":{"row":64,"column":16},"action":"insert","lines":["()"],"id":80}],[{"start":{"row":64,"column":15},"end":{"row":64,"column":17},"action":"insert","lines":["''"],"id":81}],[{"start":{"row":64,"column":16},"end":{"row":64,"column":17},"action":"insert","lines":["r"],"id":82},{"start":{"row":64,"column":17},"end":{"row":64,"column":18},"action":"insert","lines":["e"]},{"start":{"row":64,"column":18},"end":{"row":64,"column":19},"action":"insert","lines":["s"]},{"start":{"row":64,"column":19},"end":{"row":64,"column":20},"action":"insert","lines":["u"]},{"start":{"row":64,"column":20},"end":{"row":64,"column":21},"action":"insert","lines":["l"]},{"start":{"row":64,"column":21},"end":{"row":64,"column":22},"action":"insert","lines":["t"]},{"start":{"row":64,"column":22},"end":{"row":64,"column":23},"action":"insert","lines":["s"]}],[{"start":{"row":64,"column":25},"end":{"row":64,"column":26},"action":"insert","lines":[";"],"id":83}],[{"start":{"row":74,"column":3},"end":{"row":75,"column":0},"action":"insert","lines":["",""],"id":84},{"start":{"row":75,"column":0},"end":{"row":76,"column":0},"action":"insert","lines":["",""]},{"start":{"row":76,"column":0},"end":{"row":77,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":77,"column":0},"end":{"row":89,"column":3},"action":"insert","lines":["app.get('/', function(req, res){","  var sql = 'select country from l9_author';","    connection.query(sql, function(error, results) {","        if(error) throw error;","        var arr = [];","        results.forEach(function(r) {","            if (!arr.includes(r.country)) {","                arr.push(r.country);","            }","        });","        res.render('home', {countries: arr});","    });","});"],"id":85}],[{"start":{"row":51,"column":32},"end":{"row":52,"column":0},"action":"insert","lines":["",""],"id":86},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"remove","lines":["    "],"id":87},{"start":{"row":51,"column":32},"end":{"row":52,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":51,"column":32},"end":{"row":52,"column":0},"action":"insert","lines":["",""],"id":88},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":52,"column":4},"end":{"row":62,"column":7},"action":"insert","lines":["var sql = 'select country from l9_author';","    connection.query(sql, function(error, results) {","        if(error) throw error;","        var arr = [];","        results.forEach(function(r) {","            if (!arr.includes(r.country)) {","                arr.push(r.country);","            }","        });","        res.render('home', {countries: arr});","    });"],"id":89}],[{"start":{"row":52,"column":4},"end":{"row":52,"column":7},"action":"insert","lines":["// "],"id":90},{"start":{"row":53,"column":4},"end":{"row":53,"column":7},"action":"insert","lines":["// "]},{"start":{"row":54,"column":4},"end":{"row":54,"column":7},"action":"insert","lines":["// "]},{"start":{"row":55,"column":4},"end":{"row":55,"column":7},"action":"insert","lines":["// "]},{"start":{"row":56,"column":4},"end":{"row":56,"column":7},"action":"insert","lines":["// "]},{"start":{"row":57,"column":4},"end":{"row":57,"column":7},"action":"insert","lines":["// "]},{"start":{"row":58,"column":4},"end":{"row":58,"column":7},"action":"insert","lines":["// "]},{"start":{"row":59,"column":4},"end":{"row":59,"column":7},"action":"insert","lines":["// "]},{"start":{"row":60,"column":4},"end":{"row":60,"column":7},"action":"insert","lines":["// "]},{"start":{"row":61,"column":4},"end":{"row":61,"column":7},"action":"insert","lines":["// "]},{"start":{"row":62,"column":4},"end":{"row":62,"column":7},"action":"insert","lines":["// "]}],[{"start":{"row":68,"column":2},"end":{"row":69,"column":0},"action":"insert","lines":["",""],"id":91},{"start":{"row":69,"column":0},"end":{"row":70,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":70,"column":0},"end":{"row":82,"column":3},"action":"insert","lines":["app.post('/login', async function(req, res){","    let isUserExist   = await checkUsername(req.body.username);","    let hashedPasswd  = isUserExist.length > 0 ? isUserExist[0].password : '';","    let passwordMatch = await checkPassword(req.body.password, hashedPasswd);","    if(passwordMatch){","        req.session.authenticated = true;","        req.session.user = isUserExist[0].username;","        res.redirect('/welcome');","    }","    else{","        res.render('login', {error: true});","    }","});"],"id":92}],[{"start":{"row":32,"column":34},"end":{"row":32,"column":35},"action":"remove","lines":["s"],"id":93},{"start":{"row":32,"column":33},"end":{"row":32,"column":34},"action":"remove","lines":["r"]},{"start":{"row":32,"column":32},"end":{"row":32,"column":33},"action":"remove","lines":["e"]},{"start":{"row":32,"column":31},"end":{"row":32,"column":32},"action":"remove","lines":["s"]},{"start":{"row":32,"column":30},"end":{"row":32,"column":31},"action":"remove","lines":["u"]}],[{"start":{"row":32,"column":30},"end":{"row":32,"column":31},"action":"insert","lines":["l"],"id":94},{"start":{"row":32,"column":31},"end":{"row":32,"column":32},"action":"insert","lines":["o"]},{"start":{"row":32,"column":32},"end":{"row":32,"column":33},"action":"insert","lines":["g"]},{"start":{"row":32,"column":33},"end":{"row":32,"column":34},"action":"insert","lines":["i"]},{"start":{"row":32,"column":34},"end":{"row":32,"column":35},"action":"insert","lines":["n"]},{"start":{"row":32,"column":35},"end":{"row":32,"column":36},"action":"insert","lines":["I"]},{"start":{"row":32,"column":36},"end":{"row":32,"column":37},"action":"insert","lines":["n"]},{"start":{"row":32,"column":37},"end":{"row":32,"column":38},"action":"insert","lines":["f"]},{"start":{"row":32,"column":38},"end":{"row":32,"column":39},"action":"insert","lines":["o"]}],[{"start":{"row":32,"column":55},"end":{"row":32,"column":56},"action":"remove","lines":["?"],"id":95}],[{"start":{"row":32,"column":56},"end":{"row":32,"column":57},"action":"insert","lines":[" "],"id":96},{"start":{"row":32,"column":57},"end":{"row":32,"column":58},"action":"insert","lines":["+"]}],[{"start":{"row":32,"column":58},"end":{"row":32,"column":59},"action":"insert","lines":[" "],"id":97}],[{"start":{"row":32,"column":59},"end":{"row":32,"column":60},"action":"insert","lines":["u"],"id":98},{"start":{"row":32,"column":60},"end":{"row":32,"column":61},"action":"insert","lines":["s"]},{"start":{"row":32,"column":61},"end":{"row":32,"column":62},"action":"insert","lines":["e"]},{"start":{"row":32,"column":62},"end":{"row":32,"column":63},"action":"insert","lines":["r"]},{"start":{"row":32,"column":63},"end":{"row":32,"column":64},"action":"insert","lines":["n"]},{"start":{"row":32,"column":64},"end":{"row":32,"column":65},"action":"insert","lines":["a"]},{"start":{"row":32,"column":65},"end":{"row":32,"column":66},"action":"insert","lines":["m"]},{"start":{"row":32,"column":66},"end":{"row":32,"column":67},"action":"insert","lines":["e"]}],[{"start":{"row":71,"column":63},"end":{"row":72,"column":0},"action":"insert","lines":["",""],"id":99},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":72,"column":4},"end":{"row":72,"column":48},"action":"insert","lines":["console.log('MySQL SQL Statement = ', stmt);"],"id":100}],[{"start":{"row":72,"column":16},"end":{"row":72,"column":46},"action":"remove","lines":["'MySQL SQL Statement = ', stmt"],"id":101},{"start":{"row":72,"column":16},"end":{"row":72,"column":17},"action":"insert","lines":["i"]},{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"insert","lines":["s"]},{"start":{"row":72,"column":18},"end":{"row":72,"column":19},"action":"insert","lines":["U"]},{"start":{"row":72,"column":19},"end":{"row":72,"column":20},"action":"insert","lines":["s"]},{"start":{"row":72,"column":20},"end":{"row":72,"column":21},"action":"insert","lines":["e"]},{"start":{"row":72,"column":21},"end":{"row":72,"column":22},"action":"insert","lines":["r"]}],[{"start":{"row":72,"column":22},"end":{"row":72,"column":23},"action":"insert","lines":["E"],"id":102},{"start":{"row":72,"column":23},"end":{"row":72,"column":24},"action":"insert","lines":["x"]},{"start":{"row":72,"column":24},"end":{"row":72,"column":25},"action":"insert","lines":["i"]},{"start":{"row":72,"column":25},"end":{"row":72,"column":26},"action":"insert","lines":["s"]},{"start":{"row":72,"column":26},"end":{"row":72,"column":27},"action":"insert","lines":["t"]}],[{"start":{"row":72,"column":2},"end":{"row":72,"column":29},"action":"remove","lines":["  console.log(isUserExist);"],"id":103},{"start":{"row":72,"column":1},"end":{"row":72,"column":2},"action":"remove","lines":[" "]},{"start":{"row":72,"column":0},"end":{"row":72,"column":1},"action":"remove","lines":[" "]},{"start":{"row":71,"column":63},"end":{"row":72,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":77,"column":22},"end":{"row":77,"column":30},"action":"remove","lines":["/welcome"],"id":104},{"start":{"row":77,"column":22},"end":{"row":77,"column":23},"action":"insert","lines":["l"]},{"start":{"row":77,"column":23},"end":{"row":77,"column":24},"action":"insert","lines":["o"]},{"start":{"row":77,"column":24},"end":{"row":77,"column":25},"action":"insert","lines":["g"]},{"start":{"row":77,"column":25},"end":{"row":77,"column":26},"action":"insert","lines":["i"]},{"start":{"row":77,"column":26},"end":{"row":77,"column":27},"action":"insert","lines":["n"]}],[{"start":{"row":80,"column":20},"end":{"row":80,"column":25},"action":"remove","lines":["login"],"id":105},{"start":{"row":80,"column":20},"end":{"row":80,"column":21},"action":"insert","lines":["w"]},{"start":{"row":80,"column":21},"end":{"row":80,"column":22},"action":"insert","lines":["e"]},{"start":{"row":80,"column":22},"end":{"row":80,"column":23},"action":"insert","lines":["l"]},{"start":{"row":80,"column":23},"end":{"row":80,"column":24},"action":"insert","lines":["c"]},{"start":{"row":80,"column":24},"end":{"row":80,"column":25},"action":"insert","lines":["o"]},{"start":{"row":80,"column":25},"end":{"row":80,"column":26},"action":"insert","lines":["m"]},{"start":{"row":80,"column":26},"end":{"row":80,"column":27},"action":"insert","lines":["e"]}],[{"start":{"row":99,"column":3},"end":{"row":114,"column":3},"action":"remove","lines":["","","","app.get('/', function(req, res){","  var sql = 'select country from l9_author';","    connection.query(sql, function(error, results) {","        if(error) throw error;","        var arr = [];","        results.forEach(function(r) {","            if (!arr.includes(r.country)) {","                arr.push(r.country);","            }","        });","        res.render('home', {countries: arr});","    });","});"],"id":107}],[{"start":{"row":77,"column":26},"end":{"row":77,"column":27},"action":"remove","lines":["n"],"id":108},{"start":{"row":77,"column":25},"end":{"row":77,"column":26},"action":"remove","lines":["i"]},{"start":{"row":77,"column":24},"end":{"row":77,"column":25},"action":"remove","lines":["g"]},{"start":{"row":77,"column":23},"end":{"row":77,"column":24},"action":"remove","lines":["o"]},{"start":{"row":77,"column":22},"end":{"row":77,"column":23},"action":"remove","lines":["l"]}],[{"start":{"row":77,"column":22},"end":{"row":77,"column":23},"action":"insert","lines":["w"],"id":109},{"start":{"row":77,"column":23},"end":{"row":77,"column":24},"action":"insert","lines":["e"]},{"start":{"row":77,"column":24},"end":{"row":77,"column":25},"action":"insert","lines":["l"]},{"start":{"row":77,"column":25},"end":{"row":77,"column":26},"action":"insert","lines":["c"]},{"start":{"row":77,"column":26},"end":{"row":77,"column":27},"action":"insert","lines":["o"]},{"start":{"row":77,"column":27},"end":{"row":77,"column":28},"action":"insert","lines":["m"]},{"start":{"row":77,"column":28},"end":{"row":77,"column":29},"action":"insert","lines":["e"]}],[{"start":{"row":80,"column":20},"end":{"row":80,"column":27},"action":"remove","lines":["welcome"],"id":110},{"start":{"row":80,"column":20},"end":{"row":80,"column":21},"action":"insert","lines":["l"]},{"start":{"row":80,"column":21},"end":{"row":80,"column":22},"action":"insert","lines":["o"]},{"start":{"row":80,"column":22},"end":{"row":80,"column":23},"action":"insert","lines":["g"]},{"start":{"row":80,"column":23},"end":{"row":80,"column":24},"action":"insert","lines":["i"]},{"start":{"row":80,"column":24},"end":{"row":80,"column":25},"action":"insert","lines":["n"]}],[{"start":{"row":71,"column":63},"end":{"row":72,"column":0},"action":"insert","lines":["",""],"id":111},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"insert","lines":["    "]},{"start":{"row":72,"column":4},"end":{"row":72,"column":5},"action":"insert","lines":["c"]},{"start":{"row":72,"column":5},"end":{"row":72,"column":6},"action":"insert","lines":["o"]},{"start":{"row":72,"column":6},"end":{"row":72,"column":7},"action":"insert","lines":["n"]},{"start":{"row":72,"column":7},"end":{"row":72,"column":8},"action":"insert","lines":["s"]},{"start":{"row":72,"column":8},"end":{"row":72,"column":9},"action":"insert","lines":["o"]}],[{"start":{"row":72,"column":9},"end":{"row":72,"column":10},"action":"insert","lines":["l"],"id":112},{"start":{"row":72,"column":10},"end":{"row":72,"column":11},"action":"insert","lines":["e"]},{"start":{"row":72,"column":11},"end":{"row":72,"column":12},"action":"insert","lines":["."]},{"start":{"row":72,"column":12},"end":{"row":72,"column":13},"action":"insert","lines":["l"]},{"start":{"row":72,"column":13},"end":{"row":72,"column":14},"action":"insert","lines":["o"]},{"start":{"row":72,"column":14},"end":{"row":72,"column":15},"action":"insert","lines":["g"]}],[{"start":{"row":72,"column":15},"end":{"row":72,"column":17},"action":"insert","lines":["()"],"id":113}],[{"start":{"row":72,"column":16},"end":{"row":72,"column":17},"action":"insert","lines":["u"],"id":114},{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"insert","lines":["s"]}],[{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"remove","lines":["s"],"id":115}],[{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"insert","lines":["i"],"id":116},{"start":{"row":72,"column":18},"end":{"row":72,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":72,"column":18},"end":{"row":72,"column":19},"action":"remove","lines":["s"],"id":117},{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"remove","lines":["i"]},{"start":{"row":72,"column":16},"end":{"row":72,"column":17},"action":"remove","lines":["u"]}],[{"start":{"row":72,"column":16},"end":{"row":72,"column":17},"action":"insert","lines":["i"],"id":118},{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"insert","lines":["s"]},{"start":{"row":72,"column":18},"end":{"row":72,"column":19},"action":"insert","lines":["U"]},{"start":{"row":72,"column":19},"end":{"row":72,"column":20},"action":"insert","lines":["s"]},{"start":{"row":72,"column":20},"end":{"row":72,"column":21},"action":"insert","lines":["e"]},{"start":{"row":72,"column":21},"end":{"row":72,"column":22},"action":"insert","lines":["r"]},{"start":{"row":72,"column":22},"end":{"row":72,"column":23},"action":"insert","lines":["E"]}],[{"start":{"row":72,"column":16},"end":{"row":72,"column":23},"action":"remove","lines":["isUserE"],"id":119},{"start":{"row":72,"column":16},"end":{"row":72,"column":27},"action":"insert","lines":["isUserExist"]}],[{"start":{"row":72,"column":28},"end":{"row":72,"column":29},"action":"insert","lines":[";"],"id":120}],[{"start":{"row":32,"column":4},"end":{"row":32,"column":68},"action":"remove","lines":["let stmt = 'SELECT * FROM loginInfo WHERE username=' + username;"],"id":121},{"start":{"row":32,"column":4},"end":{"row":32,"column":54},"action":"insert","lines":["let stmt = 'SELECT * FROM users WHERE username=?';"]}],[{"start":{"row":32,"column":30},"end":{"row":32,"column":35},"action":"remove","lines":["users"],"id":122},{"start":{"row":32,"column":30},"end":{"row":32,"column":31},"action":"insert","lines":["l"]},{"start":{"row":32,"column":31},"end":{"row":32,"column":32},"action":"insert","lines":["o"]},{"start":{"row":32,"column":32},"end":{"row":32,"column":33},"action":"insert","lines":["g"]},{"start":{"row":32,"column":33},"end":{"row":32,"column":34},"action":"insert","lines":["i"]},{"start":{"row":32,"column":34},"end":{"row":32,"column":35},"action":"insert","lines":["n"]},{"start":{"row":32,"column":35},"end":{"row":32,"column":36},"action":"insert","lines":["I"]},{"start":{"row":32,"column":36},"end":{"row":32,"column":37},"action":"insert","lines":["n"]},{"start":{"row":32,"column":37},"end":{"row":32,"column":38},"action":"insert","lines":["f"]},{"start":{"row":32,"column":38},"end":{"row":32,"column":39},"action":"insert","lines":["o"]}],[{"start":{"row":74,"column":4},"end":{"row":75,"column":0},"action":"insert","lines":["",""],"id":123},{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":74,"column":4},"end":{"row":74,"column":29},"action":"insert","lines":["console.log(isUserExist);"],"id":124}],[{"start":{"row":74,"column":26},"end":{"row":74,"column":27},"action":"remove","lines":["t"],"id":125},{"start":{"row":74,"column":25},"end":{"row":74,"column":26},"action":"remove","lines":["s"]},{"start":{"row":74,"column":24},"end":{"row":74,"column":25},"action":"remove","lines":["i"]},{"start":{"row":74,"column":23},"end":{"row":74,"column":24},"action":"remove","lines":["x"]},{"start":{"row":74,"column":22},"end":{"row":74,"column":23},"action":"remove","lines":["E"]},{"start":{"row":74,"column":21},"end":{"row":74,"column":22},"action":"remove","lines":["r"]},{"start":{"row":74,"column":20},"end":{"row":74,"column":21},"action":"remove","lines":["e"]},{"start":{"row":74,"column":19},"end":{"row":74,"column":20},"action":"remove","lines":["s"]},{"start":{"row":74,"column":18},"end":{"row":74,"column":19},"action":"remove","lines":["U"]},{"start":{"row":74,"column":17},"end":{"row":74,"column":18},"action":"remove","lines":["s"]},{"start":{"row":74,"column":16},"end":{"row":74,"column":17},"action":"remove","lines":["i"]}],[{"start":{"row":74,"column":16},"end":{"row":74,"column":17},"action":"insert","lines":["h"],"id":126},{"start":{"row":74,"column":17},"end":{"row":74,"column":18},"action":"insert","lines":["a"]},{"start":{"row":74,"column":18},"end":{"row":74,"column":19},"action":"insert","lines":["s"]},{"start":{"row":74,"column":19},"end":{"row":74,"column":20},"action":"insert","lines":["h"]},{"start":{"row":74,"column":20},"end":{"row":74,"column":21},"action":"insert","lines":["e"]},{"start":{"row":74,"column":21},"end":{"row":74,"column":22},"action":"insert","lines":["d"]}],[{"start":{"row":74,"column":22},"end":{"row":74,"column":23},"action":"insert","lines":["P"],"id":127},{"start":{"row":74,"column":23},"end":{"row":74,"column":24},"action":"insert","lines":["a"]},{"start":{"row":74,"column":24},"end":{"row":74,"column":25},"action":"insert","lines":["s"]},{"start":{"row":74,"column":25},"end":{"row":74,"column":26},"action":"insert","lines":["s"]},{"start":{"row":74,"column":26},"end":{"row":74,"column":27},"action":"insert","lines":["w"]},{"start":{"row":74,"column":27},"end":{"row":74,"column":28},"action":"insert","lines":["d"]}],[{"start":{"row":81,"column":9},"end":{"row":82,"column":0},"action":"insert","lines":["",""],"id":128},{"start":{"row":82,"column":0},"end":{"row":82,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":82,"column":8},"end":{"row":82,"column":34},"action":"insert","lines":["console.log(hashedPasswd);"],"id":129}],[{"start":{"row":82,"column":31},"end":{"row":82,"column":32},"action":"remove","lines":["d"],"id":130},{"start":{"row":82,"column":30},"end":{"row":82,"column":31},"action":"remove","lines":["w"]},{"start":{"row":82,"column":29},"end":{"row":82,"column":30},"action":"remove","lines":["s"]},{"start":{"row":82,"column":28},"end":{"row":82,"column":29},"action":"remove","lines":["s"]},{"start":{"row":82,"column":27},"end":{"row":82,"column":28},"action":"remove","lines":["a"]},{"start":{"row":82,"column":26},"end":{"row":82,"column":27},"action":"remove","lines":["P"]},{"start":{"row":82,"column":25},"end":{"row":82,"column":26},"action":"remove","lines":["d"]},{"start":{"row":82,"column":24},"end":{"row":82,"column":25},"action":"remove","lines":["e"]},{"start":{"row":82,"column":23},"end":{"row":82,"column":24},"action":"remove","lines":["h"]},{"start":{"row":82,"column":22},"end":{"row":82,"column":23},"action":"remove","lines":["s"]},{"start":{"row":82,"column":21},"end":{"row":82,"column":22},"action":"remove","lines":["a"]}],[{"start":{"row":82,"column":20},"end":{"row":82,"column":21},"action":"remove","lines":["h"],"id":131}],[{"start":{"row":82,"column":20},"end":{"row":82,"column":21},"action":"insert","lines":["p"],"id":132},{"start":{"row":82,"column":21},"end":{"row":82,"column":22},"action":"insert","lines":["a"]},{"start":{"row":82,"column":22},"end":{"row":82,"column":23},"action":"insert","lines":["s"]},{"start":{"row":82,"column":23},"end":{"row":82,"column":24},"action":"insert","lines":["s"]},{"start":{"row":82,"column":24},"end":{"row":82,"column":25},"action":"insert","lines":["w"]},{"start":{"row":82,"column":25},"end":{"row":82,"column":26},"action":"insert","lines":["o"]},{"start":{"row":82,"column":26},"end":{"row":82,"column":27},"action":"insert","lines":["r"]},{"start":{"row":82,"column":27},"end":{"row":82,"column":28},"action":"insert","lines":["d"]}],[{"start":{"row":82,"column":28},"end":{"row":82,"column":29},"action":"insert","lines":["M"],"id":133},{"start":{"row":82,"column":29},"end":{"row":82,"column":30},"action":"insert","lines":["a"]},{"start":{"row":82,"column":30},"end":{"row":82,"column":31},"action":"insert","lines":["t"]},{"start":{"row":82,"column":31},"end":{"row":82,"column":32},"action":"insert","lines":["h"]},{"start":{"row":82,"column":32},"end":{"row":82,"column":33},"action":"insert","lines":["c"]}],[{"start":{"row":82,"column":32},"end":{"row":82,"column":33},"action":"remove","lines":["c"],"id":134},{"start":{"row":82,"column":31},"end":{"row":82,"column":32},"action":"remove","lines":["h"]}],[{"start":{"row":82,"column":31},"end":{"row":82,"column":32},"action":"insert","lines":["c"],"id":135},{"start":{"row":82,"column":32},"end":{"row":82,"column":33},"action":"insert","lines":["h"]}],[{"start":{"row":82,"column":35},"end":{"row":83,"column":0},"action":"insert","lines":["",""],"id":136},{"start":{"row":83,"column":0},"end":{"row":83,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":83,"column":8},"end":{"row":83,"column":9},"action":"insert","lines":["c"],"id":137},{"start":{"row":83,"column":9},"end":{"row":83,"column":10},"action":"insert","lines":["o"]},{"start":{"row":83,"column":10},"end":{"row":83,"column":11},"action":"insert","lines":["n"]},{"start":{"row":83,"column":11},"end":{"row":83,"column":12},"action":"insert","lines":["s"]},{"start":{"row":83,"column":12},"end":{"row":83,"column":13},"action":"insert","lines":["o"]},{"start":{"row":83,"column":13},"end":{"row":83,"column":14},"action":"insert","lines":["l"]},{"start":{"row":83,"column":14},"end":{"row":83,"column":15},"action":"insert","lines":["e"]},{"start":{"row":83,"column":15},"end":{"row":83,"column":16},"action":"insert","lines":["."]}],[{"start":{"row":83,"column":16},"end":{"row":83,"column":17},"action":"insert","lines":["l"],"id":138},{"start":{"row":83,"column":17},"end":{"row":83,"column":18},"action":"insert","lines":["o"]},{"start":{"row":83,"column":18},"end":{"row":83,"column":19},"action":"insert","lines":["g"]}],[{"start":{"row":83,"column":19},"end":{"row":83,"column":21},"action":"insert","lines":["()"],"id":139}],[{"start":{"row":83,"column":20},"end":{"row":83,"column":51},"action":"insert","lines":["req.body.password, hashedPasswd"],"id":140}],[{"start":{"row":83,"column":37},"end":{"row":83,"column":51},"action":"remove","lines":[", hashedPasswd"],"id":141}],[{"start":{"row":83,"column":7},"end":{"row":83,"column":38},"action":"remove","lines":[" console.log(req.body.password)"],"id":142},{"start":{"row":83,"column":6},"end":{"row":83,"column":7},"action":"remove","lines":[" "]},{"start":{"row":83,"column":5},"end":{"row":83,"column":6},"action":"remove","lines":[" "]},{"start":{"row":83,"column":4},"end":{"row":83,"column":5},"action":"remove","lines":[" "]},{"start":{"row":83,"column":0},"end":{"row":83,"column":4},"action":"remove","lines":["    "]},{"start":{"row":82,"column":35},"end":{"row":83,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":7},"action":"insert","lines":["// "],"id":143},{"start":{"row":43,"column":4},"end":{"row":43,"column":6},"action":"insert","lines":["//"]},{"start":{"row":44,"column":4},"end":{"row":44,"column":7},"action":"insert","lines":["// "]},{"start":{"row":45,"column":4},"end":{"row":45,"column":7},"action":"insert","lines":["// "]},{"start":{"row":46,"column":4},"end":{"row":46,"column":6},"action":"insert","lines":["//"]},{"start":{"row":47,"column":4},"end":{"row":47,"column":7},"action":"insert","lines":["// "]}],[{"start":{"row":47,"column":10},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":145},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":48,"column":4},"end":{"row":48,"column":5},"action":"insert","lines":["i"],"id":146},{"start":{"row":48,"column":5},"end":{"row":48,"column":6},"action":"insert","lines":["f"]}],[{"start":{"row":48,"column":6},"end":{"row":48,"column":8},"action":"insert","lines":["()"],"id":147}],[{"start":{"row":48,"column":7},"end":{"row":48,"column":8},"action":"insert","lines":["p"],"id":148},{"start":{"row":48,"column":8},"end":{"row":48,"column":9},"action":"insert","lines":["a"]},{"start":{"row":48,"column":9},"end":{"row":48,"column":10},"action":"insert","lines":["r"]},{"start":{"row":48,"column":10},"end":{"row":48,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":48,"column":10},"end":{"row":48,"column":11},"action":"remove","lines":["r"],"id":149}],[{"start":{"row":48,"column":10},"end":{"row":48,"column":11},"action":"insert","lines":["="],"id":150}],[{"start":{"row":48,"column":10},"end":{"row":48,"column":11},"action":"remove","lines":["="],"id":151},{"start":{"row":48,"column":9},"end":{"row":48,"column":10},"action":"remove","lines":["r"]}],[{"start":{"row":48,"column":9},"end":{"row":48,"column":10},"action":"insert","lines":["s"],"id":152},{"start":{"row":48,"column":10},"end":{"row":48,"column":11},"action":"insert","lines":["s"]},{"start":{"row":48,"column":11},"end":{"row":48,"column":12},"action":"insert","lines":["w"]},{"start":{"row":48,"column":12},"end":{"row":48,"column":13},"action":"insert","lines":["o"]},{"start":{"row":48,"column":13},"end":{"row":48,"column":14},"action":"insert","lines":["r"]},{"start":{"row":48,"column":14},"end":{"row":48,"column":15},"action":"insert","lines":["d"]}],[{"start":{"row":48,"column":15},"end":{"row":48,"column":16},"action":"insert","lines":[" "],"id":153},{"start":{"row":48,"column":16},"end":{"row":48,"column":17},"action":"insert","lines":["="]},{"start":{"row":48,"column":17},"end":{"row":48,"column":18},"action":"insert","lines":["="]}],[{"start":{"row":48,"column":3},"end":{"row":48,"column":19},"action":"remove","lines":[" if(password ==)"],"id":166}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":7},"action":"remove","lines":["// "],"id":167},{"start":{"row":43,"column":4},"end":{"row":43,"column":7},"action":"remove","lines":["// "]},{"start":{"row":44,"column":4},"end":{"row":44,"column":7},"action":"remove","lines":["// "]},{"start":{"row":45,"column":4},"end":{"row":45,"column":7},"action":"remove","lines":["// "]},{"start":{"row":46,"column":4},"end":{"row":46,"column":7},"action":"remove","lines":["// "]},{"start":{"row":47,"column":4},"end":{"row":47,"column":7},"action":"remove","lines":["// "]}],[{"start":{"row":48,"column":2},"end":{"row":48,"column":3},"action":"remove","lines":[" "],"id":168},{"start":{"row":48,"column":1},"end":{"row":48,"column":2},"action":"remove","lines":[" "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":1},"action":"remove","lines":[" "]},{"start":{"row":47,"column":7},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":42,"column":4},"end":{"row":42,"column":7},"action":"insert","lines":["// "],"id":178},{"start":{"row":43,"column":4},"end":{"row":43,"column":7},"action":"insert","lines":["// "]},{"start":{"row":44,"column":4},"end":{"row":44,"column":7},"action":"insert","lines":["// "]},{"start":{"row":45,"column":4},"end":{"row":45,"column":7},"action":"insert","lines":["// "]},{"start":{"row":46,"column":4},"end":{"row":46,"column":7},"action":"insert","lines":["// "]},{"start":{"row":47,"column":4},"end":{"row":47,"column":7},"action":"insert","lines":["// "]}],[{"start":{"row":47,"column":10},"end":{"row":48,"column":0},"action":"insert","lines":["",""],"id":179},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"insert","lines":["    "]},{"start":{"row":48,"column":4},"end":{"row":48,"column":5},"action":"insert","lines":["i"]},{"start":{"row":48,"column":5},"end":{"row":48,"column":6},"action":"insert","lines":["f"]}],[{"start":{"row":48,"column":6},"end":{"row":48,"column":8},"action":"insert","lines":["()"],"id":180}],[{"start":{"row":48,"column":7},"end":{"row":48,"column":8},"action":"insert","lines":["p"],"id":181},{"start":{"row":48,"column":8},"end":{"row":48,"column":9},"action":"insert","lines":["a"]},{"start":{"row":48,"column":9},"end":{"row":48,"column":10},"action":"insert","lines":["s"]},{"start":{"row":48,"column":10},"end":{"row":48,"column":11},"action":"insert","lines":["s"]},{"start":{"row":48,"column":11},"end":{"row":48,"column":12},"action":"insert","lines":["w"]},{"start":{"row":48,"column":12},"end":{"row":48,"column":13},"action":"insert","lines":["o"]},{"start":{"row":48,"column":13},"end":{"row":48,"column":14},"action":"insert","lines":["r"]},{"start":{"row":48,"column":14},"end":{"row":48,"column":15},"action":"insert","lines":["d"]}],[{"start":{"row":48,"column":15},"end":{"row":48,"column":16},"action":"insert","lines":[" "],"id":182},{"start":{"row":48,"column":16},"end":{"row":48,"column":17},"action":"insert","lines":["="]},{"start":{"row":48,"column":17},"end":{"row":48,"column":18},"action":"insert","lines":["="]}],[{"start":{"row":48,"column":18},"end":{"row":48,"column":19},"action":"insert","lines":[" "],"id":183},{"start":{"row":48,"column":19},"end":{"row":48,"column":20},"action":"insert","lines":["h"]},{"start":{"row":48,"column":20},"end":{"row":48,"column":21},"action":"insert","lines":["a"]},{"start":{"row":48,"column":21},"end":{"row":48,"column":22},"action":"insert","lines":["s"]},{"start":{"row":48,"column":22},"end":{"row":48,"column":23},"action":"insert","lines":["h"]}],[{"start":{"row":48,"column":24},"end":{"row":48,"column":25},"action":"insert","lines":["{"],"id":184}],[{"start":{"row":48,"column":25},"end":{"row":50,"column":5},"action":"insert","lines":["","        ","    }"],"id":185}],[{"start":{"row":49,"column":8},"end":{"row":49,"column":9},"action":"insert","lines":["r"],"id":186},{"start":{"row":49,"column":9},"end":{"row":49,"column":10},"action":"insert","lines":["t"]},{"start":{"row":49,"column":10},"end":{"row":49,"column":11},"action":"insert","lines":["u"]},{"start":{"row":49,"column":11},"end":{"row":49,"column":12},"action":"insert","lines":["r"]},{"start":{"row":49,"column":12},"end":{"row":49,"column":13},"action":"insert","lines":["n"]}],[{"start":{"row":49,"column":13},"end":{"row":49,"column":14},"action":"insert","lines":[" "],"id":187}],[{"start":{"row":49,"column":13},"end":{"row":49,"column":14},"action":"remove","lines":[" "],"id":188},{"start":{"row":49,"column":12},"end":{"row":49,"column":13},"action":"remove","lines":["n"]},{"start":{"row":49,"column":11},"end":{"row":49,"column":12},"action":"remove","lines":["r"]},{"start":{"row":49,"column":10},"end":{"row":49,"column":11},"action":"remove","lines":["u"]},{"start":{"row":49,"column":9},"end":{"row":49,"column":10},"action":"remove","lines":["t"]}],[{"start":{"row":49,"column":9},"end":{"row":49,"column":10},"action":"insert","lines":["e"],"id":189},{"start":{"row":49,"column":10},"end":{"row":49,"column":11},"action":"insert","lines":["t"]},{"start":{"row":49,"column":11},"end":{"row":49,"column":12},"action":"insert","lines":["u"]},{"start":{"row":49,"column":12},"end":{"row":49,"column":13},"action":"insert","lines":["r"]},{"start":{"row":49,"column":13},"end":{"row":49,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":49,"column":14},"end":{"row":49,"column":15},"action":"insert","lines":[" "],"id":190},{"start":{"row":49,"column":15},"end":{"row":49,"column":16},"action":"insert","lines":["t"]},{"start":{"row":49,"column":16},"end":{"row":49,"column":17},"action":"insert","lines":["r"]},{"start":{"row":49,"column":17},"end":{"row":49,"column":18},"action":"insert","lines":["u"]},{"start":{"row":49,"column":18},"end":{"row":49,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":49,"column":19},"end":{"row":49,"column":20},"action":"insert","lines":[";"],"id":191}],[{"start":{"row":50,"column":5},"end":{"row":50,"column":6},"action":"insert","lines":[" "],"id":192},{"start":{"row":50,"column":6},"end":{"row":50,"column":7},"action":"insert","lines":["e"]},{"start":{"row":50,"column":7},"end":{"row":50,"column":8},"action":"insert","lines":["l"]},{"start":{"row":50,"column":8},"end":{"row":50,"column":9},"action":"insert","lines":["s"]},{"start":{"row":50,"column":9},"end":{"row":50,"column":10},"action":"insert","lines":["e"]}],[{"start":{"row":50,"column":10},"end":{"row":50,"column":11},"action":"insert","lines":[" "],"id":193},{"start":{"row":50,"column":11},"end":{"row":50,"column":12},"action":"insert","lines":["{"]}],[{"start":{"row":50,"column":12},"end":{"row":52,"column":5},"action":"insert","lines":["","        ","    }"],"id":194}],[{"start":{"row":51,"column":8},"end":{"row":51,"column":9},"action":"insert","lines":["r"],"id":195},{"start":{"row":51,"column":9},"end":{"row":51,"column":10},"action":"insert","lines":["e"]},{"start":{"row":51,"column":10},"end":{"row":51,"column":11},"action":"insert","lines":["t"]},{"start":{"row":51,"column":11},"end":{"row":51,"column":12},"action":"insert","lines":["u"]},{"start":{"row":51,"column":12},"end":{"row":51,"column":13},"action":"insert","lines":["r"]},{"start":{"row":51,"column":13},"end":{"row":51,"column":14},"action":"insert","lines":["n"]}],[{"start":{"row":51,"column":14},"end":{"row":51,"column":15},"action":"insert","lines":[" "],"id":196},{"start":{"row":51,"column":15},"end":{"row":51,"column":16},"action":"insert","lines":["f"]},{"start":{"row":51,"column":16},"end":{"row":51,"column":17},"action":"insert","lines":["a"]},{"start":{"row":51,"column":17},"end":{"row":51,"column":18},"action":"insert","lines":["l"]},{"start":{"row":51,"column":18},"end":{"row":51,"column":19},"action":"insert","lines":["s"]},{"start":{"row":51,"column":19},"end":{"row":51,"column":20},"action":"insert","lines":["e"]},{"start":{"row":51,"column":20},"end":{"row":51,"column":21},"action":"insert","lines":[";"]}]]},"ace":{"folds":[],"scrolltop":870,"scrollleft":0,"selection":{"start":{"row":51,"column":21},"end":{"row":51,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":true,"wrapToView":true},"firstLineState":{"row":35,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1588050321811,"hash":"6b7fd39c674de68e9219187ce49f66b4305981ec"}