export default function returnHowManyArguments(...simi) {
  let count = 0;
  let rest
  for (rest of simi) count += 1;
  return count;
}
