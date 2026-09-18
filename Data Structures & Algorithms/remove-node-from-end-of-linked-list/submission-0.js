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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummyNode = new ListNode();
        dummyNode.next = head;
        let curr = dummyNode;
        let length = 0;

        while (curr !== null) {
            curr = curr.next;
            length++;
        }

        curr = dummyNode;

        for (let i = 0; i < length - n - 1; i++) {
             curr = curr.next
        }

        curr.next = curr.next.next

        return dummyNode.next
    }
}
