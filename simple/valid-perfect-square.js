/**
 * 给你一个正整数 num 。如果 num 是一个完全平方数，则返回 true ，否则返回 false 。

完全平方数 是一个可以写成某个整数的平方的整数。换句话说，它可以写成某个整数和自身的乘积。

不能使用任何内置的库函数，如  sqrt 。


示例 1：

输入：num = 16
输出：true
解释：返回 true ，因为 4 * 4 = 16 且 4 是一个整数。
示例 2：

输入：num = 14
输出：false
解释：返回 false ，因为 3.742 * 3.742 = 14 但 3.742 不是一个整数。
*/

/**
 * @param {number} num
 * @return {boolean}
 */

// 利用二分算法
/**
 * @param {number} num
 * @return {boolean}
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0, right = num
    while(left <= right) {
        const mid = Math.floor((right - left) / 2) + left
        const square = mid * mid
        if(square === num) {
            return true
        } else if(square < num) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return false
};

// 大佬解法
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let x = 1;
    while (num > 0) {
        num -= x;
        x += 2;
    }
    return num === 0;
};