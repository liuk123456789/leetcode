/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。

示例 1：

输入：s = "()"

输出：true

示例 2：

输入：s = "()[]{}"

输出：true

示例 3：

输入：s = "(]"

输出：false

示例 4：

输入：s = "([])"

输出：true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // 奇数比不可能符合条件
    const len = s.length
    if (len % 2 !== 0) return false
    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])

    const stack = []
    for (let item of s) {
        // 如果匹配上了，那么需要将对应的map的value 进行出栈操作
        if (map.has(item)) {
            if(!stack.length || map.get(item) !== stack[stack.length -1]) {
               return false
            } else {
                stack.pop()
            }
        } else {
            stack.push(item)
        }
    }
    return !stack.length
};