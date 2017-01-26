const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');


const test = require('./db/config');


const app = express();
const server = require('http').createServer(app);
const port = 9000;

//for passport middleware
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUnitialized: true,
	cookie: {secure: true}
	}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static(__dirname + 'client/build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, () => {
	console.log("listening on port " + port);
});



