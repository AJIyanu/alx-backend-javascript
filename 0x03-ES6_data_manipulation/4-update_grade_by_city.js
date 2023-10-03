export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return getListStudents.filter((studObj) => (studObj.location === city)).map(
    (locStud) => {
      const newStudObj = { ...locStud };
      newStudObj.grade = 'N/A';
      for (const check of newGrades) {
        if (check.studentId === locStud.id) {
          newStudObj.grade = check.grade;
        }
      }
      return newStudObj;
    },
  );
}
