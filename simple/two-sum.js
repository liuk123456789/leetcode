/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

你可以按任意顺序返回答案。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    let res = []
    for(let i = 0; i < nums.length; i++) {
        const val = target - nums[i]
        if(map.has(val)) {
            const index = map.get(val)
            res = [index, i]
            break;
        } else {
            map.set(nums[i],i)
        }
    }
    return res
};