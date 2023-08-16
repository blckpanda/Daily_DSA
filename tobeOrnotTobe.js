var expect = function (val) {
    return {
        toBe: (v) => {
            if (v === val) return true;
            else throw new Error('Not Equal');
        },
        notToBe: (v) => {
            if (v !== val) return true;
            else throw new Error('Equal')
        }
    }
}
const result = 5;
try {
    expect(result).toBe(10)
} catch (error) {
    console.error(error.message);
}
