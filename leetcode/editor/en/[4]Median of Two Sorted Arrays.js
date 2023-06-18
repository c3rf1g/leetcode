
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let p1 = 0, p2 = 0
    let fin_arr = []
    while (p1 != nums1.length || p2 != nums2.length) {
        if (p2 === nums2.length || nums2[p2] >= nums1[p1]) {
            fin_arr.push(nums1[p1])
            p1 += 1
            continue

        } else {
            if (p1 === nums1.length || nums1[p1] > nums2[p2]) {
                fin_arr.push(nums2[p2])
                p2 += 1
                continue
            }
        }

    }
    let total_len = nums2.length + nums1.length
    return (total_len) % 2 ? fin_arr[(total_len - 1) / 2] :
        (fin_arr[(total_len) / 2] + fin_arr[(total_len) / 2 - 1]) / 2
};
//leetcode submit region end(Prohibit modification and deletion)
