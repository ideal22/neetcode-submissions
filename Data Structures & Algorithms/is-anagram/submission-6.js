class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    

    // racecar  carrace


    isAnagram(s, t) {
        if (s.length !== t.length) return false
        const hashS = new Map()
        const hashT = new Map()

        for (let i = 0; i < s.length; i++) {
            hashS.set(s[i], (hashS.get(s[i]) || 0) + 1)
            hashT.set(t[i], (hashT.get(t[i]) || 0) + 1)
        }

        for (const str of s) {
            if (hashS.get(str) !== hashT.get(str)) {
                return false
            }
        }

        return true
    }

}
