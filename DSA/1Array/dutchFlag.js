function sortColors(nums) {
    let low = 0; // Pointer for 0s
    let mid = 0; // Pointer for 1s
    let high = nums.length - 1; // Pointer for 2s

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
}


const arr = [0, 2, 1, 2, 0, 1, 0, 2, 2, 1, 0, 0, 1, 2, 2, 2, 1, 1]
sortColors(arr);
console.log(arr);