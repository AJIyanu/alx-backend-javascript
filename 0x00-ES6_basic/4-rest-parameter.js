export default function returnHowManyArguments(...simi) {
  let count = 0;

  let rest;
  for (rest of simi) {
    count += 1;
    console.error(rest);
  }
  return count;
}
