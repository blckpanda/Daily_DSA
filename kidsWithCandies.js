var kidsWithCandies = function (candies, extraCandies) {
    let maxCandies = Math.max(...candies);

    const result = [];
    for (let i = 0; i < candies.length; i++) {

        result[i] = candies[i] + extraCandies >= maxCandies
    }
    return result;
};



const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const result = kidsWithCandies(candies, extraCandies);
console.log(result);