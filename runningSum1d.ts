const runningSum = (nums: number[]): number[] => {
  const sum = [];
  nums.forEach((num, index) => {
    if (index > 0) sum[index] = sum[index - 1] + num;
    else sum[0] = num;
  });
  return sum;
};

console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
