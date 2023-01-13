/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />
export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher = {
    firstName: "AJ",
    lastName: "Iyanu",
    experienceTeachingC: 10
};
console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getAvailableTeacher());
console.log(cpp.getRequirements());
console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getAvailableTeacher());
console.log(java.getRequirements());
console.log('React');
react.setTeacher = cTeacher;
console.log(react.getAvailableTeacher());
console.log(react.getRequirements());
