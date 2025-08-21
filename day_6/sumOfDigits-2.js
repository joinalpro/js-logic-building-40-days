function sumOfDigitsTwo(number) {
  let sum = 0;
  let num = number;
  while (num > 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    sum += lastDigit;
  }
  return sum;
}

let giveNums = 456;
console.log(sumOfDigitsTwo(giveNums));
