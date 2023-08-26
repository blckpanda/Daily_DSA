function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        console.log(sum)
    }
    return sum;
}

const array = [1, 24, 58, 2, 15, 3, 4];
const sum = calculateSum(array);
console.log("Sum of the elements:", sum)