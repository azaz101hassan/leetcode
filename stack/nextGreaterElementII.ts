// 503. Next Greater Element II

const nextGreaterElementII = (nums: number[]): number[] => {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 2 * (nums.length - 1); i >= 0; i--) {
    const j = i % nums.length;
    while (stack.length && stack[stack.length - 1] <= nums[j]) stack.pop();
    if (stack.length) result[j] = stack[stack.length - 1];
    stack.push(nums[j]);
  }

  return result;
};

console.log(nextGreaterElementII([1, 2, 1])); // [2, -1, 2]
console.log(nextGreaterElementII([1, 2, 3, 4, 3])); // [2, 3, 4, -1, 4];
