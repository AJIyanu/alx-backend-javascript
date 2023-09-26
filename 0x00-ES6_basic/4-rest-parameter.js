export default function returnHowManyArguments (...simi) {
  let count = 0;
  for (let rest of simi) count += 1;
  return count;
}
