const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('homepage');
})

//not-matching path
app.get("*", function (req, res) {
    res.sendStatus(404);
});
app.listen(5000)