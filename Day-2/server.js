const express = require('express')
const app = express()
const router = express.Router();
// const alert = require('alert')

router.use(function (req, res, next) {
    // alert("Welcome");
    console.log('your method is', req.method, 'and the path is', req.url);
    next();
});

router.get('/', function (req, res, next) {
    console.log('first page');
    res.send("Welcome to first page");
    next();
});

router.get('/exit', function (req, res, next) {
    console.log('second page');
    res.send("Welcome to exit page");
    next()
});

app.get('/homepage', function(req, res, next){
    console.log('Running my home page');
    res.send('This is my home page')
})

app.use('/homepage',router);

app.get('*', function(req, res, next){
    const err = new Error('page not found');
    next(err)
})

app.use(function(err, req, res, next){
    console.log(err.stack);
    res.status(500).send('page not found');
})
app.listen(4000);