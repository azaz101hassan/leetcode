const validPalindrome = (s: string): boolean => {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;

    left += 1;
    right -= 1;
  }

  return true;
};

console.log(validPalindrome("amanaplanacanalpanama"));
console.log(validPalindrome("race a car"));
console.log(validPalindrome(" "));
