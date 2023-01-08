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

interface DirectorInterface {
	workFromHome() : string;
	getCoffeeBreak():string;
	workDirectorTasks():string;
}

interface TeacherInterface {
	workFromHome():string;
	getCoffeeBreak():string;
	workTeacherTasks():string;
}

class Director implements DirectorInterface {
	workFromHome () {
		return "Working from home";
	}

	getToWork() {
		return "Getting a coffee break";
	}

	workDirectorTasks() {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return "Cannot work from home";
	}

	getCoffeeBreak() {
		return "Cannot have a break";
	}

	workTeacherTasks() {
		return "Getting to work";
	}
}

function createEmployee (salary: number | string) {
	if (typeof salary === 'string') {
		salary.replace('$', '');
		salary = parseInt(salary)
	}

	if (salary < 500) {
		return new Teacher();
	} else {
		return new Director();
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
