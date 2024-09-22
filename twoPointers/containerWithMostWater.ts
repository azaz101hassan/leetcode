// 11. Container With Most Water

const maxArea = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let maxVal = 0;

  while (left <= right) {
    const width = right - left;
    const currentHeight = Math.min(height[left], height[right]);

    const area = width * currentHeight;
    if (area > maxVal) maxVal = area;

    height[left] < height[right] ? left++ : right--;
  }

  return maxVal;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); //49
console.log(maxArea([1, 1])); // 1
