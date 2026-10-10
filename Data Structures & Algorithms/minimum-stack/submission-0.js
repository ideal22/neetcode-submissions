class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (!this.minStack.length) this.minStack.push(val)
        else this.minStack.push(Math.min(this.minStack.at(-1), val))
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length) {
             this.stack.pop();
             this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length) {
            return this.stack.at(-1)
        }
        return 0
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.at(-1)
    }
}
