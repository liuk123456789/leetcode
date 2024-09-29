/**
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。

 

示例 1:

输入: num = 38
输出: 2 
解释: 各位相加的过程为：
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2
由于 2 是一位数，所以返回 2。
示例 2:

输入: num = 0
输出: 0
*/

/**
 * @param {number} num
 * @return {number}
 */

// 使用循环
// 取num % 10 和 num / 10
var addDigits = function (num) {
    if (num < 10) return num
    let next = 0
    while (num !== 0) {
        next += num % 10
        num = Math.floor(num / 10)
    }
    return addDigits(next)
};

// 大佬的解题思路

// 此题对应的是数学上数根

/**
 * 数根是将一正整数的各个位数相加（即横向相加），若加完后的值大于10的话，则继续将各位数进行横向相加直到其值小于十为止[1]，或是，将一数字重复做数字和，直到其值小于十为止，则所得的值为该数的数根。

例如54817的数根为7，因为5+4+8+1+7=25，25大于10则再加一次，2+5=7，7小于十，则7为54817的数根。

我们把 1 到 30 的树根列出来。

原数: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
数根: 1 2 3 4 5 6 7 8 9  1  2  3  4  5  6  7  8  9  1  2  3  4  5  6  7  8  9  1  2  3 
可以发现数根 9 个为一组， 1 - 9 循环出现。我们需要做就是把原数映射到树根就可以，循环出现的话，想到的就是取余了。

结合上边的规律，对于给定的 n 有三种情况。

n 是 0 ，数根就是 0。

n 不是 9 的倍数，数根就是 n 对 9 取余，即 n mod 9。

n 是 9 的倍数，数根就是 9。

我们可以把两种情况统一起来，我们将给定的数字减 1，相当于原数整体向左偏移了 1，然后再将得到的数字对 9 取余，最后将得到的结果加 1 即可。

原数是 n，树根就可以表示成 (n-1) mod 9 + 1，可以结合下边的过程理解。

原数: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
偏移: 0 1 2 3 4 5 6 7 8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 
取余: 0 1 2 3 4 5 6 7 8  0  1  2  3  4  5  6  7  8  0  1  2  3  4  5  6  7  8  0  1  2  
数根: 1 2 3 4 5 6 7 8 9  1  2  3  4  5  6  7  8  9  1  2  3  4  5  6  7
*/

// 所以我们也得到了答案
var addDigits = function(num) {
    return (num - 1) % 9 + 1
};