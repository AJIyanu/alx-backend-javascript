const fs = require('fs');
const csvPaser = require('csv-parse');


function countStudents(path) {
	try{
		var data = fs.readFileSync(path, 'utf8');
	} catch {
		throw new Error('Cannot load the database');
	}

	const parseOpt = {
		columns: true,
		skip_empty_lines: true
	};
	console.log(data);

//	csvPaser(data, parseOpt, (err, rows) => {
//		if (err) {
//			console.error(error);
//			return;
//		}
//		console.log('Number of students: ', rows.length);
//		console.log(rows);
//	})
}

module.exports = countStudents;
