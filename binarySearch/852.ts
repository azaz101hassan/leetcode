// 852. Peak Index in a Mountain Array

const peakIndexInMountainArray = (arr: number[]): number => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    const current = arr[middle];
    if (arr[middle - 1] > current || current > arr[middle + 1]) {
      end = middle - 1;
    } else start = middle + 1;
  }

  return start;
};

console.log(peakIndexInMountainArray([0, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 2, 1, 0])); // 1
console.log(peakIndexInMountainArray([0, 10, 5, 2])); // 1
