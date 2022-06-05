const express = require("express")
const app = express()
const port = 3000

app.get("/greeting", (req, res) => {
    res.send("Welcome, stranger");
})

app.get("/greeting/:name", (req, res) => {
    console.log(req.params.name)
    res.send(`What's up, ${req.params.name}`)
})

app.listen(port, () => {
    console.log("Server is running...")
})