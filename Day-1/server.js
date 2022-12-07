const express = require('express')
const app = express()

// app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     console.log('here')
//     // res.sendStatus(100)
//     // res.send('hiii')
//     // res.json({message:"Error"})
//     // res.download('server.js')
//     res.render("index", {text: "world"})
// })

// app.get("/users", (req, res) => {
//     res.send("User List")
// })

// app.get("/users/new", (req, res) => {
//     res.send("Users New Form")
// })

const userRouter = require('./routes/users.js')

app.use("/users", userRouter)

app.listen(3000)