/*
//sum of all numbers in array
const sumArray = function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(i)
        sum += arr[i];
        // console.log(i);
    }
    return sum;
}

; */

var sumArray = function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        sum += arr[i];
        console.log(arr[i])

    }
    return sum
}
let arr = [4, 5, 8, 2];
console.log(sumArray(arr))






