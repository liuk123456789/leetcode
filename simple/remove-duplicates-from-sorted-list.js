/**
 * 给定一个已排序的链表的头 head ， 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。

示例 1：

输入：head = [1,1,2]
输出：[1,2]
示例 2：


输入：head = [1,1,2,3,3]
输出：[1,2,3]
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
var deleteDuplicates = function(head) {
    let cur = head // 创建一个引用
    // 如果cur或者cur的下个节点为null，无需进行遍历
    while(cur && cur.next) {
      // 存在重复，那么cur的下个节点的指针 指向下下个节点
      if(cur.val === cur.next.val) {
        cur.next = cur.next.next
      } else {
        // 指针指向下一个，继续遍历
        cur = cur.next
      }
    }
    return head
};