// 84. Largest Rectangle in Histogram

const largestRectangleArea = (heights: number[]): number => {
  let max = 0;
  const stack: [number, number][] = [];

  heights.forEach((h, i) => {
    let start = i;
    while (stack.length && stack[stack.length - 1][1] > h) {
      const [index, height] = stack.pop();
      max = Math.max(max, height * (i - index));
      start = index;
    }

    stack.push([start, h]);
  });

  for (let i = 0; i < stack.length; i++) {
    max = Math.max(max, stack[i][1] * (heights.length - stack[i][0]));
  }

  return max;
};

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
console.log(largestRectangleArea([2, 4])); // 4
