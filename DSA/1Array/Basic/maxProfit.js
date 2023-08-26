function maxProfit(prices) {
    let lowestPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        } else {
            const profit = (prices[i]] - lowestPrice);
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}