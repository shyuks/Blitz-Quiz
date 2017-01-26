const Sequelize = require('sequelize');

const keys = require('./../keys');

const connection = 'postgres://' + keys.USER_SQL + ':'+ keys.PASS_SQL + keys.SERVER_SQL;
const sequelize = new Sequelize(connection, {
  dialect: 'postgres',
  port: 5432
});

sequelize.authenticate()
	.then(err => {
		console.log('Connection made successfully')
	})
	.catch(err => {
		console.log("sequel error: ", err, 'Unable to connect')
	})

var User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

sequelize.sync({force: true}).then((err) => {
    //force:true      
    //IF YOU UNCOMMENT ABOVE IT WILL DELE0TE EVERYTHING IN THE DATABASE AND
    //DROP ALL TABLES!!!!!!!! 
		console.log('Sync Complete!');
	}).then(function () {
	test()});


/**
 * THIS IS A TEST METHOD!!!!! BE SURE TO DELETE
 */
var test = () => {
	User.create({
  	username: 'jjjdoe',
  	password: '12345'
	}).then(function(user) {
  	console.log(user + ' has been created!');
	});

};

// module.exports.test = test;

module.exports = {test: test,
									sequelize: sequelize
									}	