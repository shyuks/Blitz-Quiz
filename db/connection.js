const Sequelize = require('sequelize');
const keys = require('./../keys.js');

const connection = keys.SERVER_SQL;
const sequelize = new Sequelize(connection, {
  dialect: 'postgres',
  port: 5432
});

sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }).catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;