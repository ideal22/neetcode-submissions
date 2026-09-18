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
    // hasCycle(head) {
    //     const hashSet = new Map();
    //     let curr = head;

    //     while(curr !== null) {
    //         if (hashSet.has(curr)) {
    //             return true
    //         } else {
    //             hashSet.set(curr)
    //             curr = curr.next
    //         }
    //     }


    //     return false
    // }

    hasCycle(head) {
        let slow = head;
        let fast = head;
        

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next

             if (slow === fast){
                return true
            }
        }

        return false
    }
}
