/**
 * 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

示例 1：

输入: s = "leetcode"
输出: 0

示例 2:

输入: s = "loveleetcode"
输出: 2

示例 3:

输入: s = "aabb"
输出: -1
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const map = new Map()
    for (let [key, values] of Array.from(s).entries()) {
        if (map.has(values)) {
            map.set(values, -1)
        } else {
            map.set(values, key)
        }
    }

    let first = s.length
    for (let pos of map.values()) {
        if (pos !== -1 && pos < first) {
            first = pos
        }
    }
    if (first === s.length) {
        first = -1
    }
    return first
};
