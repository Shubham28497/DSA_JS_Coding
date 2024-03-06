// Sort() Method in Javascript

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

console.log(fruits.sort());

const nums = [10, 5, 18, 1, 27];
console.log(nums.sort());
// it should give 1,5,10,18,27
//but it gives 1,10,18,27,5 bcz first it convert it into string
//and take first alphabet

//* with number
const arr = [10, 5, 18, 1, 27];
const compareFunction = (a, b) => {
  // 1. <0 => a comes first
  // 2. 0  => nothing changes
  // 3. >0 => b comes first
  return a - b;
};
//if we want in ascending order then do return a-b
//if we want in descending order then do retun b-a
console.log(arr.sort(compareFunction));
