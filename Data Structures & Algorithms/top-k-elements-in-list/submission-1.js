class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // const countList = new Array(nums.length + 1).fill([])
        const countList = Array.from({ length: nums.length + 1 }, () => []);
        const hash = {}
        const res = []
       for (let i = 0; i < nums.length; i++) {
            hash[nums[i]] = (hash[nums[i]] || 0) + 1
       }
        for (let [key, value] of Object.entries(hash)) {
            countList[value].push(key)
        }
        for (let i = countList.length - 1; i >= 0 && res.length < k; i--) {
           for (const item of countList[i]) {
            res.push(item)
            if (res.length === k) break;
           }

        }

        return res
    }
}
