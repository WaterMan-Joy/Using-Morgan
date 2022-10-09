const express = require('express');
const app = express();

app.use((req, res, next) => {
    const time = req.requestTime = Date.now()
    console.log(req.method.toUpperCase(), req.path, time)
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs!')
    next();
})

app.get('/', (req, res) => {
    res.send('HI')
})

app.get('/dogs', (req, res) => {
    res.send('HI DOG')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})