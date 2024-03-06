// Sort() Method in Javascript

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

console.log(fruits.sort());

const nums = [10, 5, 18, 1, 27];
console.log(nums.sort()); 
// it should give 1,5,10,18,27
//but it gives 1,10,18,27,5 bcz first it convert it into string
//and take first alphabet 
