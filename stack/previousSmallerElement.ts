const previousSmallerElement = (nums: number[]): number[] => {
  const result = new Array(nums.length).fill(-1);
  const stack = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length && stack[stack.length - 1] >= nums[i]) stack.pop();
    if (stack.length) result[i] = stack[stack.length - 1];
    stack.push(nums[i]);
  }

  return result;
};

console.log(previousSmallerElement([4, 5, 2, 25])); //[ -1, 4, -1, 2 ]
console.log(previousSmallerElement([13, 7, 6, 12])); // [ -1, -1 -1, 6 ]
