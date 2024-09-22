// 283. Move Zeroes

const moveZeroes = (nums: number[]): number[] => {
  let first = 0;
  let second = 0;

  while (second < nums.length) {
    if (nums[second] !== 0) {
      const temp = nums[second];
      nums[second] = nums[first];
      nums[first] = temp;
      second++;
      first++;
    } else second++;
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0];
