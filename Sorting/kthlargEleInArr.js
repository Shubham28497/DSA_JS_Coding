//kth largest element in array

//input nums=[3,2,1,5,6,4] k=2;  1 2 3 4 5 6
//output: 5
//Input: A[] = {1, 2, 6, 4, 5}, K = 3
const findkthLarg = (nums, k) => {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};
console.log(findkthLarg([1, 2, 6, 4, 5], 3));
