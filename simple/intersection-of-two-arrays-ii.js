/**
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。


示例 1：

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
示例 2:

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[4,9]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    // 排序两数组
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    const len1 = nums1.length, len2 = nums2.length;

    const intersection = []

    // 定义两个指针，分别指向两数组的头部
    let p1 = 0, p2 = 0
    // 其中一个数组遍历完成，那么终止while循环
    while (p1 < len1 && p2 < len2) {
        const num1 = nums1[p1], num2 = nums2[p2]
        // 如果num1 等于num2, 那么移动两个指针，并将其放入数组
        if (num1 === num2) {
            intersection.push(num1)
            p1++
            p2++
        } else if (num1 < num2) { // 如果num1的值小于num2,移动p1
            p1++
        } else {
            p2++
        }
    }
    return intersection
};