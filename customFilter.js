// making a filter that return array that only have truthy value.
function customFilter(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
const arr = [2, 5, 8, 10, 12, 15, 18, 20, 22];
function graterThan10(n) {
    return n > 10;
}

const arr2 = [2, 5, 8, 10, 11, 16, 17, 18, 19]
function firstIndex(n, i) {
    return i === 5;
}
const filteredArr = customFilter(arr, graterThan10);
console.log(filteredArr);

const filter2 = customFilter(arr2, firstIndex);
console.log(filter2);
