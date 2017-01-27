const Promise = require('bluebird');
const sequelize = require('./connection');

const initDatabase = () => {
	return new Promise((resolve, reject) => {
		const Teachers = require('./../models/teachers.model');

		sequelize.sync({
			//force: true
		})
		.then(err => {
			resolve();
		});

	});
};

module.exports = initDatabase;