const express = require('express')
const router = express.Router()

// router.get('/', (req, res) => {
//     res.send("User list")
// })

// router.get('/new', (req, res) => {
//     res.send("User Form")
// })

// router.post('/post', (req, res) => {
//     res.send("This is post")
// })

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user);
        res.send(`Get user with Id ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Post user with Id ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with Id ${req.params.id}`)
    })

// router.get('/:id', (req, res) =>{
//     req.params.id
//     res.send(`Get user with Id ${req.params.id}`)
// })
// router.post('/:id', (req, res) =>{
//     req.params.id
//     res.send(`post user with Id ${req.params.id}`)
// })
// router.delete('/:id', (req, res) =>{
//     req.params.id
//     res.send(`delete user with Id ${req.params.id}`)
// })

const users = [{ name: 'Stelin' }, { name: 'Stebin' }]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router