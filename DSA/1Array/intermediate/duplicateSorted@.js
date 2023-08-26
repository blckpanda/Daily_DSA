function removeDuplicate(nums) {
    if (nums.length <= 2) return nums.length;

    let slowPtr = 2;
    for (let fastPtr = 2; fastPtr < nums.length; fastPtr++) {
        if (nums[slowPtr] !== nums[fastPtr]) {
            nums[slowPtr] = nums[fastPtr];
            console.log('slowPtr', nums);
            slowPtr++;
        }
    }
    return slowPtr;
}

const nums = [0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3];
const newLength = removeDuplicate(nums)
console.log('new length', newLength);
console.log(nums);
console.log(nums.slice(0, newLength));