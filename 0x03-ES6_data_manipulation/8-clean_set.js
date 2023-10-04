export default function cleanSet(set, startString) {
  if (! (startString instanceof String)) return '';
  const exist = [];
  set.forEach((stng) => {
    if (stng instanceof String) {
    if (stng.startsWith(startString)) {
      exist.push(stng.slice(startString.length));
    }}
  });
  return exist.join('-');
}
