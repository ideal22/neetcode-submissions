class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if (x < 0) return false
        let str = x + '';
        let reversedStr = ''

        for (let i = str.length - 1; i >= 0; i--) {
            reversedStr += str[i]
        }

        return str === reversedStr
    }
}
