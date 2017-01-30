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

const cleanClasses = (raw) => {
  return new Promise((resolve, reject) => {
    let all = [];
    let promises = [];
    for (let item of raw) {
      promises.push(cleanStudents(item));
    }
    Promise.all(promises).then(cleanStudents => {
      cleanStudents.forEach((students, i) => {
        all.push({
          className: raw[i].className,
          students
        })
      });
      resolve(all);
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

module.exports = createInitialObject;
//first needs to find the teacher