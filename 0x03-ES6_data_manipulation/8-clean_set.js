export default function cleanSet(set, startString) {
  if (startString === '') return '';
  const exist = [];
  set.forEach((stng) => {
    if (stng.startsWith(startString)) {
      exist.push(stng.slice(startString.length));
    }
  });
  return exist.join('-');
}
