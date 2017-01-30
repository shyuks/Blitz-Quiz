const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const passport = require('passport');
const conn = require('./db/connection')
const handleSocket = require('./sockets');
const initDatabase = require('./db/config');

/**
 * TO DELETE
 */
const seeder = require('./db/seedData/_seedMethods');
const tester = require('./util/utility/loginInit');

const app = express();
const port = 9000;

const http = require('http').Server(app);
const io = require('socket.io')(http);

//=========================================
//          Middleware
//=========================================
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true },
  store: new pgSession({
    // conString: conn   
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('client/build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//=========================================
//          Routes
//=========================================
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/test', (req, res) => {
  tester(1053).then(item => {
    console.log(item);
    for (thingy of item.classes[2].tests[0].answers) {
      console.log('-----------------------------------------')
      console.log('-----------------------------------------')
      console.log(thingy)
    }
    res.status(200).send('Hello World!');
  });
  
});


io.on('connection', (socket) => {
  console.log('a user connected');
	handleSocket(socket);
});

//=========================================
//          Listen
//=========================================
initDatabase().then(() => {
  http.listen(port, () => {
	  console.log("listening on port " + port);
  });
});

const router = require('./router/router')(app);

module.exports = app;






