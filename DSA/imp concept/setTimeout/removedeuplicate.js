
//started with function
// var removeDuplicates = function (nums) {
// for (let i = 0; i < nums.length; i++) {
// for (let j = nums.length; j >= i + 1; j--) {
// if (nums[i] == nums[j]) {
// nums.splice(i, 1)
// }
// }
// }
// };

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length; j >= i + 1; j--) {
            if (nums[i] == nums[j]) {
                nums.splice(i, 1)
                let newArr = [];
                newArr.push(nums);
                console.log(newArr);
            }
        }
    }
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
console.log(nums);

