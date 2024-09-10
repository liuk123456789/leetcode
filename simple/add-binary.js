/**
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。

示例 1：

输入:a = "11", b = "1"
输出："100"
示例 2：

输入：a = "1010", b = "1011"
输出："10101"
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    // 求和
    let total = ''
    // 进位
    let pos = 0
    let len1 = a.length - 1
    let len2 = b.length - 1
    while (len1 >= 0 || len2 >= 0) {
        // 保留下进位，用于下次循环
        let sum = pos
        // 取二进制每一位
        let bit1 = len1 >= 0 ? parseInt(a[len1]) : 0
        let bit2 = len2 >= 0 ? parseInt(b[len2]) : 0
        // 求出和
        sum += bit1 + bit2
        // 记录进位
        pos = Math.floor(sum / 2)
        // 对2取余，那么便是和
        total += sum % 2
        len1--
        len2--
    }
    // 遍历完成，如果还有个进位
    // 那么需要将它放在首位
    total += pos === 1 ? pos : ''
    return total.split('').reverse().join('')
};