// server-express.js
const express = require('express')
const app = express() // initialize app
const port = 3000

// GET callback function returns a response message
app.get('/', (req, res) => {
    res.send('Hello World! Welcome to Node.js')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

let counter = 0;


app.get('/visits', (req, res) => {
	counter += 1
      // Text formatting from ‘text formatting’ JavaScript prelab section
	res.send(`There have been ${counter} visits to this session`);
});

app.get('/rock', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if (rndInt === 3){
        res.send("Bot picked Scissors. You Win!!!!")
    }else if (rndInt === 1){
        res.send("Bot picked Rock. Tie! Try again!")
    }else if (rndInt === 2)
        res.send("Bot picked Paper. You Lose! Try again!")
});

app.get('/paper', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if (rndInt === 3){
        res.send("Bot picked Scissors. You Lose! Try again!")
    }else if (rndInt === 1){
        res.send("Bot picked Rock. You Win!!!!")
    }else if (rndInt === 2)
        res.send("Bot picked Paper. Tie! Try again!")
});

app.get('/scissors', (req, res) => {
    const rndInt = Math.floor(Math.random() * 3) + 1
    console.log(rndInt)
    if (rndInt === 3){
        res.send("Bot picked Scissors. Tie! Try again!")
    }else if (rndInt === 1){
        res.send("Bot picked Rock. You Lose! Try again!")
    }else if (rndInt === 2)
        res.send("Bot picked Paper. You Win!!!!")
});