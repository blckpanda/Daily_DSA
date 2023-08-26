function averageArray(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;
    return avg;
}
const array = [12, 5, 3, 25, 48, 8, 66, 5, 8, 5];
const aveArray = averageArray(array);
console.log(aveArray);