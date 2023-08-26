class Solution {
    missingNumber(array, n) {
        let expectedSum = (n * (n + 1) / 2);
        let actualSum = 0;

        for (let i = 0; i < array.length; i++) {
            actualSum += array[i]
        }
        let missedNumber = expectedSum - actualSum;
        return missedNumber;
    }
}

const solution = new Solution();
const arr = [1, 2, 3, 5];
const ans = solution.missingNumber(arr, 5);
console.log("missing Number:", ans);