class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const hash = new Map()
        let l = 0;
        let res = 0;
        let maxF = 0;

        for (let r = 0; r < s.length; r++) {
            hash.set(s[r], (hash.get(s[r]) || 0) + 1)
            maxF = Math.max(maxF, hash.get(s[r]))

            if ((r - l + 1) - maxF > k) {
                hash.set(s[l], hash.get(s[l]) - 1)
                l++
            }
            res = Math.max(res, r - l + 1)
        }
        return res
    }
}