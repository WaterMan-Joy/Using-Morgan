const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(req.method.toUpperCase(), req.path)
    next();
})

app.get('/', (req, res) => {
    res.send('HI')
})

app.get('/dog', (req, res) => {
    res.send('HI DOG')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})