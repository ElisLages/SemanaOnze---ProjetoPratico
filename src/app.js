const express = require("express")
const app = express ()

app.use(express.json())

const index = require("./routes/index")
const series = require("./routes/seriesRoute")

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Request-with, Content-Type, Accept"
    )
    next()
   
})

app.use("/", index)
app.use("/series", series)

module.exports = app 











