/**
 * 你有一个初始为空的浮点数数组 averages。另给你一个包含 n 个整数的数组 nums，其中 n 为偶数。

你需要重复以下步骤 n / 2 次：

从 nums 中移除 最小 的元素 minElement 和 最大 的元素 maxElement。
将 (minElement + maxElement) / 2 加入到 averages 中。
返回 averages 中的 最小 元素。

 

示例 1：

输入： nums = [7,8,3,4,15,13,4,1]

输出： 5.5

解释：

步骤	nums	averages
0	[7,8,3,4,15,13,4,1]	[]
1	[7,8,3,4,13,4]	[8]
2	[7,8,4,4]	[8,8]
3	[7,4]	[8,8,6]
4	[]	[8,8,6,5.5]
返回 averages 中最小的元素，即 5.5。
示例 2：

输入： nums = [1,9,8,3,10,5]

输出： 5.5

解释：

步骤	nums	averages
0	[1,9,8,3,10,5]	[]
1	[9,8,3,5]	[5.5]
2	[8,5]	[5.5,6]
3	[]	[5.5,6,6.5]
示例 3：

输入： nums = [1,2,3,7,8,9]

输出： 5.0

解释：

步骤	nums	averages
0	[1,2,3,7,8,9]	[]
1	[2,3,7,8]	[5]
2	[3,7]	[5,5]
3	[]	[5,5,5]
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function (nums) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    let average = Number.MAX_VALUE
    let left = 0, right = len - 1
    while (left < right) {
        const minElement = nums[left]
        const maxElement = nums[right]
        average = Math.min(average, (minElement + maxElement) / 2)
        left++
        right--
    }
    return average
};

// 官方解法中，少定义了一个变量
// 因为left + right = nums.length - 1
// 那么 right = nums.length - 1 - left
var minimumAverage = function (nums) {
    nums.sort((a, b) => a - b)
    const len = nums.length - 1
    let average = Number.MAX_VALUE
    let left = 0
    while (left < len- left) {
        const minElement = nums[left]
        const maxElement = nums[len - left]
        average = Math.min(average, (minElement + maxElement) / 2)
        left++
    }
    return average
};