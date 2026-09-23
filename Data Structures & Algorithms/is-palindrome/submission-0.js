class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isLetter(char) {
        return /^[a-zA-Z0-9]$/.test(char);
    }
    isPalindrome(s) {
        if (!s.length) return false
        let res = ''

        for (const str of s) {
            if (this.isLetter(str)) res+=str.toLowerCase()
        }

        let low = 0;
        let high = res.length - 1;

        while (low <= high) {
            if (res[low] !== res[high]) return false
            else {
                low++
                high--
            }
        }

        return true
    }
}
