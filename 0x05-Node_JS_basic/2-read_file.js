const fs = require('fs');
const { parse } = require('csv-parse');


function countStudents(path) {
	try{
		var data = fs.readFileSync(path, 'utf8');
	} catch (err) {
		throw new Error('Cannot load the database')
	}

	const parseOpt = {
		delimiter: ",",
		from_line: 2,
		skip_empty_lines: true
	};

	parse(data, parseOpt, (err, rows) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log(`Number of students: ${rows.length}`);
		const fielcount = countStudentField(rows);
		for (const field in fielcount) {
			process.stdout.write('Number of students in ' + field);
			process.stdout.write(': ' + fielcount[field]);
			listStudent(field, rows);
		}
	})
}

function countStudentField (rows) {
	let studentField = {};

	for (const row of rows) {
		if (studentField.hasOwnProperty(row[3])) {
			studentField[row[3]] = studentField[row[3]] + 1
		} else {
			studentField[row[3]] = 1
		}
	}
	return studentField;
}

function listStudent (fieldName, rows) {
	process.stdout.write('. List:');
	let check = false;
	for (const name of rows) {
		
		if (fieldName == name[3]) {
		if (check === true) {
			process.stdout.write(',');
		}	process.stdout.write(' ' + name[0]);
		check = true;
		}
	}
	process.stdout.write('\n')
}

module.exports = countStudents;
