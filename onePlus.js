function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            console.log(digits[i]);
            digits[i]++;
            console.log(digits[i]);
            console.log(digits)
            return digits;
        } else {
            console.log(digits[i]);
            digits[i] = 0;
            console.log(digits[i]);

        }
    }
    digits.unshift(1);
    console.log(digits)
    return digits;
}

const digits = [1, 2, 9];
const result = plusOne(digits); // [1, 3, 0]
console.log(result);

const d2 = [9];
const r2 = plusOne(d2);
console.log(r2);