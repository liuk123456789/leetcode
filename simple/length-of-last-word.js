/**
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。

单词 是指仅由字母组成、不包含任何空格字符的最大
子字符串
。


示例 1：

输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为 5。
示例 2：

输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为 4。
示例 3：

输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为 6 的“joyboy”。
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let end = s.length - 1
    // 从后往前遍历，如果遇到空格，那么移动指针
    // end >= 0 是为了不让循环走完，多走一次循环
    while(end >= 0 && s[end] === ' ') end--
    // 全部是空格的情况
    if(end < 0) return 0
    // 再重新定义个指针，遍历下，遇到空格，那么这时候终止循环
    let point = end
    // point >= 0 是为了不让循环走完，多走一次循环
    while(point >= 0 && s[point] !== ' ')point--
    return end - point
};