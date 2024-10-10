/**
 * 给定两个数组 nums1 和 nums2 ，返回 它们的 
交集
。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。

示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
示例 2：

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
解释：[4,9] 也是可通过的
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 利用set结构完成
var intersection = function (nums1, nums2) {
    const nums1Set = new Set(nums1)
    const intersection = []
    for (let num of nums2) {
        if (nums1Set.has(num)) {
            intersection.push(num)
        }
    }
    return [...new Set(intersection)]
};

/**
 * 如果两个数组是有序的，则可以使用双指针的方法得到两个数组的交集。

首先对两个数组进行排序，然后使用两个指针遍历两个数组。可以预见的是加入答案的数组的元素一定是递增的，为了保证加入元素的唯一性，我们需要额外记录变量 pre 表示上一次加入答案数组的元素。

初始时，两个指针分别指向两个数组的头部。每次比较两个指针指向的两个数组中的数字，如果两个数字不相等，则将指向较小数字的指针右移一位，如果两个数字相等，且该数字不等于 pre ，将该数字添加到答案并更新 pre 变量，同时将两个指针都右移一位。当至少有一个指针超出数组范围时，遍历结束。
*/

var intersection = function (nums1, nums2) {
    nums1.sort((x, y) => x - y);
    nums2.sort((x, y) => x - y);
    const length1 = nums1.length, length2 = nums2.length;
    let index1 = 0, index2 = 0;
    const intersection = [];
    while (index1 < length1 && index2 < length2) {
        const num1 = nums1[index1], num2 = nums2[index2];
        if (num1 === num2) {
            // 保证加入元素的唯一性
            if (!intersection.length || num1 !== intersection[intersection.length - 1]) {
                intersection.push(num1);
            }
            index1++;
            index2++;
        } else if (num1 < num2) {
            index1++;
        } else {
            index2++;
        }
    }
    return intersection;
}
