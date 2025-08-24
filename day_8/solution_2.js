function findTheBiggestNumber(arrayOfNumbers) {
  if (!arrayOfNumbers || arrayOfNumbers.length === 0) {
    throw new Error("Give some number");
  }

  let biggestNumber = arrayOfNumbers[0];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > biggestNumber) {
      biggestNumber = arrayOfNumbers[i];
      //   console.log(biggestNumber);
    }
  }
  return biggestNumber;
}

console.log(findTheBiggestNumber([4, 5, 2]));
