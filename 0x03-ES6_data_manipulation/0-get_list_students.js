export default function getListStudents() {
  const objects = [];
  objects.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  objects.push({ id: 2, firstName: 'James', location: 'Columbia' });
  objects.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });
  return objects;
}
