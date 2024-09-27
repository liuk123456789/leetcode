/**
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。

示例 1：

输入：nums = [1,2,3,1], k = 3
输出：true
示例 2：

输入：nums = [1,0,1,1], k = 1
输出：true
示例 3：

输入：nums = [1,2,3,1,2,3], k = 2
输出：false
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 利用Map来完成
// 1。判定元素是否在Map中
// 2. 存在：判定差是否 <= k,需要注意的是，如果不成立，那么需要更新下坐标; 否则的话，存储元素和下标
// 3. 未查询到，直接返回false
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true
        }
        map.set(nums[i], i)
    }
    return false
};

// 利用滑动窗口解决
// 1.同一个窗口中的元素不大于k,如果同一个滑动窗口中存在重复元素，则存在两个不同的下标 i 和 j 满足 nums[i]=nums[j] 且 ∣i−j∣≤k
// 2. 如果窗口有滑动窗口中都没有重复元素，则不存在符合要求的下标

// 如果一个滑动窗口的结束下标是 i，则该滑动窗口的开始下标是 max(0,i−k)。可以使用哈希集合存储滑动窗口中的元素。从左到右遍历数组 nums，当遍历到下标 i 时，具体操作如下：

// 如果 i>k，则下标 i−k−1 处的元素被移出滑动窗口，因此将 nums[i−k−1] 从哈希集合中删除；

// 判断 nums[i] 是否在哈希集合中，如果在哈希集合中则在同一个滑动窗口中有重复元素，返回 true，如果不在哈希集合中则将其加入哈希集合。

// 当遍历结束时，如果所有滑动窗口中都没有重复元素，返回 false。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const set = new Set();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        // 下标超过k,那么移除滑动窗口的首个元素
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        // 如果滑动窗口中存在当前元素，那么i -j 必定是<= k
        if (set.has(nums[i])) {
            return true;
        }
        // 元素放入Set结构中
        set.add(nums[i])
    }
    return false;
};
