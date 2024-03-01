// Ques 1: Implement Linear Search in JavaScript if element appear more than once
// Write a function to search "target" in nums. If target exists, then return its index.
// Otherwise, return -1. You must write an algorithm with O(n) runtime complexity.

// Input: nums = [4,0,6,7,0,1,2], target = 0  ----->>>>>  Output: [1,4]
const globalLinearSearch = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      result.push(i);
    }
  }
  if (result.length === 0) return -1;
  return result;
};
console.log(globalLinearSearch([4, 0, 6, 7, 0, 1, 2], 0));
