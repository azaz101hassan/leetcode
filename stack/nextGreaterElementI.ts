// 496. Next Greater Element I

const nextGreaterElementI = (nums1: number[], nums2: number[]): number[] => {
  const map: Map<number, number> = new Map();
  const result = new Array(nums1.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i);
  }

  for (let j = nums2.length - 1; j >= 0; j--) {
    const number = nums2[j];
    if (map.has(number)) {
      while (stack.length && stack[stack.length - 1] <= number) stack.pop();
      if (stack.length) result[map.get(number)] = stack[stack.length - 1];
    }
    stack.push(number);
  }
  return result;
};

console.log(nextGreaterElementI([4, 1, 2], [1, 3, 4, 2])); // [-1,3,-1]
console.log(nextGreaterElementI([2, 4], [1, 2, 3, 4])); // [3,-1]
