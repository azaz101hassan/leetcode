const nextGreatestLetter = (letters: string[], target: string): string => {
  let start = 0;
  let end = letters.length - 1;
  const targetCharCode = target.charCodeAt(0);

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);

    if (letters[middle].charCodeAt(0) <= targetCharCode) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return letters[start] || letters[0];
};

console.log(nextGreatestLetter(["c", "f", "j"], "a")); // c
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // f
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); // x
console.log(nextGreatestLetter(["c", "f", "j"], "a")); // c
// Explanation: There are no characters in
// letters that is lexicographically greater than 'z' so we return letters[0].
