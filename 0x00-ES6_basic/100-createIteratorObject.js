export default function createIteratorObject(report) {
  const all = [];
  for (const employees of Object.values(report.allEmployees)) all.push(...employees);
  return all;
}
