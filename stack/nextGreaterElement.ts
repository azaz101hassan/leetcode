const nextGreaterElement = (nums: number[]): number[] => {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) stack.pop();
    if (stack.length) result[i] = stack[stack.length - 1];
    stack.push(nums[i]);
  }

  return result;
};

console.log(nextGreaterElement([4, 5, 2, 25])); // [ 5, 25, 25, -1 ]
console.log(nextGreaterElement([13, 7, 6, 12])); // [ -1, 12, 12, -1 ]
