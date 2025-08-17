function calculateArea(length, width) {
  //   if (length <= 0 || width <= 0) {
  //     return "Invalid number";
  //   }
  if (length <= 0) {
    // throw new Error("Length should be positive number");
    throw new RangeError("Length should be positive number");
  }

  if (width <= 0) {
    throw new RangeError("Width should be positive number");
  }
  const area = length * width;
  console.log("Reactangle area is: ", area);
}

// calculateArea(4, 5);

// calculateArea(555, 321);

calculateArea(1, 1);
