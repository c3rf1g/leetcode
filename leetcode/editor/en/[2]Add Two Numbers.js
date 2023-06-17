
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function arrayToList(arr) {
    if (arr.length === 0) {
        return null;
    }

    const head = {
        val: arr[0],
        next: null
    };
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        const newNode = {
            val: arr[i],
            next: null
        }
        current.next = newNode;
        current = newNode;
    }

    return head;
}

var addTwoNumbers = function(l1, l2) {
    let sum = []
    let curr_l1 = l1;
    let curr_l2 = l2;
    let prev = 0
    // console.log(l1.next.next.next)

    while (curr_l1 != null || curr_l2 != null) {
        let v1 = curr_l1 ? curr_l1.val : 0;
        let v2 = curr_l2 ? curr_l2.val : 0;
        let summary = v1 + v2 + prev
        if (summary >= 10) {
            sum.push(summary - 10)
            prev = 1
        } else {
            prev = 0
            sum.push(summary)
        }
        if (curr_l1 != null)
            curr_l1 = curr_l1.next;
        if (curr_l2 != null)
        curr_l2 = curr_l2.next;
    }
    if (prev > 0) {
        sum.push(prev)
    }
    const linkedList = arrayToList(sum);
    return linkedList;
};
//leetcode submit region end(Prohibit modification and deletion)
