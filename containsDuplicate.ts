const containsDuplicate = (nums: number[]): boolean => {
  const dict = {};
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (dict.hasOwnProperty(val)) return true;
    dict[val] = val;
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
