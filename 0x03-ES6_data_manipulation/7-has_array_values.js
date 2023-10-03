export default function hasValuesFromArray(set, array) {
  let check = false;
  for (const eachVal of array) {
    check = set.has(eachVal);
  }
  return check;
}
