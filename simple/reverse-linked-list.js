/**
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
示例 1：
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]

示例 2：
输入：head = [1,2]
输出：[2,1]

示例 3：
输入：head = []
输出：[]

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 利用迭代进行,使用双指针
var reverseList = function(head) {
    let prev = null
    let cur = head
    while(cur) {
        // 暂存下cur.next节点
        const next = cur.next
        // 将cur.next 指向prev
        cur.next = prev
        // 移动prev指针
        prev = cur
        // 移动cur指针
        cur = next
    }
    return prev
};

// 2. 利用递归
var reverseList = function(head) {
    // 1. 递归终止条件
    if (head == null || head.next == null) return head
    const p = reverseList(head.next)
    head.next.next = head
    head.next = null
    return p
};