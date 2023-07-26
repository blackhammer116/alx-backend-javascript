export default function returnHowManyArguments(...theArgs) {
  let tot = 0;
  for (const arg of theArgs) {
    tot += 1;
  }
  return tot;
}
