class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    
    maxArea(heights) {
       let low = 0;
       let high = heights.length - 1;
       let res = 0;

       while(low <= high) {
        const height = Math.min(heights[low], heights[high]);
        const witdh = high - low
        const total = height * witdh
        res = Math.max(res, total)
        if (heights[low] < heights[high]) {
            low++
        } else {
            high--
        }
       }

       return res
    }
}
