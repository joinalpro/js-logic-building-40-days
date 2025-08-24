function findTheBiggestNumber(arrayOfNumbers) {
  // spread operator ... use this three dot. become coma seperated argument
  const maxNumber = Math.max(...arrayOfNumbers);
  //   console.log(maxNumber);
  return maxNumber;
}

// console.log(findTheBiggestNumber([4, 5, 2]));
console.log(findTheBiggestNumber([3, 5, 6, 9, 7, 9, 8, 33]));
