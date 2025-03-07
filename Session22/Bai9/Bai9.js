let numbers = [3, 5, 3, 2, 8, 5, 5, 3, 2, 8];

numbers = [...new Set(numbers)].sort((a, b) => a - b);

console.log(numbers);
