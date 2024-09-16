import { endConsoleTimer, startConsoleTimer } from "../utils";

const areMapsSame = (
  m1: Map<string, number>,
  m2: Map<string, number>
): boolean => {
  if (m1.size !== m2.size) return false;

  return Array.from(m2.keys()).every((key) => {
    const value1 = m1.get(key);
    const value2 = m2.get(key);
    return value1 === value2;
  });
};

const findAnagrams = (s: string, p: string): number[] => {
  const anagramIndexs = [];

  const pMap = new Map<string, number>();
  const sMap = new Map<string, number>();

  for (let i = 0; i < p.length; i++) {
    const pChar = p[i];
    pMap.set(pChar, (pMap.get(pChar) || 0) + 1);

    const sChar = s[i];
    sMap.set(sChar, (sMap.get(sChar) || 0) + 1);
  }

  if (areMapsSame(pMap, sMap)) anagramIndexs.push(0);

  for (let i = p.length; i < s.length; i++) {
    const char = s[i];
    const prevIndex = i - p.length;
    const prevChar = s[prevIndex];

    sMap.set(char, (sMap.get(char) || 0) + 1);

    sMap.set(prevChar, sMap.get(prevChar) - 1);
    if (sMap.get(prevChar) === 0) sMap.delete(prevChar);

    if (areMapsSame(pMap, sMap)) anagramIndexs.push(prevIndex + 1);
  }
  return anagramIndexs;
};

startConsoleTimer(findAnagrams.name);
console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
console.log(findAnagrams("abab", "ab")); // [0,1,2]
endConsoleTimer(findAnagrams.name);

// Soltion 2 - Chat
const findAnagrams2 = (s: string, p: string): number[] => {
  const anagramIndices: number[] = [];
  const pLen = p.length;
  const sLen = s.length;

  if (sLen < pLen) return anagramIndices;

  // Frequency maps for the characters in p and the current window in s
  const pFreq = new Array(26).fill(0);
  const sFreq = new Array(26).fill(0);

  // Helper function to get index in the frequency array
  const charToIndex = (char: string) => char.charCodeAt(0) - "a".charCodeAt(0);

  // Initialize frequency arrays
  for (let i = 0; i < pLen; i++) {
    pFreq[charToIndex(p[i])] += 1;
    sFreq[charToIndex(s[i])] += 1;
  }

  // Check if the initial window is an anagram
  if (pFreq.every((count, index) => count === sFreq[index])) {
    anagramIndices.push(0);
  }

  // Slide the window across s
  for (let i = pLen; i < sLen; i++) {
    const newCharIndex = charToIndex(s[i]);
    const oldCharIndex = charToIndex(s[i - pLen]);

    sFreq[newCharIndex] += 1;
    sFreq[oldCharIndex] -= 1;

    if (sFreq.every((count, index) => count === pFreq[index])) {
      anagramIndices.push(i - pLen + 1);
    }
  }

  return anagramIndices;
};

startConsoleTimer(findAnagrams2.name);
console.log(findAnagrams2("cbaebabacd", "abc")); // [0,6]
console.log(findAnagrams2("abab", "ab")); // [0,1,2]
endConsoleTimer(findAnagrams2.name);
