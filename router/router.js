
module.exports = app => {
    app.use('/login', require('./routes/login'));
    app.use('/register', require('./routes/register'));
    app.use('/teacher', require('./routes/teacher'));
};