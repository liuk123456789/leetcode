/**
 * 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

如果可以，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。

示例 1：

输入：ransomNote = "a", magazine = "b"
输出：false
示例 2：

输入：ransomNote = "aa", magazine = "ab"
输出：false
示例 3：

输入：ransomNote = "aa", magazine = "aab"
输出：true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// magazine的长度小于ransomNote的长度，直接返回false
// 定义Map
// 遍历magazine，进行字符次数统计
// 遍历ransomNote, 如果Map匹配了,那么将次数-1
// 如果count等于0/undefined【ransomNote中存在，magazine中不存在】,那么直接返回false
var canConstruct = function(ransomNote, magazine) {
    if(magazine.length < ransomNote.length) {
        return false
    }
    const map = new Map()
    for(let magaChar of magazine) {
        if(map.has(magaChar)) {
            map.set(magaChar, map.get(magaChar) + 1)
        } else {
            map.set(magaChar, 1)
        }
    }

    for(let ranChar of ransomNote) {
        const count = map.get(ranChar)
        if(!count) {
            return false
        } else {
            map.set(ranChar, count-1)
        }
    }
    return true
};