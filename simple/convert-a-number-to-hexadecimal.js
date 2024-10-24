/**
 * 给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 补码运算 方法。

答案字符串中的所有字母都应该是小写字符，并且除了 0 本身之外，答案中不应该有任何前置零。

注意: 不允许使用任何由库提供的将数字直接转换或格式化为十六进制的方法来解决这个问题。



示例 1：

输入：num = 26
输出："1a"
示例 2：

输入：num = -1
输出："ffffffff"
*/

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
    if (!num) return '0';
    // 如果是负数，需要进行补码转换
    if (num < 0) {
        num = Math.pow(2, 32) + num;
    }
    let result = '';
    const hexChars = '0123456789abcdef';
    while (num > 0) {
        result = hexChars[num % 16] + result;
        num = Math.floor(num / 16);
    }
    return result;
};