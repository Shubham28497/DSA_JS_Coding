//kth largest element in array

//input nums=[3,2,1,5,6,4] k=2;  1 2 3 4 5 6
//output: 5

const findkthLarg = (nums, k) => {
  nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};
console.log(findkthLarg([3, 2, 1, 5, 6, 4], 2));
