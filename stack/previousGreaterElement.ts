const previousGreaterElement = (nums: number[]): number[] => {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] <= nums[i]) stack.pop();
    if (stack.length) result[i] = stack[stack.length - 1];
    stack.push(nums[i]);
  }

  return result;
};

console.log(previousGreaterElement([4, 5, 2, 25])); // [ -1, -1, 5, -1 ]
console.log(previousGreaterElement([13, 7, 6, 12])); // [ -1, 13, 7, 13 ]
