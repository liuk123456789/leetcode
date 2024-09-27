/**
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。


示例 1：

输入：nums = [3,2,3]
输出：3
示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// 使用了大佬的解法，摩尔投票法
/**
 * 摩尔投票：
设输入数组 nums 的众数为 x ，数组长度为 n 。

推论一： 若记 众数 的票数为 +1 ，非众数 的票数为 −1 ，则一定有所有数字的 票数和 >0 。

推论二： 若数组的前 a 个数字的 票数和 =0 ，则 数组剩余 (n−a) 个数字的 票数和一定仍 >0 ，即后 (n−a) 个数字的 众数仍为 x 。

根据以上推论，记数组首个元素为 n1
，众数为 x ，遍历并统计票数。当发生 票数和 =0 时，剩余数组的众数一定不变 ，这是由于：

当 n1=x ： 抵消的所有数字中，有一半是众数 x 。
当 n1≠x ： 抵消的所有数字中，众数 x 的数量最少为 0 个，最多为一半。
利用此特性，每轮假设发生 票数和 =0 都可以 缩小剩余数组区间 。当遍历完成时，最后一轮假设的数字即为众数。
 */

var majorityElement = function (nums) {
    let votes = 0, x = 0
    for (const num of nums) {
        if (votes === 0) {
            x = num
        }
        const res = num === x ? 1 : -1
        votes += res
    }
    return x
};

// 这里增加一个验证环节。遍历数组nums统计x的数量
var majorityElement = function (nums) {
    let votes = 0, x = 0, count = 0
    for (const num of nums) {
        if (votes === 0) {
            x = num
        }
        if (num === x) {
            count += 1
        }
        const res = num === x ? 1 : -1
        votes += res
    }
    // 如果超过半数，那么返回x，否则返回0
    return count > nums.length / 2 ? x : 0
};