/// <reference path="Teacher.ts" />
namespace Subjects {
	export interface Teacher {
		experienceTeachingJava?:number;
	}

	export class Java extends Subject {
		getRequirements ():string {
			return "Here is the list of requirements for Java";
		}

		getAvailableTeacher ():string {
			if (super.teacher.experienceTeachingJava !== 0) {
				return "No available teacher";
			}
			return `Available Teacher: ${super.teacher.firstName}`
		}
	}
}
