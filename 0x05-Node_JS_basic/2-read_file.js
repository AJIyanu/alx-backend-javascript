const fs = require('fs');

function splitData(allData) {
  const dataArray = [];
  let rows = [];

  rows = allData.split(/["\n"]/);
  for (const row of rows) {
    if (row !== '' && row !== '\r') {
      const fields = row.split(/[",", "\r"]/);
      dataArray.push(fields);
    }
  }
  return dataArray;
}

function countStudentField(rows) {
  const studentField = {};

  for (const row of rows) {
    if (Object.hasOwnProperty.call(studentField, row[3])) {
      studentField[row[3]] += 1;
    } else {
      studentField[row[3]] = 1;
    }
  }
  return studentField;
}

function listStudent(fieldName, rows) {
  let studList = ' List:';
  let check = false;
  for (const name of rows) {
    if (fieldName === name[3]) {
      if (check === true) {
        studList = `${studList},`;
      }
      studList = `${studList} ${name[0]}`;
      check = true;
    }
  }
  return studList;
}

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const dataTable = splitData(data);
    dataTable.splice(0, 1);
    console.log(`Number of students: ${dataTable.length}`);

    const fieldCount = countStudentField(dataTable);
    let fieldLog = '';
    for (const [field, count] of Object.entries(fieldCount)) {
      fieldLog = `Number of students in ${field}: ${count}.`;
      fieldLog += listStudent(field, dataTable);
      console.log(fieldLog);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
