/// <reference path="Teacher.ts" />
namespace Subjects {
  class Subject {
    teacher:Teacher;

    set setTeacher(teacher:Teacher):void {
	this.teacher = Teacher;
    }
  }
}
