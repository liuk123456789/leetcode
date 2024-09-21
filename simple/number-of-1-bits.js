/**
 * 编写一个函数，获取一个正整数的二进制形式并返回其二进制表达式中 
设置位
 的个数（也被称为汉明重量）。

 

示例 1：

输入：n = 11
输出：3
解释：输入的二进制串 1011 中，共有 3 个设置位。
示例 2：

输入：n = 128
输出：1
解释：输入的二进制串 10000000 中，共有 1 个设置位。
示例 3：

输入：n = 2147483645
输出：30
解释：输入的二进制串 11111111111111111111111111111101 中，共有 30 个设置位。
*/

/**
 * @param {number} n
 * @return {number}
 */

// 遍历，利用与运算，判定是否二进制数对应的位数是否是1
var hammingWeight = function(n) {
    let res = 0
    while(n !== 0) {
        res += n & 1
        n >>= 1  // 右移一位
    }
    return res
};

// 巧妙的解法 利用n&n-1, 详细的流程看下下方的连接
// https://leetcode.cn/problems/number-of-1-bits/solutions/2361978/191-wei-1-de-ge-shu-wei-yun-suan-qing-xi-40rw/

// 改造成js的版本
var hammingWeight = function(n) {
    let res = 0
    while(n) {
        res += 1
        n &= n-1
    }
    return res
}
