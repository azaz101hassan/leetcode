// 739. Daily Temperatures

const dailyTemperatures = (temperatures: number[]): number[] => {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1][0] <= temperatures[i])
      stack.pop();
    if (stack.length) result[i] = stack[stack.length - 1][1] - i;
    stack.push([temperatures[i], i]);
  }

  return result;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1,1,1,0]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0];
