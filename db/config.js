const Sequelize = require('sequelize');

const keys = require('./../keys.js');

const connection = 'postgres://' + keys.USER_SQL + ':'+ keys.PASS_SQL + keys.SERVER_SQL;
const sequelize = new Sequelize(connection, {
  dialect: 'postgres',
  port: 5432
});

var User = sequelize.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

sequelize.sync({force: true}).then((err) => {
    //force:true      
    //IF YOU UNCOMMENT ABOVE IT WILL DELETE EVERYTHING IN THE DATABASE AND
    //DROP ALL TABLES!!!!!!!! 
		console.log('Sync Complete!');
	});


/**
 * THIS IS A TEST METHOD!!!!! BE SURE TO DELETE
 */
var test = () => {
	User.create({
  	username: 'john-doe',
  	password: '12345'
	}).then(function(user) {
  	console.log(user + ' has been created!');
	});

};

module.exports.test = test;