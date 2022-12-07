// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({extended: false})

// app.get('/',function(req,res){
//     res.sendFile(__dirname + "/" + "index.html")
// });

// app.post('/home', urlencodedParser, function(req, res){
//     res.send('<h1>Welcome ' +req.body.username+ '</h1><br><h2>Your Mail Id is ' +req.body.mailId+ '</h2>')
// })

// app.listen(8080)

const express = require('express');
const app = express(); 
const routing = require('./routing.js')
app.use('/', routing)
app.listen(8080)