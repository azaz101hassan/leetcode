import { endConsoleTimer, startConsoleTimer } from "../utils";

// Solution 1 - My Solution
const dietPlanPerformance = (
  calories: number[],
  k: number,
  lower: number,
  upper: number
): number => {
  let currentSum = 0;
  for (let i = 0; i < k; i++) {
    currentSum += calories[i];
  }

  let points = currentSum < lower ? -1 : currentSum > upper ? 1 : 0;

  for (let i = k; i < calories.length; i++) {
    currentSum += calories[i] - calories[i - k];
    if (currentSum >= lower && currentSum <= upper) continue;
    if (currentSum < lower) points--;
    else points++;
  }
  return points;
};

startConsoleTimer(dietPlanPerformance.name);
console.log(dietPlanPerformance([1, 2, 3, 4, 5], 1, 3, 3));
console.log(dietPlanPerformance([3, 2], 2, 0, 1));
console.log(dietPlanPerformance([6, 5, 0, 0], 2, 1, 5));
endConsoleTimer(dietPlanPerformance.name);
// 0
// 1
// 0
// dietPlanPerformance: 2.103ms

// Solution 2 - Chat Optimized
const dietPlanPerformance2 = (
  calories: number[],
  k: number,
  lower: number,
  upper: number
): number => {
  let currentSum = 0;
  let points = 0;

  for (let i = 0; i < k; i++) {
    currentSum += calories[i];
  }
  points = currentSum < lower ? -1 : currentSum > upper ? 1 : 0;

  for (let i = k; i < calories.length; i++) {
    currentSum += calories[i] - calories[i - k];

    if (currentSum < lower) {
      points--;
    } else if (currentSum > upper) {
      points++;
    }
  }

  return points;
};

startConsoleTimer(dietPlanPerformance2.name);
console.log(dietPlanPerformance2([1, 2, 3, 4, 5], 1, 3, 3));
console.log(dietPlanPerformance2([3, 2], 2, 0, 1));
console.log(dietPlanPerformance2([6, 5, 0, 0], 2, 1, 5));
endConsoleTimer(dietPlanPerformance2.name);
// 0
// 1
// 0
// dietPlanPerformance2: 0.547ms
