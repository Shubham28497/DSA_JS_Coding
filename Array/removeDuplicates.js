// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]
//with js methods
function removeDuplicates(nums){
    for(let i=0;i<nums.length;i++){
        if(nums[i]==nums[i+1]){
            nums.splice(i+1,1)
            i--
                }
    }
                return nums.length;

}
// Time Complexity - O(n)
// Space Complexity - O(1
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));