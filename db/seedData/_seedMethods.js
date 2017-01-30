const Answer = require('./../../models/answers.model');
const Class = require('./../../models/classes.model');
const Question = require('./../../models/questions.model');
const Student = require('./../../models/students.model');
const Teacher = require('./../../models/teachers.model');
const Test = require('./../../models/tests.model');

const ClassSeed = require('./ClassSeed');
const QuestionSeed = require('./QuestionSeed');
const StudentSeed = require('./StudentSeed');
const TeacherSeed = require('./TeacherSeed');
const TestSeed = require('./TestSeed');

const seeder = () => {

   Teacher.bulkCreate(TeacherSeed)
   .catch((errors) => {
       console.log(errors);
    });

    Student.bulkCreate(StudentSeed)
   .catch((errors) => {
       console.log(errors);
    });

    console.log('/n/n/n/nADDING CLASSES!!/n/n/n/n');
    Class.bulkCreate(ClassSeed)
    
    .catch((errors) => {
       console.log(errors);
    });

    // Test.bulkCreate(TestSeed)
    // .catch((errors) => {
    //    console.log(errors);
    // });

    // Question.bulkCreate(QuestionSeed)
    // .catch((errors) => {
    //    console.log(errors);
    // });

};



module.exports = seeder;




