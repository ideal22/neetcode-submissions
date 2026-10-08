class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2) return false;
        const pairs = { "(": ")", "{": "}", "[": "]" };
        const stack = [];

        for (const ch of s) {
            if (ch in pairs) stack.push(pairs[ch]);
            else if (stack.pop() !== ch) return false;
        }
        return !stack.length;
    }
}
