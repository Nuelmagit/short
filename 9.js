7. Remove Duplicates From an Array
const numbers = [1, 1, 20, 3, 3, 3, 9, 9];
const uniqueNumbers = [...new Set(numbers)]; // -> [1, 20, 3, 9]