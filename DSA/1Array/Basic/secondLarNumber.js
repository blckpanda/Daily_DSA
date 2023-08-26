function findSecondLar(arr) {
    if (arr.length < 2) {
        return undefined;
    }
    let firstLargest = arr[0];
    let secondLargest = arr[1];

    if (secondLargest > firstLargest) {
        [firstLargest, secondLargest] = [secondLargest, firstLargest];
    }
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}
const array = [12, 45, 8, 21, 5, 34];
const secondL = findSecondLar(array);
console.log(`second largest number is ${secondL}`);