/// <reference path="Teacher.ts" />
namespace Subjects {
	export class Teacher {
		experienceTeachingC?:number;
	}

	export class Cpp extends Subject {
		getRequirements ():string {
			return "Here is the list of requirements for Cpp";
		}

		getAvailableTeacher ():string {
			if (super.teacher.experienceTeachingC !== 0) {
				return "No available teacher";
			}
			return `Available Teacher: ${first name of teacher}`
}
