class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1)
        }


        for (const num of Array.from(hashMap.values())) {
            if (num > 1) {
                return true
            }
        }

        return false
    }
}
