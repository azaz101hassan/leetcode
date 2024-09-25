// 1539. Kth Missing Positive Number

const findKthPositive = (arr: number[], k: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor(left + (right - left) / 2);
    const missing = arr[middle] - (middle + 1);

    if (missing < k) left = middle + 1;
    else right = middle - 1;
  }

  return left + k;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // 9
console.log(findKthPositive([1, 2, 3, 4], 2)); // 6
