//This file will help create the JSON that will be passed at login
const Promise = require('bluebird');

const Teacher = require('./../../models/teachers.model');
const Class = require('./../../models/classes.model');
const Student = require('./../../models/students.model');

const createInitialObject = (teacherId) => {
  return new Promise((resolve, reject) => {
    const obj = {teacher: {}};
    
    getTeacher(teacherId).then(teacher => {
      obj.teacher.firstName = teacher.firstName;
      obj.teacher.lastName = teacher.lastName;
      obj.teacher.photo = teacher.photo;
      return getClasses(teacher);
    }).then(classes => {
      return cleanClasses(classes); 
    }).then(cleaned => {
      obj.classes = cleaned;
      resolve(obj);
    });
  });
};

//=============================================
//        Helper Methods
//=============================================
const getTeacher = id => {
  return new Promise((resolve, reject) => {
    Teacher.findById(id).then(teacher => {
      resolve(teacher);
    });
  });
};

const getClasses = teacher => {
  return new Promise((resolve, reject) => {
    teacher.getClasses().then(classes => {
      resolve(classes);
    });
  });
};

const cleanClasses = rawClasses => {
  return new Promise((resolve, reject) => {
    let all = [];
    let pStudents = [];
    let pTests = [];

    for (let item of rawClasses) {
      pStudents.push(cleanStudents(item));
      pTests.push(cleanTests(item));
    }

    Promise.all(pStudents).then(students => {
      Promise.all(pTests).then(tests => {
        rawClasses.forEach((rClass, idx) => {
          all.push({
            id:rClass.id,
            className: rClass.className,
            students: students[idx],
            tests: tests[idx]
          });
        });
        resolve(all);
      });
    });
  });
};

const cleanStudents = clss => {
  return new Promise((resolve, reject) => {
    let all = [];
    clss.getStudents().then(students => {
      for (let item of students ) {
        all.push({
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          photo: item.photo
        });
      }
      resolve(all);
    });
  });
};

const cleanTests = clss => {
  return new Promise ((resolve, reject) => {
    let all = [];
    clss.getTests().then(tests => {
      Promise.all(tests.map(cleanQuestions)).then(cQuestions => {
        Promise.all(tests.map(cleanAnswers)).then(cAnswers => {
          tests.forEach((test, idx) => {
            all.push({
              id: test.id,
              testName: test.testName,
              type: test.type,
              timeAllowed: test.timeAllowed,
              questions: cQuestions[idx],
              answers: cAnswers[idx]
            });
          });
          resolve(all);
        });
      });
    });
  });
};

const cleanQuestions = test => {
  return new Promise ((resolve, reject) => {
    let all = [];
    test.getQuestions().then(q => {
      for (let item of q) {
        all.push({
          id: item.id,
          type: item.type,
          body: item.body,
          timer: item.timer,
          status: item.status,
          a: item.a,
          b: item.b,
          c: item.c,
          d: item.d,
          isComplete: item.isComplete
        });
      }
      resolve(all);
    });
  });
};

const cleanAnswers = (test) => {
  return new Promise((resolve, reject) => {
    let allAnswers = [];
    test.getQuestions().then(questions => {
      Promise.all(questions.map(getAnswers)).then(answers => {
        processAnswers(answers).then(cAnswers => {
          resolve(cAnswers);
        });
      });
    });
  });
};

const getAnswers = (question) => {
  return new Promise((resolve, reject) => {
    question.getAnswers().then(answers => {
      resolve(answers);
    });
  });
};

const processAnswers = (answersArr) => {
  return new Promise((resolve, reject) => {
    let allAnswers = [];
    for (let item of answersArr) {
      for (let a of item) {
        allAnswers.push({
          studentId: a.studentId,
          questionId: a.questionId,
          answerBody: a.answerBody,
          isCorrect: a.isCorrect
        });
      };
    };
    resolve(allAnswers);
  });
};



module.exports = createInitialObject;
