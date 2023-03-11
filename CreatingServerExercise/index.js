const express = require("express")
const app = express()

app.get('/',(req,res) => {
    res.send("Welcome to my Homepage!!")
})

app.get('/r/:subreddit',(req,res) => {
    const {subreddit} = req.params
    const text = subreddit.toUpperCase()
    res.send(`<h1>THIS IS A ${text}!</h1>`)
})

app.get('/r/:subreddit/:postid',(req,res) => {
    const {subreddit,postid} = req.params
    const text = subreddit.toUpperCase()
    const text2 = postid.toUpperCase()
    res.send(`<h1>THIS IS A ${text} & ${text2}!</h1>`)
})

app.post('/cats',(req,res) => {
    res.send("POST REQUEST TO /cats!!! THIS IS DIFFERENT THAN A GET REQUEST")
})

app.get('/cats',(req,res) => {
    res.send("MEOW!!")
})

app.get('/dogs',(req,res) => {
    res.send("WOOF!!")
})

app.get('/horse',(req,res) => {
    res.send("BRUFF!!")
})

app.listen(8080, () => {
    console.log("LISTENING 8080")
})

app.get("/search", (req,res) => {
    const {q} = req.query
    if (!q){
        res.send("Nothing found!")
    }
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get("*", (req,res) => {
    res.send("I don't know that path!")
})



