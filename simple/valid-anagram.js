/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的 
字母异位词
。


示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 1.如果s和t的长度不相等，那么肯定不是有效的字母异位词
// 2.遍历字符串，将每个字符转成ASCLL码，将其和'a'对应的ASCLL码值进行对比，
// 3. s和t一个增加，一个减少，目的就是最后看对应的值是否是0
// 4. 如果是0，那么一定是有效的字母异位词，否则不是

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const res = Array(26).fill(0)
    const aCodeAt = 'a'.charCodeAt(0)
    for(let i = 0; i < s.length; i++) {
        const k = s[i].charCodeAt(0) - aCodeAt
        const j = t[i].charCodeAt(0) - aCodeAt
        res[k]++
        res[j]--
    }
    return res.every(item => item === 0)
};