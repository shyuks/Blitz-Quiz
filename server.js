const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');


const app = express();
const port = 9000;

const http = require('http').Server(app);
const io = require('socket.io')(http);

const handleSocket = require('./sockets');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('client/build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('a user connected');
	handleSocket(socket);
});

http.listen(port, () => {
	console.log("listening on port " + port);
});




