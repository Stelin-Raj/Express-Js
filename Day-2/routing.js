const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

router.get('/youtube', function(req, res){
    res.redirect('https://youtu.be/cORxJb134M8')
})
router.get('/blog', function(req, res){
    res.send('Blog')
})
router.get('/instagram', function(req, res){
    res.send('Instagram')
})

module.exports = router;