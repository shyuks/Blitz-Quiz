
module.exports = app => {
    app.use('/login', require('./routes/studentLogin'));
    app.use('/login', require('./routes/teacherLogin'));
    app.use('/register', require('./routes/register'));
    app.use('/api', require('./routes/students'));
     app.use('/test', require('./routes/tests'));
};