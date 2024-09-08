const isPalindrome = (x: number): boolean => {
  if (x < 0) return false;

  let reverse = 0;
  let number = x;
  while (number > 0) {
    reverse *= 10;
    reverse = reverse + (number % 10);
    number = Math.floor(number / 10);
  }
  return x === reverse;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
