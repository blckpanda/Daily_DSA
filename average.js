const averArray = function averArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.floor(sum / arr.length);
}

let array1 = [1, 5, 6, 8, 9, 22];

console.log(averArray(array1));