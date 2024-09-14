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

// Solution 1: non optimized
const findMaxAverage = (nums: number[], k: number): number => {
  const avgArray = findAverage(nums, k);
  let max = avgArray[0];
  for (let i = 1; i < avgArray.length; i++) {
    if (avgArray[i] > max) max = avgArray[i];
  }
  return max;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));

// Solution 2: Optimized findMaxAvg
const optFindMaxAverage = (nums: number[], k: number): number => {
  let currentSum = nums.slice(0, k).reduce((acc, val) => acc + val, 0);

  let maxAvg = currentSum / k;
  let j = 0;
  for (let i = k; i < nums.length; i++) {
    currentSum -= nums[j++];
    currentSum += nums[i];

    if (currentSum / k > maxAvg) maxAvg = currentSum / k;
  }
  return maxAvg;
};

console.log(optFindMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(optFindMaxAverage([5], 1));

//Solution 3: ChatGPT Optimized
const optFindMaxAverage2 = (nums: number[], k: number): number => {
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  let maxAvg = currentSum / k;

  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    const currentAvg = currentSum / k;
    if (currentAvg > maxAvg) {
      maxAvg = currentAvg;
    }
  }

  return maxAvg;
};

console.log(optFindMaxAverage2([1, 12, -5, -6, 50, 3], 4));
console.log(optFindMaxAverage2([5], 1));
