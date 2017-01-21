const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
let port = 9000;

app.use(express.static(__dirname + 'client/build'));
app.use(bodyParser.json())


app.listen(port, function () {
	console.log("listening on port " + port);
});
