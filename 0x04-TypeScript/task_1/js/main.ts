interface Teacher {
	readonly firstName:string;
	readonly lastName:string;
	fullTimeEmployee:boolean;
	yearsOfExperience?:number;
	location:string;
	[propName: string]:any;
}

interface Directors extends Teacher {
	numberOfReports:number;
}

interface printTeacherFunction {
	(firstName:string, lastName:string): string;
}

const printTeacher: printTeacherFunction = function (firstName, lastName) {
	return `${firstName.charAt(0)}. ${lastName}`
}

class StudentClass {
	firstName: string;
	lastName: string;

	constructor (firstName:string, lastName:string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() {
		return 'Currently working';
	}

	displayName() {
		return this.firstName;
	}
}


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);
