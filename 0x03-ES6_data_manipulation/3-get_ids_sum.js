export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((total, num) => (total + num.id), 0);
}
