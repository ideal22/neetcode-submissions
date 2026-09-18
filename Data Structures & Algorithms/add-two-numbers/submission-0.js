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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummyNode = new ListNode()
        let curr = dummyNode
        let carry = 0;


        while(l1 || l2  || carry ) {
            let l1Val = l1 ? l1.val : 0
            let l2Val = l2 ? l2.val : 0
            let sum  = l1Val + l2Val + carry
            carry = Math.floor(sum / 10);
            sum = sum % 10
            curr.next = new ListNode(sum)

            curr = curr.next

            l1 = l1 ? l1.next : null
            l2 = l2 ? l2.next : null
        }


        return dummyNode.next
    }
}
