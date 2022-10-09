const express = require('express');
const app = express();





app.get('/', (req, res) => {
    res.send('HI')
})

app.get('/dog', (req, res) => {
    res.send('HI DOG')
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})