const express = require('express');
const app = express();

app.use((req, res, next) => {
    const time = req.requestTime = Date.now()
    console.log(req.method.toUpperCase(), req.path, time)
    next();
})

const verifyPassword = ((req, res, next) => {
    const { password } = req.query;
    console.log(req.path)
    console.log(password)
    console.log(req.query)
    if (password === "1234") {
        next();
    }
    else {
        res.send('SORRY YOU NEED A PASSWORD')
    }
})

app.use('/secret', verifyPassword, (req, res, next) => {
    res.send('My Secret is : Nonthing!')
})

app.get('/', (req, res) => {
    res.send('HI')
})

app.get('/dogs', (req, res) => {
    res.send('HI DOG')
})

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs!')
    next();
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})