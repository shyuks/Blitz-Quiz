const Promise = require('bluebird');
const sequelize = require('./connection');

const initDatabase = () => {
	return new Promise((resolve, reject) => {
		const Answer = require('./../models/answers.model');
		const Class = require('./../models/classes.model');
		const Question = require('./../models/questions.model');
		const Student = require('./../models/students.model');
		const Teacher = require('./../models/teachers.model');
		const Test = require('./../models/tests.model');
		
		Teacher.hasMany(Class, {
			foreignKey: 'Teacher_id'
		});
		Class.belongsTo(Teacher, {
			foreignKey: 'Teacher_id'
		});

		Class.hasMany(Test, {
			foreignKey: 'Class_id'
		});
		Test.belongsTo(Class, {
			foreignKey: 'Class_id'
		});

		Test.hasMany(Question, {
			foreignKey: 'Test_id'
		});
		Question.belongsTo(Test, {
			foreignKey: 'Test_id'
		});

		Question.hasMany(Answer, {
			foreignKey: 'Question_id'
		});
		Answer.belongsTo(Question, {
			foreignKey: 'Question_id'
		});

		Student.hasMany(Answer, {
			foreignKey: 'Student_id'
		});
		Answer.belongsTo(Student, {
			foreignKey: 'Student_id'
		});

		Class.belongsToMany(Student, {
			through: 'class_student',
			foreignKey: 'Class_id'
		});
		Student.belongsToMany(Class, {
			through: 'class_student',
			foreignKey: 'Student_id'
		});
		
		sequelize.sync({/*force: true*/}).then(err => {
			resolve();
		});
	});
};

module.exports = initDatabase;