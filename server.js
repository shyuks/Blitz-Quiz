const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;

app.use(express.static(__dirname + 'client/build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => {
	console.log("listening on port " + port);
});
