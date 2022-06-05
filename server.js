const express = require("express")
const app = express()
const port = 3000

// greeting express app
app.get("/greeting", (req, res) => {
    res.send("Welcome, stranger");
})

app.get("/greeting/:name", (req, res) => {
    res.send(`What's up, ${req.params.name}`)
})

// tip calculator express app
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`${req.params.total * req.params.tipPercentage * .01}`)
})

app.listen(port, () => {
    console.log("Server is running...")
})