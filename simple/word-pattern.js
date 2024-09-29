/**
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。


示例1:

输入: pattern = "abba", s = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", s = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", s = "dog cat cat dog"
输出: false
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

// 1. 第一眼，我都看不懂这个题目，也是看其他人讲题意才明白
// 2. 做个映射关系，如pattern: abba  s: "dog cat cat dog" a -> dog b -> cat
var wordPattern = function (pattern, s) {
    const formatStrs = s.split(' ')
    const charMap = new Map()
    if (pattern.length !== formatStrs.length) return false
    for (let i = 0; i < formatStrs.length; i++) {
        const word = formatStrs[i]
        const char = pattern[i]
        if (charMap.has(char) ) {
            if(charMap.get(char) !== word) {
                return false
            }
        } else {
            // 这里需要判定下，Map结构中value是否存在word
            // 因为会有这样的数据 pattern: 'abab' s: 'dog dog dog dog'
            if([...charMap.values()].includes(word)) return false
            charMap.set(char, word)
        }
    }
    return true
};