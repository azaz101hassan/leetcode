const findAverage = function (nums: number[], k: number): number[] {
  let currentSum = nums.slice(0, k).reduce((acc, val) => acc + val, 0);
  const avgArray = [currentSum / k];

  let j = 0;
  for (let i = k; i < nums.length; i++) {
    currentSum -= nums[j++];
    currentSum += nums[i];
    avgArray.push(currentSum / k);
  }
  return avgArray;
};

console.log(findAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
console.log(findAverage([11, 12, 13, 3, 2, 1], 4)); // [9.75,7.5,4.75]
console.log(findAverage([1, 2, 3, 4, 5], 3)); // [2,3,4]
