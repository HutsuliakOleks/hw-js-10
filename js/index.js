// Завдання 1
const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хом'як"];

function countItems(array, condition) {
  let count = 0;
  const filteredArray = [];
  for (const element of array) {
    const pass = condition(element);
    if (condition === true) {
      filteredArray.push(element);
    }
  }
  return array, condition;
}

const isEven = (num) => (num) => 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));

// Завдання 2
function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));

// Завдання 3
function repeatMessage(times, messageCreator) {
    for (let i = 0; i < times; i = i + 1) {
        const repeat = messageCreator(i);
    }
    return repeatMessage(times, messageCreator);
}
console.log(repeatMessage(3, "Sasha"));
