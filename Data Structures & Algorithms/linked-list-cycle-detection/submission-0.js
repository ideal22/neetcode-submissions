/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const hashSet = new Map();
        let curr = head;

        while(curr !== null) {
            if (hashSet.has(curr)) {
                return true
            } else {
                hashSet.set(curr)
                curr = curr.next
            }
        }


        return false
    }
}
