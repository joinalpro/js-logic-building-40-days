function print_table(n, i = 1) {
  if (i == 11)
    // Base case
    return;
  console.log(n + " * " + i + " = " + n * i);
  i++; // Increment i
  print_table(n, i);
}

// Driver Code
let n = 5;
print_table(n);
