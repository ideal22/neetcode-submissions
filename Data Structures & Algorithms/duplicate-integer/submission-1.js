class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Map()

        for (let num of nums) {
            if (hash.has(num)) {
                return true
            }
            hash.set(num)
        }

        return false
    }
}
