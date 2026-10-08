class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    isEqual(a, b) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true
    }
    checkInclusion(s1, s2) {
         if (s1.length > s2.length) return false
         let k = s1.length;
         let l = 0;
         const s1Count = new Array(26).fill(0)
         const s2Count = new Array(26).fill(0)

         for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++
            s2Count[s2.charCodeAt(i) - 97]++
         }

         if (this.isEqual(s1Count, s2Count)) return true

         for (let r = k; r < s2.length; r++) {
            s2Count[s2.charCodeAt(l) - 97]--
            l++
            s2Count[s2.charCodeAt(r) - 97]++
            if (this.isEqual(s1Count, s2Count)) return true
         }

         return false
    }
}
