function merge(nums1, nums2, m, n) {
    // Initialize two pointers, i and j, pointing to the beginning of nums1 and nums2, respectively.
    i = 0
    j = 0

    // While both arrays have elements, compare the current elements and move the smaller element to the front of nums1.
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            nums1[i + j] = nums1[i]
            i++
        } else {
            nums1[i + j] = nums2[j]
            j++
        }
    }

    // If nums1 has any remaining elements, copy them to the end of nums1.
    if (i < m) {
        for (k = i; k < m; k++) {
            nums1[k + n] = nums1[k]
        }
    }

    // If nums2 has any remaining elements, copy them to the end of nums1.
    if (j < n) {
        for (k = j; k < n; k++) {
            nums1[k + m] = nums2[k]
        }
    }
}

/* function merge(nums1, m, nums2, n) {
    let i = m - 1; // Index for nums1
    let j = n - 1; // Index for nums2
    let k = m + n - 1; // Index for the merged array
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    while (j >= 0) {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
}

// Example inputs
const nums1 = [1, 3, 5, 0, 0, 0];
const m = 3;
const nums2 = [2, 4, 6];
const n = 3;

// Merge the arrays
merge(nums1, m, nums2, n);

console.log(nums1); // Output: [1, 2, 3, 4, 5, 6]
*/


const arr1 = [1, 2, 3, 0, 0, 0]; m = 3;
const arr2 = [2, 5, 6], n = 3;
const result = merge(arr1, arr2, m, n);
console.log("arr1", arr1, 'arr2', arr2);
