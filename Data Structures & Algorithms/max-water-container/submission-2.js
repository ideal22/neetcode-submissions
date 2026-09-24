class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    
    maxArea(heights) {
       let n = heights;
       let max = 0;
       let low = 0;
       let high = n.length - 1;

       while (low < high) {
        const w = high - low
        const h = Math.min(n[low], n[high])
        const area = w * h;
        max = Math.max(area, max)
        if (n[low] < n[high]) low++
        else high-- 
       }
       return max
    }
}
