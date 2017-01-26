const loginController = {}

//passport authentication
loginController.CHECK_USER = (req, res) => {
    request.post('/login', passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login', failureFlash: 'Invalid username or password' }));
}

module.exports = loginController