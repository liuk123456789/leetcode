/**
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

示例 1：

输入：s = "IceCreAm"

输出："AceCreIm"

解释：

s 中的元音是 ['I', 'e', 'e', 'A']。反转这些元音，s 变为 "AceCreIm".

示例 2：

输入：s = "leetcode"

输出："leotcede"
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let left = 0, right = s.length - 1
    const arr = Array.from(s)
    while (left <= right) {
        while (left < right && !isVowel(arr[left])) {
            left++
        }
        while (right > 0 && !isVowel(arr[right])) {
            right--
        }
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
            right--
        }
    }
    return arr.join('')
};

const isVowel = (ch) => {
    return "aeiouAEIOU".indexOf(ch) >= 0;
}