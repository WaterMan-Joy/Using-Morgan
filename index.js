const express = require('express');
const morgan = require('morgan')

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('HI')
})

app.get('/dog', (req, res) => {
    res.send('HI DOG')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})