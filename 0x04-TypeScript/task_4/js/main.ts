/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/React.ts" />
/// <reference path="./subjects/Java.ts" />

export const cpp:Subjects.Cpp = new Subjects.Cpp();
export const java:Subjects.Java = new Subjects.Java();
export const react:Subjects.React = new Subjects.React();

export const cTeacher:Subjects.Teacher = {
  firstName: "AJ",
  lastName: "Iyanu",
  experienceTeachingC: 10
}

console.log('C++');
cpp.setTeacher = cTeacher;
cpp.getAvailableTeacher();
cpp.getRequirements();

console.log('Java');
java.setTeacher = cTeacher;
java.getAvailableTeacher();
java.getRequirements();

console.log('React');
react.setTeacher = cTeacher;
react.getAvailableTeacher();
react.getRequirements();
