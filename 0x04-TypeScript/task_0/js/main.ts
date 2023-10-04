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

const tableBody = document.getElementById("tableBody");

studentsList.forEach(student => {
	const row = document.createElement("tr");
	row.innerHTML = `
		<td>${student.firstName}</td>
		<td>${student.location}</td>
	`;
	tableBody.appendChild(row);
});
