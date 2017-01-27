const Sequelize = require('sequelize');
const keys = require('./../keys.js');

const connection = 'postgres://' + keys.USER_SQL + ':'+ keys.PASS_SQL + keys.SERVER_SQL;
const sequelize = new Sequelize(connection, {
  dialect: 'postgres',
  port: 5432
});

//This should wrap the server instantiation
sequelize.sync({force: true}).then((err) => {
    //force:true

    //IF YOU UNCOMMENT ABOVE IT WILL DELETE EVERYTHING IN THE DATABASE AND
    //DROP ALL TABLES!!!!!!!! 
		console.log('Sync Done!');
});
console.log('Hello!');

module.exports = 'Hello!';