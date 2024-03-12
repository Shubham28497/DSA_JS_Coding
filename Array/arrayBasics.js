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

