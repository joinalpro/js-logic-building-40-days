function palindrome(str) {
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("madam"));
