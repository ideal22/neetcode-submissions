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
           if (hash.has(num)) return true
           hash.set(num)
        }

        return false
    }
}
