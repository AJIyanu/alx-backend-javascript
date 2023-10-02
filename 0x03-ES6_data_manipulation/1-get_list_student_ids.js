export default function getListStudentId(array) {
  let ids = [];
  if (Array.isArray(array)) {
    ids = array.map((item) => item.id);
  }
  return ids;
}
