/**
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的 
回文串的长度。

在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

示例 1:

输入:s = "abccccdd"
输出:7
解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
示例 2:

输入:s = "a"
输出:1
解释：可以构造的最长回文串是"a"，它的长度是 1。
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    // 如果是回文串，那么字符数量必定是偶数[]
    const map = {}
    let res = 0
    let odd = 0
    for (const str of s) {
        if (map[str]) {
            map[str]++
        } else {
            map[str] = 1
        }
    }
    for (const key in map) {
        const count = map[key]
        // 余数 比如 3 5 7 9 等，需要取出偶数数量
        const rem = count % 2
        res += count - rem
        // 余数为1， 那么保留此奇数
        if (rem === 1) {
            odd = 1
        }
    }
    return res + odd
};