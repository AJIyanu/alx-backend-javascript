export default function getListStudentId(array) {
  let ids = [];
  if (Array.isArray(array)) {
    ids = array.map (function(item) {
      return item.id;
    });
  }
  return ids;
}
