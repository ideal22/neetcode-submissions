class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // const hash = new Map()

        // for (let num of nums) {
        //     if (hash.has(num)) {
        //         return true
        //     }
        //     hash.set(num)
        // }

        // return false
        if (!nums.length) return false
        nums.sort()
        for (let i = 0; i < nums.length; i++) {
            const nextEl = i + 1;
            if (nums[i] === nums[nextEl]) {
                return true
            }
        }

        return false
    }
}
