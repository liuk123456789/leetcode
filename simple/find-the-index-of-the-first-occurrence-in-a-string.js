/**
 * 给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。


示例 1：

输入：haystack = "sadbutsad", needle = "sad"
输出：0
解释："sad" 在下标 0 和 6 处匹配。
第一个匹配项的下标是 0 ，所以返回 0 。
示例 2：

输入：haystack = "leetcode", needle = "leeto"
输出：-1
解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/**
 * 解题思路：利用双指针
 * 初始时fast指向haystack的首位 slow指向needle的首位
 * 需要注意的是 fast的极限值是 haystack.length - slow.length,
 * 因为剩余的字符串如果长度小于needle.length,那么必定是返回-1的
 * 如果haystack[fast + slow] === needle[slow]相等
 * 那么fast前进 slow同样前进
 * 否则的话，fast前进slow停留在初始0的位置
 */
var strStr = function (haystack, needle) {
    if (!needle) return -1
    let fast = 0, slow = 0
    const n = haystack.length
    const m = needle.length
    while (fast <= n - m && slow < m) {
        if (haystack[fast + slow] === needle[slow]) {
            slow++
        } else {
            fast++
            slow = 0
        }
    }
    return slow === m ? fast : -1
};

// 看了很多大佬使用KMP进行处理，所以也贴下代码吧

function strStr (haystack: string, needle: string): number {
    const n = haystack.length
    const m = needle.length
    if (m === 0) return 0

    let next = new Array(m).fill(0)
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = next[j - 1]
        }
        if (needle[i] === needle[j]) {
            j++
        }
        next[i] = j
    }

    // 搞懂上面的，下面的也就懂了
    for (let i = 0, j = 0; i < n; i++) {
        // 如果当前i 和 j不一致，就回退到上一个相等的位置的下一个看看是否匹配
        // 会不断回退，0为回退到边界，当回退到0意味着要重新从头开始匹配
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1]
        }
        if (haystack[i] === needle[j]) {
            j++
        }
        // 当j 和 m的长度相等时，就说明存在
        if (j === m) {
            return i - m + 1
        }
    }
    return -1
};