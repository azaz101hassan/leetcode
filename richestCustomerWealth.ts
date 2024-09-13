// Solution 1: for loop
const maximumWealth = (accounts: number[][]): number => {
  let wealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let currentBalance = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      currentBalance += accounts[i][j];
    }
    wealth = Math.max(wealth, currentBalance);
  }

  return wealth;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);

//Solution 2: for...of loop
const maximumWealth2 = (accounts: number[][]): number => {
  let wealth = 0;
  for (let account of accounts) {
    let currentBalance = 0;
    for (let balance of account) {
      currentBalance += balance;
    }
    wealth = Math.max(wealth, currentBalance);
  }

  return wealth;
};

console.log(
  maximumWealth2([
    [1, 2, 3],
    [3, 2, 1],
  ])
);
console.log(
  maximumWealth2([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);
console.log(
  maximumWealth2([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);
