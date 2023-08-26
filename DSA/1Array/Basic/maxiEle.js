function findMaxEle(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let max = arr[0];// initialize with first element
    // loop through the array and compare each value to see which is greater than current max
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];

        }
    }
    return max;
}

const array = [12, 45, 8, 21, 5, 54, 34];
const maxElement = findMaxEle(array);
console.log(maxElement);