class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let best = 0;
        let left = 0;

        for (let right = 1; right < prices.length; right++) {
            if (prices[left] > prices[right]) {
                left = right
            } else {
                best = Math.max(best, prices[right] - prices[left])
            }
        }

        return best
    }
}
