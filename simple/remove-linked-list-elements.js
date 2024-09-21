/* 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。 
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]

示例 2：

输入：head = [], val = 1
输出：[]
示例 3：

输入：head = [7,7,7,7], val = 7
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
 * @param {number} val
 * @return {ListNode}
 */

// 利用递归
var removeElements = function(head, val) {
    if(head === null) return head
    // 删除除头结点外的所有节点val 等于目标值的节点
    head.next = removeElements(head.next, val) // 递归下
    return head.val === val ? head.next : head
};

// 利用迭代
var removeElements = function(head, val) {
    let dummyHead = new ListNode(0)
    dummyHead.next = head
    let temp = dummyHead
    while(temp.next !== null) {
        if(temp.next.val === val) {
            temp.next = temp.next.next // 删除节点，链表中删除节点就是通过修改指针指向的操作
        } else {
            temp = temp.next // 移动指正，temp指向下个节点
        }
    }
    return dummyHead.next
}