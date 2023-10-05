interface Student {
	firstName:string;
	lastName:string;
	age:number;
	location:string;
}


const student1: Student = {
    firstName: "Rose",
    lastName: "AJ",
    age: 24,
    location: "Abuja"
};

const student2: Student = {
    firstName: "AJ",
    lastName: "Iyanu",
    age: 28,
    location: "Texas"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const headRow = document.createElement('tr');
const firstNameHead = document.createElement('th');
firstNameHead.textContent = 'FirstName';
headRow.appendChild(firstNameHead);
const locationHead = document.createElement('th');
locationHead.textContent = "Location";
headRow.appendChild(locationHead);

thead.appendChild(headRow);
table.appendChild(thead);
document.body.appendChild(table)
const tableBody = document.createElement('tbody');

studentsList.forEach(student => {
	const row = document.createElement("tr");
	row.innerHTML = `
		<td>${student.firstName}</td>
		<td>${student.location}</td>
	`;
	tableBody.appendChild(row);
});

table.appendChild(tableBody);
