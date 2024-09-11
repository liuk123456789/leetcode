/**
 * 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

 

示例 1：

输入：digits = [1,2,3]
输出：[1,2,4]
解释：输入数组表示数字 123。
示例 2：

输入：digits = [4,3,2,1]
输出：[4,3,2,2]
解释：输入数组表示数字 4321。
示例 3：

输入：digits = [0]
输出：[1]
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let len = digits.length - 1
    let pos = 0 // 代表是否需要进位
    while (len >= 0) {
        // 判定是否是最后一个元素
        if (len === digits.length - 1) {
            const add = digits[len] + 1
            digits[len] = Math.floor(add % 10)
            pos = Math.floor(add / 10) // 更新进位
        } else {
            digits[len] = digits[len] + pos
            pos = Math.floor(digits[len] / 10) // 更新进位
            digits[len] = digits[len] % 10
        }
        if (len === 0 && pos > 0) {
            digits.unshift(pos)
        }
        len--

    }
    return digits
};


// 大佬解法
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        digits[i] = digits[i] % 10
        // 如果没有产生进位，那么直接返回digit 
        if (digits[i] !== 0) {
            return digits
        }
        // 这里没写任何条件，那么会继续循环
    }
    digits.unshift(1)
    return digits
};