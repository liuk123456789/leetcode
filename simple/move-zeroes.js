/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。


示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
示例 2:

输入: nums = [0]
输出: [0]
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 1.定义两个指针left & right
// 2.判定下nums[right]的值，如果值不是0，那么交换下left指针对应的值，同时left指针前移【目的是让left和right指针处于统一位置】
// 3.如果nums[right]是0，那么将right指针 前移

var moveZeroes = function (nums) {
    let left = 0, right = 0
    const len = nums.length
    while (right < len) {
        if (nums[right] !== 0) {
            // 此处的目的是让非0值替换
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
        right++
    }
    return nums
};