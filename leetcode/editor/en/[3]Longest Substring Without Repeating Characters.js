
//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let dict = {}
    let max = 0
    let cur = 0
    let start = 0
    let str = ''
    // for (let i = 0; i < s.length; i++) {
    //     if (s.indexOf(s[]))
    // }
    for (let i = 0; i < s.length; i++) {

        if (dict[s[i]] === undefined) {
            dict[s[i]] = true
            cur += 1

        } else {
            dict = {}
            i = start
            cur = 0
            start = i + 1
        }
        if (max < cur) {
            max = cur
        }
    }
    if (s === '') {
        return 0
    }
    if (s.length == 1)
        return 1
    return max
};
//leetcode submit region end(Prohibit modification and deletion)
