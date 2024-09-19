/**
 * 给你一个整数 columnNumber ，返回它在 Excel 表中相对应的列名称。

例如：

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

示例 1：

输入：columnNumber = 1
输出："A"
示例 2：

输入：columnNumber = 28
输出："AB"
示例 3：

输入：columnNumber = 701
输出："ZY"
示例 4：

输入：columnNumber = 2147483647
输出："FXSHRXW"
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */

// 可以看成26进制来完成这个题目，如下
// AA = (0 + 1) * (25 + 1) + (0 + 1)= 27
// AZ = (0 + 1) * (25 + 1) + (25 + 1) = 52
// ZY = (25 + 1) * (25 + 1) + (24 + 1) = 701

// A 对应的ASCLL码的值是 'A'.charCodeAt(0) = 65
var convertToTitle = function(columnNumber) {
    let result = ''
    while(columnNumber) {
        // 为什么减掉1，让它转为[0,25] -> [A,Z]
        columnNumber--
        const val = columnNumber % 26
        // 余数+65便是对应的大写字母
        result = String.fromCharCode(65 + val) + result
        columnNumber = Math.floor(columnNumber / 26)
    }
    return result
};