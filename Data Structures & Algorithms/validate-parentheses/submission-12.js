class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const hashMap = {
            "(": ")",
            "{": "}",
            "[": "]",
        };

        for (const p of s) {
            if (p === "(" || p === "{" || p === "[") {
                stack.push(p);
                continue;
            }
            if (!stack.length) return false;

            const toBePopped = stack[stack.length - 1];
            if (hashMap[toBePopped] === p) {
                stack.pop();
            } else {
                return false;
            }
        }

        return !stack.length;
    }
}
