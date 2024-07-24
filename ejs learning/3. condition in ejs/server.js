const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

let number = 0

app.get('/2', (req, res, next) => {
    res.render('index2', {number});
});

app.listen(1000);
console.log("running on port 1000")