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


// magic 8 ball express app
const response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/:question", (req, res) => {
    const randomResponse = response[Math.floor(Math.random() * response.length)];
    res.send(`${req.params.question} <h1>${randomResponse}</h1>`)
})

app.listen(port, () => {
    console.log("Server is running...")
})