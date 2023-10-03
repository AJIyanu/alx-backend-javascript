export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter((studentObj) => (studentObj.location === city));
}
