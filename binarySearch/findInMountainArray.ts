// 1095. Find in Mountain Array

class MountainArray {
  private arr: number[];

  constructor(arr: number[]) {
    this.arr = arr;
  }

  get(index: number): number {
    return this.arr[index];
  }

  length(): number {
    return this.arr.length;
  }
}

const findInMountainArray = (
  target: number,
  mountainArr: MountainArray
): number => {
  let start = 0;
  let end = mountainArr.length() - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    const current = mountainArr.get(middle);

    if (
      mountainArr.get(middle - 1) > current ||
      current > mountainArr.get(middle + 1)
    )
      end = middle - 1;
    else start = middle + 1;
  }

  const peakIndex = start;

  start = 0;
  end = peakIndex - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    const current = mountainArr.get(middle);

    if (current === target) return middle;
    else if (target < current) end = middle - 1;
    else start = middle + 1;
  }

  start = peakIndex;
  end = mountainArr.length() - 1;

  while (start <= end) {
    const middle = Math.floor(start + (end - start) / 2);
    const current = mountainArr.get(middle);

    if (current === target) return middle;
    else if (current > target) start = middle + 1;
    else end = middle - 1;
  }

  return -1;
};

console.log(findInMountainArray(3, new MountainArray([1, 2, 3, 4, 5, 3, 1]))); // 2
console.log(findInMountainArray(3, new MountainArray([0, 1, 2, 4, 2, 1]))); // -1
