// 901. Online Stock Span

class StockSpanner {
  private prices: number[] = [];

  constructor() {}

  next(price: number): number {
    this.prices.push(price);
    let span = 0;

    for (let i = this.prices.length - 1; i >= 0; i--) {
      if (this.prices[i] <= price) span++;
      else break;
    }

    return span;
  }
}

const stockSpanner = new StockSpanner();
console.log(stockSpanner.next(100)); // return 1
console.log(stockSpanner.next(80)); // return 1
console.log(stockSpanner.next(60)); // return 1
console.log(stockSpanner.next(70)); // return 2
console.log(stockSpanner.next(60)); // return 1
console.log(stockSpanner.next(75)); // return 4, because the last 4 prices (including today's price of 75)) were less than or equal to today's price.
console.log(stockSpanner.next(85)); // return 6

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
