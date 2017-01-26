const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 9000;

const http = require('http').Server(app);
const io = require('socket.io')(http);

const handleSocket = require('./sockets');

//for passport middleware
//app.use(express.session({ secret: 'keyboard cat' }));
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(app.router);

app.use(express.static('client/build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('a user connected');

	handleSocket(socket);
	// socket.on('disconnect', () => {
	// 	console.log('user has disconnected');
	// });
});


http.listen(port, () => {
	console.log("listening on port " + port);
});




