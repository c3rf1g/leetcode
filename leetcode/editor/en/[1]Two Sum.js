
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        if (dict[target - nums[i]] !== undefined) {
            return [dict[target - nums[i]], i];
        }
        dict[nums[i]] = i;
    }
};
//leetcode submit region end(Prohibit modification and deletion)
