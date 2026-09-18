class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     const hashMap = new Map();

    //     for (const num of nums) {
    //         if (hashMap.has(num)) {
    //             return true
    //         }
    //         hashMap.set(num)
    //     }

    //     return false
    // }

    hasDuplicate(nums) {
        const hash = new Map();

        for (const num of nums) {
            hash.set(num, (hash.get(num) || 0) + 1)
        }

        for (const val of Array.from(hash.values())) {
            if (val > 1) return true
        }

        return false
    }
}
