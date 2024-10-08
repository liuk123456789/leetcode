/**
 * 你一个整数 n，请你判断该整数是否是 2 的幂次方。如果是，返回 true ；否则，返回 false 。

如果存在一个整数 x 使得 n == 2x ，则认为 n 是 2 的幂次方。

 

示例 1：

输入：n = 1
输出：true
解释：20 = 1
示例 2：

输入：n = 16
输出：true
解释：24 = 16
示例 3：

输入：n = 3
输出：false
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while (n >= 1) {
        if (n === 1) return true
        n = n / 2
    }
    return false
};

// 大佬们使用的位运算

// 如果n是2的x次幂，那么n的高位一定是1,如二进制数 10【十进制的2】、100【十进制的4】、1000【十进制的8】、10000【十进制的16】
// 那么 n - 1 便是取反，所以n & (n - 1) === 0

var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) === 0;
};