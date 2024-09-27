/**
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。
*/

/**
 * 示例 1:
输入: rowIndex = 3
输出: [1,3,3,1]
示例 2:

输入: rowIndex = 0
输出: [1]
示例 3:
输入: rowIndex = 1
输出: [1,1]
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // 初始化数组，默认值都为0,首个元素为1
    // 后面每次循环后，fn(j) = fn(j)+fn(j-1)
    // 有点像斐波那契数列
    const rows = new Array(rowIndex + 1).fill(0)
    rows[0] = 1
    for(i = 1; i <= rowIndex; i++) {
        for(j = i; j > 0; j--) {
            rows[j] += rows[j-1]
        }
    }
    return rows
};