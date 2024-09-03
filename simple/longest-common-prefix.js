/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
*/


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return ''
    let firstEle = strs[0]
    for (ch of strs) {
        for (let i = 0; i < firstEle.length; i++) {
            if (ch[i] !== firstEle[i]) {
                firstEle = firstEle.slice(0, i)
                break
            }
        }
    }
    return firstEle
};