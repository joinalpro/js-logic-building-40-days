// calculate and prints the sum of the digits of a given number

function sumCalculator(number) {
  if (number < 1) {
    throw new Error("Input number must be positive");
  }

  const numberString = number.toString();
  const conSplited = numberString.split("");
  let sum = 0;
  conSplited.forEach((num) => {
    sum += parseInt(num);
  });
  return sum;
}
let nums = 23;
console.log(sumCalculator(nums));
