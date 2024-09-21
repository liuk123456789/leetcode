/**
 * 颠倒给定的 32 位无符号整数的二进制位。

提示：

请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 示例 2 中，输入表示有符号整数 -3，输出表示有符号整数 -1073741825。

示例 1：

输入：n = 00000010100101000001111010011100
输出：964176192 (00111001011110000010100101000000)
解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
     因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
示例 2：

输入：n = 11111111111111111111111111111101
输出：3221225471 (10111111111111111111111111111111)
解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，
     因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// 考察位运算

/**
 * 
 * 位运算的基本知识
 * 
与&：0&0=0 0&1=0 1&0=0 1&1=1

或|：0|0=0 0|1=1 1|0=1 1|1=1

异或^：0^0=0 0^1=1 1^0=1 1^1=0

取反~：~1=0 ~0=1

左移<<：左边的二进制位丢弃，右边补0

右移>>：正数左补0，负数左补1，右边丢弃

无符号左移<<<：左边的二进制位丢弃，右边补0

无符号右移>>>：忽略符号位，空位都以0补齐
 */

var reverseBits = function(n) {
    let rev = 0;
    for (let i = 0; i < 32 && n > 0; ++i) {
        rev |= (n & 1) << (31 - i); // n&1的结果和n的最后一位相同，等于是取出了n的最后一位，再把这一位左移31-i位就移到了翻转之后对称的位置
        n >>>= 1; // 再将n右移一位
    }
    return rev>>>0;
};