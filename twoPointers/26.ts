// 26. Remove Duplicates from Sorted Array

const removeDuplicates = (nums: number[]): number => {
  let first = 1;

  for (let second = 1; second < nums.length; second++) {
    if (nums[second] !== nums[second - 1]) {
      nums[first] = nums[second];
      first++;
    }
  }

  return first;
};

console.log(removeDuplicates([1, 1, 2])); // Output: 2, nums = [1,2,_]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
