// 167. Two Sum II - Input Array Is Sorted
const twoSum2 = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const number = numbers[left] + numbers[right];

    if (number === target) return [left + 1, right + 1];
    if (number > target) {
      right--;
    } else left++;
  }

  return [];
};

console.log(twoSum2([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum2([2, 3, 4], 6)); // [1, 3]
console.log(twoSum2([-1, 0], -1)); // [1, 2]
