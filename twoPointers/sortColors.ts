// 75. Sort Colors

const sortColors = (nums: number[]): number[] => {
  let p0 = 0;
  let p1 = 0;
  let p2 = nums.length - 1;

  while (p1 <= p2) {
    if (nums[p1] === 0) {
      const temp = nums[p1];
      nums[p1] = nums[p0];
      nums[p0] = temp;
      p0++;
      p1++;
    } else if (nums[p1] === 2) {
      const temp = nums[p1];
      nums[p1] = nums[p2];
      nums[p2] = temp;
      p2--;
    } else p1++;
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0])); // [0,0,1,1,2,2]
console.log(sortColors([2, 0, 1])); // [0, 1, 2];
