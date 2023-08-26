function minEle(array) {
    if (array.length === 0) {
        return undefined;
    }

    let min = array[0];

    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
};

const array = [12, 45, 8, 21, 5, 54, 34];
const minElement = minEle(array);
console.log(minElement);