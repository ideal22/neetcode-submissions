class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const hashMap = {
            '(': ')',
            '{': '}',
            '[': ']'
        }

        for (const p of s) {
            if (p === '(' || p === '{' || p === '[') {
                stack.push(p)
            } else {
                if (stack.length) {
                    const toBePopped = stack[stack.length - 1]
                    if (toBePopped &&  hashMap[toBePopped] === p) {
                        stack.pop()
                    }  else {
                        return false
                    }
                } else {
                    return false
                }
            }
        }

        return !stack.length
    }
}
