class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    
    maxArea(heights) {
       let nums = heights
       let low = 0;
       let high = nums.length - 1;
       let max = 0;

       while (low < high) {
        const area = Math.min(nums[low], nums[high]) * (high - low)
        max = Math.max(area, max)
        if (nums[low] < nums[high]) low++
        else high--
       }

       return max
    }
}
