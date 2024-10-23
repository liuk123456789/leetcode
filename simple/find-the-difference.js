/**
 * 给定两个字符串 s 和 t ，它们只包含小写字母。

字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

请找出在 t 中被添加的字母。

 

示例 1：

输入：s = "abcd", t = "abcde"
输出："e"
解释：'e' 是那个被添加的字母。
示例 2：

输入：s = "", t = "y"
输出："y"
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const map = new Map()
    for(let target of s) {
        if(map.has(target)) {
            const val = map.get(target)
            map.set(target, val + 1)
        } else {
            map.set(target, 1)
        }
    }

    for(let cur of t) {
        if(map.has(cur)) {
            const val = map.get(cur)
            if(val - 1 < 0) {
                return cur
            } else {
                map.set(cur, val - 1)
            }
        } else {
            return cur
        }
    }
};

// 官方解法
// 将两个字符串拼接成一个字符串，其中出现奇数次的必定就是混入字符
var findTheDifference = function(s, t) {
    let ret = 0;
    for (const ch of s) {
        ret ^= ch.charCodeAt();
    }
    for (const ch of t) {
        ret ^= ch.charCodeAt();
    }
    return String.fromCharCode(ret);
};
