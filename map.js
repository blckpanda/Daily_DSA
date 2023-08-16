function transformArray(arr, fn) {
    const returnedArray = [];

    for (let i = 0; i < arr.length; i++) {
        const transformedValue = fn(arr[i], i);
        returnedArray.push(transformedValue);
    }

    return returnedArray;
}

const inputArray = [1, 2, 3, 4];
const mappingFunction = (value, index) => value * index;
const transformedArray = transformArray(inputArray, mappingFunction);
console.log(transformedArray);


//using foreach
var map = function (arr, fn) {
    const transformedArr = [];
    arr.forEach((element, index) => {
        transformedArr[index] = fn(element, index);
    });
    return transformedArr;
};