class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let longest = 0;
        const set = new Set()

        for (let r = 0; r < s.length; r++) {
            while(set.has(s[r])) {
                set.delete(s[l])
                l++
            }
            longest = Math.max(longest, r - l + 1)
            set.add(s[r])

        }
        return longest
    }

    
}
