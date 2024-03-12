// Arrays in Javascript

// Decalaration
let person = {
  name: "Piyush",
  age: 25,
};
let arr = ["apple", "banana", "cherry", person];

console.log(arr.length); // know the length of an array
// # Add and Remove Elements

// Add to End of the Array
arr.push("orange");
// console.log(arr)

// Remove From End of the Array
arr.pop();
arr.pop();
// console.log(arr);
// Add to Top of the Array
arr.unshift("orange");
console.log(arr);
// Remove From Top of the Array
arr.shift();
console.log(arr);
// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

// While Loop
let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);

  i++;
}
// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
const newNum = numbers.map((item, index, array) => {
  return item + 5;
});
console.log(newNum);

// filter in javascript
const newNum1=numbers.filter((item, index, array) => {
  return item > 3;
});
console.log(newNum1)
// reduce in javascript
const newNum2=numbers.reduce((prev, item) => {
  return prev + item;
}, 2);
console.log(newNum2);
