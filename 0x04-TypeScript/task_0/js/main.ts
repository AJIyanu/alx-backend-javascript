interface Student {
	firstName:string,
	lastName:string,
	age:number,
	location:string
}

const studentsList: Student[] = [
	{ firstName: "Rose", lastName: "Aderemi", age: 23, location: "Ominira" },
	{ firstName: "Nora", lastName: "Gwom", age: 21, location: "Foron" }
];

for (let element of studentsList) {
  console.table([element], ['firstName', 'location'])
}
