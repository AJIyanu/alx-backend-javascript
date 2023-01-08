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

	getCoffeeBreak(): string {
		return "";
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

function isDirector (employee: Director | Teacher): employee is Director {
	return employee;
}

function executeWork (employee: Director | Teacher) {
  if (isDirector(employee)) {
  employee.workDirectorTasks();
  } else {
  employee.workTeacherTasks();
  }
}


executeWork(createEmployee(200));
executeWork(createEmployee(1000));
