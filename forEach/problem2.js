/*
 * Complete function calcOrderTotal which takes an order, an array of strings, and returns the total cost.
 * Use the provided priceList. Write one solution with a for loop, then another solution using forEach.
 *
 * example:
 *   order: ["coffee", "ice cream", "strawberries", "chocolate"];
 *   result: 7.5 + 5 + 3.5 + 2 = 18
 *
 */

const priceList = {
  bananas: 1,
  coffee: 7.5,
  creamer: 3,
  cereal: 3.25,
  "ice cream": 5,
  strawberries: 3.5,
  chocolate: 2,
  "dog food": 45,
  milk: 3,
  "orange juice": 4,
  broccoli: 2,
  spinach: 4,
  apples: 3,
};

const calcOrderTotalForLoop = (order) => {};

const calcOrderTotalForEach = (order) => {};

console.log(
  "expected",
  calcOrderTotalForLoop(["coffee", "ice cream", "strawberries", "chocolate"]),
  "to be 18"
);

console.log(
  "expected",
  calcOrderTotalForEach(["coffee", "ice cream", "strawberries", "chocolate"]),
  "to be 18"
);

console.log(
  "expected",
  calcOrderTotalForLoop([
    "dog food",
    "ice cream",
    "broccoli",
    "spinach",
    "coffee",
    "creamer",
  ]),
  "to be "
);

console.log(
  "expected",
  calcOrderTotalForEach([
    "dog food",
    "ice cream",
    "broccoli",
    "spinach",
    "coffee",
    "creamer",
  ]),
  "to be 66.5"
);
