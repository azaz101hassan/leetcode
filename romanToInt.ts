// Solution 1: Right to Left
// Passes a few cases and not others
const romanToInt1 = (s: string): number => {
  let number = 0;
  const romanToIntMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let operator = "+";
  for (let i = s.length - 1; i >= 0; i--) {
    const val = s[i];
    if (operator === "+") number += romanToIntMap[val];
    if (operator === "-") number = romanToIntMap[val] - number;
    if (romanToIntMap[val] > romanToIntMap[s[i - 1]] || !romanToIntMap[i - 1])
      operator = "+";
    else operator = "-";
  }

  return number;
};

//Solution 2: Left to Right
const romanToInt = (s: string): number => {
  const romanToIntMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let number = 0;

  for (let i = 0; i < s.length; i++) {
    const currentVal = romanToIntMap[s[i]];
    const nextVal = i + 1 < s.length ? romanToIntMap[s[i + 1]] : 0;

    if (currentVal < nextVal) {
      number -= currentVal;
    } else {
      number += currentVal;
    }
  }

  return number;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
