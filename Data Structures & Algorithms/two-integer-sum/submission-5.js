class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    //    const hash = {}
    //    for (let i = 0; i < nums.length; i++) {
    //     const diff = target - nums[i];
    //     if (hash.hasOwnProperty(diff)) {
    //         return [hash[diff], i]
    //     }
    //     hash[nums[i]] = i
    //    }

        // const hash = {}
        // for (let i = 0; i < nums.length; i++) {
        //     const diff = target - nums[i]
        //     if (hash.hasOwnProperty(diff)) {
        //         return [hash[diff], i]
        //     }
        //     hash[nums[i]] = i
        // }

    
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target && i !== j) {
                    return [i , j]
                }
            }
        }

        return []
    }
}
