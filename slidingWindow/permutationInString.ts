const areMapsEqual = (
  m1: Map<string, number>,
  m2: Map<string, number>
): boolean => {
  if (m1.size !== m2.size) return false;

  return Array.from(m2.keys()).every((key) => m1.get(key) === m2.get(key));
};

const checkInclusion = (s1: string, s2: string): boolean => {
  if (s1.length > s2.length) return false;

  const s1Map = new Map<string, number>();
  const s2Map = new Map<string, number>();

  for (let i = 0; i < s1.length; i++) {
    const s1Char = s1[i];
    s1Map.set(s1Char, (s1Map.get(s1Char) || 0) + 1);

    const s2Char = s2[i];
    s2Map.set(s2Char, (s2Map.get(s2Char) || 0) + 1);
  }

  if (areMapsEqual(s1Map, s2Map)) return true;

  for (let i = s1.length; i < s2.length; i++) {
    const char = s2[i];
    const prevIndex = i - s1.length;
    const prevChar = s2[prevIndex];

    s2Map.set(char, (s2Map.get(char) || 0) + 1);

    s2Map.set(prevChar, s2Map.get(prevChar) - 1);
    if (s2Map.get(prevChar) === 0) s2Map.delete(prevChar);

    if (areMapsEqual(s1Map, s2Map)) return true;
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo")); // true
console.log(checkInclusion("ab", "eidboaoo")); // false
