/**
 * 进制手表顶部有 4 个 LED 代表 小时（0-11），底部的 6 个 LED 代表 分钟（0-59）。每个 LED 代表一个 0 或 1，最低位在右侧。

例如，下面的二进制手表读取 "4:51" 。


给你一个整数 turnedOn ，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。你可以 按任意顺序 返回答案。

小时不会以零开头：

例如，"01:00" 是无效的时间，正确的写法应该是 "1:00" 。
分钟必须由两位数组成，可能会以零开头：

例如，"10:2" 是无效的时间，正确的写法应该是 "10:02" 。
 

示例 1：

输入：turnedOn = 1
输出：["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
示例 2：

输入：turnedOn = 9
输出：[]
*/

/**
 * @param {number} turnedOn
 * @return {string[]}
 */

// 枚举时分
var readBinaryWatch = function (turnedOn) {
    const res = []
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            // 判定下小时的灯亮和分钟的灯亮的和是不是等于turnedOn,等于，添加进数组
            const hl = h.toString(2).split('0').join('').length
            const ml = m.toString(2).split('0').join('').length
            if (hl + ml === turnedOn) {
                res.push(`${h}:${m < 10 ? '0' : ''}${m}`)
            }
        }
    }
    return res
};

// TODO: 回溯，没太看懂，单纯贴下代码
