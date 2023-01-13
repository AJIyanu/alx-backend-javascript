"use strict";
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
exports.__esModule = true;
exports.cTeacher = exports.react = exports.java = exports.cpp = void 0;
exports.cpp = new Subjects.Cpp();
exports.java = new Subjects.Java();
exports.react = new Subjects.React();
exports.cTeacher = {
    firstName: "AJ",
    lastName: "Iyanu",
    experienceTeachingC: 10
};
console.log('C++');
exports.cpp.setTeacher = exports.cTeacher;
console.log(exports.cpp.getAvailableTeacher());
console.log(exports.cpp.getRequirements());
console.log('Java');
exports.java.setTeacher = exports.cTeacher;
console.log(exports.java.getAvailableTeacher());
console.log(exports.java.getRequirements());
console.log('React');
exports.react.setTeacher = exports.cTeacher;
console.log(exports.react.getAvailableTeacher());
console.log(exports.react.getRequirements());
