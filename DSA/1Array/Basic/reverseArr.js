function reverseArr(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const temp = arr[start];
        console.log(temp);
        arr[start] = arr[end];
        console.log(arr[start], arr[end]);
        arr[end] = temp;
        console.log(arr[end], temp);
        //At each iteration of the loop, the function first stores the element at the start index in a temporary variable called temp. It then assigns the element at the end index to the element at the start index, and the element at the start index to the temporary variable. This effectively swaps the two elements.

        //The function then increments the start index and decrements the end index, and continues to the next iteration of the loo

        start++;
        console.log(start)
        end--;
        console.log(end)
    }
}
const array = [12, 4, 5, 8, 21, 5, 32];
reverseArr(array); // [32 , 5 , 21 , 8 , 5 , 4 , 1]
console.log("Reversed array:", array);
