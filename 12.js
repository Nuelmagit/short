
const numbers = [1, 2, 3, 4, 5];

// LONGER FORM
for(let i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

// SHORTHAND
numbers.forEach(number => console.log(number));