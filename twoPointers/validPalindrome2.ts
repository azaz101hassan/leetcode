// Solution 1 - My Solution
const modifiedValidPalindrome = (s: string): boolean => {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = s.length - 1;
  let skipped = false;

  while (left < right) {
    if (s[left] !== s[right]) {
      if (skipped) return false;
      skipped = true;
      if (s[left + 1] === s[right]) {
        left += 1;
      } else if (s[left] === s[right - 1]) right -= 1;
      else return false;
    } else {
      left += 1;
      right -= 1;
    }
  }

  return true;
};

console.log(modifiedValidPalindrome("amanaplanacbanalpanama")); // true
console.log(modifiedValidPalindrome("race a cara")); // false
console.log(modifiedValidPalindrome(" a")); // true
// This test case fails for my solution
console.log(
  // true
  modifiedValidPalindrome(
    "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
  )
);

// Solution 2 - Chat
const isPalindromeInRange = (
  s: string,
  left: number,
  right: number
): boolean => {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
};

const modifiedValidPalindrome2 = (s: string): boolean => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right])
      return (
        isPalindromeInRange(s, left + 1, right) ||
        isPalindromeInRange(s, left, right - 1)
      );
    left++;
    right--;
  }

  return true;
};

// Passes now
console.log(
  "\n\n",
  // true
  modifiedValidPalindrome2(
    "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"
  )
);
