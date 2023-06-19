
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1
    let maxS = 0
    while (left != right) {
        let min = Math.min(height[left], height[right])
        if (min * (right - left) > maxS) {
            maxS = min * (right - left)
        }
        if (height[left] >= height[right])
            right -= 1
        else {
            left += 1
        }
    }
    return maxS
};
//leetcode submit region end(Prohibit modification and deletion)
