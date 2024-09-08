//Solution 1:
const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const dictT = {};
  const dictS = {};

  for (let i = 0; i < s.length; i++) {
    dictT[s[i]] = (dictT[s[i]] || 0) + 1;
    dictS[t[i]] = (dictS[t[i]] || 0) + 1;
  }

  if (Object.keys(dictS).length !== Object.keys(dictT).length) return false;

  const dictSKeys = Object.keys(dictS);
  for (let i = 0; i < dictSKeys.length; i++) {
    if (dictT[dictSKeys[i]] !== dictS[dictSKeys[i]]) return false;
  }

  return true;
};

// Solution 2
function validAnagram(s: string, t: string): boolean {
  // Check if the lengths of the two strings are different
  if (s.length !== t.length) {
    return false;
  }

  // Create an array to count the frequency of each character
  const counts: number[] = Array(26).fill(0);

  // Update counts based on the characters in both strings
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
    counts[t.charCodeAt(i) - 97]--;
  }

  // Check if all counts are zero
  for (let count of counts) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(validAnagram("cat", "tac"));
