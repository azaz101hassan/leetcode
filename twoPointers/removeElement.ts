// 27. Remove Element

const removeElement = (nums: number[], val: number): number => {
  let first = 0;

  for (let second = 0; second < nums.length; second++) {
    if (nums[second] !== val) {
      nums[first] = nums[second];
      first++;
    }
  }

  return first;
};

console.log(removeElement([3, 2, 2, 3], 3)); // Output: 2, nums = [2,2,_,_]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5, nums = [0,1,4,0,3,_,_,_]
