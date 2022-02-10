// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// function twoSum(nums, target) {

//     var result = []

//     for (var index = 0; index < nums.length; index++) {

//         var leftOver = target - nums[index]
//         var indexSecond = nums.indexOf(leftOver)

//         if (indexSecond != -1 && index != indexSecond) {
//             result = [
//                 index,
//                 indexSecond
//             ]
//             break;
//         }
//     }

//     return result
// }







function twoSum(nums, target) {
    const viewed = []; // access by index is faster that Map
    for(let i=0; i < nums.length;i++){
        const current = nums[i];
        const j = viewed[current];
        console.log(i, j)
        if(j !== undefined){
            return [i, j];
        }

        viewed[target - current] =  i; 
    }
};


var numbers = [5, 7, 9, 4, 5, 9]

var targetSum = 9

twoSum(numbers, targetSum)

