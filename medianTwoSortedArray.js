function findMedianSortedArrays(nums1, nums2) {
    // Combine the two arrays into a single sorted array
    const combined = nums1.concat(nums2).sort((a, b) => a - b);

    // Calculate the total number of elements in the combined array
    const totalLength = combined.length;

    if (totalLength % 2 === 1) {
        // Calculate the middle index for odd total length
        const middleIndex = Math.floor(totalLength / 2);

        // Return the middle element for odd total length
        return combined[middleIndex];
    } else {
        // Calculate the middle indices for even total length
        const middleIndex1 = totalLength / 2 - 1;
        const middleIndex2 = totalLength / 2;

        // Return the average of middle elements for even total length
        return (combined[middleIndex1] + combined[middleIndex2]) / 2;
    }
}

// Example inputs
const nums1 = [1, 2];
const nums2 = [3, 4];

// Calculate and output the median
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2
