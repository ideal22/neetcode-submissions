class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        const res = []

        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue
            let low = i + 1;
            let high = nums.length - 1;

            while (low < high) {
                const threeSum = nums[i] + nums[low] + nums[high]

                if (threeSum > 0) high--
                else if (threeSum < 0) low++
                else {
                    res.push([nums[i], nums[low], nums[high]])
                    low++
                    while (low < high && nums[low] === nums[low - 1]) {
                        low++
                    }
                
                }
            }
        }
        return res
    }
}
