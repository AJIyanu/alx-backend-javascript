export default function cleanSet(set, startString) {
  if ( typeof startString !== "string" || startString === '') {return '';}
  const exist = [];
  set.forEach((stng) => {
    if (typeof stng === 'string') {
    if (stng.startsWith(startString)) {
      exist.push(stng.slice(startString.length));
    }}
  });
  return exist.join('-');
}
