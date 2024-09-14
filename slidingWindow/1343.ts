// 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

const numOfSubarrays = (
  arr: number[],
  k: number,
  threshold: number
): number => {
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }

  let subArrays = currentSum / k >= threshold ? 1 : 0;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    if (currentSum / k >= threshold) subArrays++;
  }
  return subArrays;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)); // 3
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)); // 6
