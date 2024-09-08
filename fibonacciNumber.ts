// Solution 1 - Iterative
const fib = (n: number): number => {
  if (n <= 1) return n;

  let number1 = 0;
  let number2 = 1;
  for (let i = 2; i <= n; i++) {
    const nextNumber = number1 + number2;
    number1 = number2;
    number2 = nextNumber;
  }

  return number2;
};

console.log(fib(2));
console.log(fib(3));
console.log(fib(4));

// Solution 2 - Recursive
const fibRecusive = (n: number): number => {
  if (n <= 1) return n;

  return fibRecusive(n - 1) + fibRecusive(n - 2);
};

console.log(fibRecusive(2));
console.log(fibRecusive(3));
console.log(fibRecusive(5));

// const fibMemoization = (n: number): number => {};

// console.log(fibMemoization(2));
// console.log(fibMemoization(3));
// console.log(fibMemoization(10));
