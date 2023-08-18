
var once = function (fn) {
    let hasBeenCalled = false; // Initialize a flag to track if the function has been called
    let result; // Create a variable to store the result of the function call

    return function (...args) { // Return a new function
        if (!hasBeenCalled) { // If the function hasn't been called yet
            result = fn(...args); // Call the original function with the given arguments
            hasBeenCalled = true; // Set the flag to true, indicating the function has been called
            return result; // Return the result of the original function call
        } else {
            return undefined; // If the function has already been called, return undefined
        }
    };
};

let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);
console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 4));
console.log(onceFn(5, 8, 6));
