const getConcatenation = (nums: number[]): number[] => {
  const concatenatedNums = [];
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    concatenatedNums[i] = nums[i];
    concatenatedNums[numsLength + i] = nums[i];
  }
  return concatenatedNums;
};

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
