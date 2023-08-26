var majorityElement = function (nums) {
    let count = 0;
    let majorityNum = null;

    for (let num of nums) {
        if (count == 0) {
            majorityNum = num;
        }
        count += (num === majorityNum) ? 1 : -1;
    }
    return majorityNum;
}
const nums = [2, 2, 1, 1, 1, 2, 2]
majorityElement(nums);
console.log(nums);