/**
 * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
 * 示例 1:
 * 输入: numRows = 5
 * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * 示例 2:

 * 输入: numRows = 1
 * 输出: [[1]]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

// 思路：
// 从第三行开始，除了第一个和最后一个值，的一个和最后一个元素值都是1
// 其他的值都等于上一个相邻元素的和
var generate = function(numRows) {
    const res = []
    for(let i = 0; i < numRows; i++) {
        // 填充初始化数据，默认都是1
        const rows = new Array(i + 1).fill(1)
        for(j = 1; j < i; j++) {
            rows[j] = res[i-1][j-1] + res[i-1][j]
        }
        res.push(rows)
    }
    return res
};