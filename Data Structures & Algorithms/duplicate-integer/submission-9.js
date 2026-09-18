class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if (!nums.length) return false
        // const hash = new Map()

        // for (let num of nums) {
        //     if (hash.has(num)) {
        //         return true
        //     }
        //     hash.set(num)
        // }

        // return false
        // if (!nums.length) return false
        // nums.sort()
        // for (let i = 0; i < nums.length; i++) {
        //     if (nums[i] === nums[i + 1]) {
        //         return true
        //     }
        // }

        // return false

        // const map = new Map();

        // for (const num of nums) {
        //     if (map.has(num)) {
        //         return true
        //     }
        //     map.set(num)
        // }

        // return false

        for (let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if (nums[i] === nums[j]) {
                    return true
                }
            }
        }

        return false
   
    }
}
