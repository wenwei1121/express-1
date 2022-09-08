const bodyParser = require("body-parser")
const routerMember = require("./routes/members")
const routerFavoriteSearch = require("./routes/favoriteSearch")
const express = require("express")
const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers", "auth-token, Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(bodyParser.json())
// app.use(express.json())

// 改用引入 router, 要用 use(basePath, router.js)
app.use("/pipi", routerMember)
app.use("/favoriteSearch", routerFavoriteSearch)

app.listen(3030, () => {
    console.log("Listening 3030 in express");
})