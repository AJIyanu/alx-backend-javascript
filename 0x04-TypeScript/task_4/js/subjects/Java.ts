/// <reference path="Teacher.ts" />
namespace Subjects {
	export class Teacher {
		experienceTeachingJava?:number;
	}

	export class Cpp extends Subject {
		getRequirements ():string {
			return "Here is the list of requirements for Java";
		}

		getAvailableTeacher ():string {
			if (super.teacher.experienceTeachingJava !== 0) {
				return "No available teacher";
			}
			return `Available Teacher: ${first name of teacher}`
}
