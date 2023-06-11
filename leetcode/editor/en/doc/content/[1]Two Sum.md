<p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p> 
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p> 
<p><strong>Constraints:</strong></p>

<ul> 
 <li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li> 
 <li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li> 
 <li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li> 
 <li><strong>Only one valid answer exists.</strong></li> 
</ul>

<p>&nbsp;</p> 
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than&nbsp;
<code>O(n<sup>2</sup>)&nbsp;</code>time complexity?

<details><summary><strong>Related Topics</strong></summary>Array | Hash Table</details><br>

<div>👍 47267, 👎 1537<span style='float: right;'><span style='color: gray;'><a href='https://github.com/labuladong/fucking-algorithm/discussions/939' target='_blank' style='color: lightgray;text-decoration: underline;'>bug 反馈</a> | <a href='https://labuladong.gitee.io/article/fname.html?fname=jb插件简介' target='_blank' style='color: lightgray;text-decoration: underline;'>使用指南</a> | <a href='https://labuladong.github.io/algo/images/others/%E5%85%A8%E5%AE%B6%E6%A1%B6.jpg' target='_blank' style='color: lightgray;text-decoration: underline;'>更多配套插件</a></span></span></div>

<div id="labuladong"><hr>

**通知：[数据结构精品课](https://aep.h5.xeknow.com/s/1XJHEO) 已更新到 V2.1，[手把手刷二叉树系列课程](https://aep.xet.tech/s/3YGcq3) 上线。**



<p><strong><a href="https://labuladong.gitee.io/article/slug.html?slug=two-sum" target="_blank">⭐️labuladong 题解</a></strong></p>
<details><summary><strong>labuladong 思路</strong></summary>

## 基本思路

大家都喜欢幽默的人，如果你想调侃自己经常拖延，可以这样调侃下自己（手动狗头）：

背单词背了半年还是 abandon, abandon，刷题刷了半年还是 two sum, two sum...

言归正传，这道题不难，但由于它是 LeetCode 第一题，所以名气比较大，解决这道题也可以有多种思路，我这里说两种最常见的思路。

第一种思路就是靠排序，把 `nums` 排序之后就可以用 [数组双指针技巧汇总](https://labuladong.github.io/article/fname.html?fname=双指针技巧) 中讲到的左右指针来求出和为 `target` 的两个数。

不过因为题目要求我们返回元素的索引，而排序会破坏元素的原始索引，所以要记录值和原始索引的映射。

进一步，如果题目拓展延伸一下，让你求三数之和、四数之和，你依然可以用双指针技巧，我在 [一个函数秒杀 nSum 问题](https://labuladong.github.io/article/fname.html?fname=nSum) 中写一个函数来解决所有 N 数之和问题。

第二种思路是用哈希表辅助判断。对于一个元素 `nums[i]`，你想知道有没有另一个元素 `nums[j]` 的值为 `target - nums[i]`，这很简单，我们用一个哈希表记录每个元素的值到索引的映射，这样就能快速判断数组中是否有一个值为 `target - nums[i]` 的元素了。

简单说，数组其实可以理解为一个「索引 -> 值」的哈希表映射，而我们又建立一个「值 -> 索引」的映射即可完成此题。

**详细题解：[一个方法团灭 nSum 问题](https://labuladong.github.io/article/fname.html?fname=nSum)**

**标签：[双指针](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxODQxMDM0Mw==&action=getalbum&album_id=2120596033251475465)，哈希表，[数组](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxODQxMDM0Mw==&action=getalbum&album_id=2120601117519675393)**

## 解法代码

提示：🟢 标记的是我写的解法代码，🤖 标记的是 chatGPT 翻译的多语言解法代码。如有错误，可以 [点这里](https://github.com/labuladong/fucking-algorithm/issues/1113) 反馈和修正。

<div class="tab-panel"><div class="tab-nav">
<button data-tab-item="cpp" class="tab-nav-button btn " data-tab-group="default" onclick="switchTab(this)">cpp🤖</button>

<button data-tab-item="python" class="tab-nav-button btn " data-tab-group="default" onclick="switchTab(this)">python🤖</button>

<button data-tab-item="java" class="tab-nav-button btn active" data-tab-group="default" onclick="switchTab(this)">java🟢</button>

<button data-tab-item="go" class="tab-nav-button btn " data-tab-group="default" onclick="switchTab(this)">go🤖</button>

<button data-tab-item="javascript" class="tab-nav-button btn " data-tab-group="default" onclick="switchTab(this)">javascript🤖</button>
</div><div class="tab-content">
<div data-tab-item="cpp" class="tab-item " data-tab-group="default"><div class="highlight">

```cpp
// 注意：cpp 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // 维护 val -> index 的映射
        unordered_map<int, int> valToIndex;
        for (int i = 0; i < nums.size(); i++) {
            // 查表，看看是否有能和 nums[i] 凑出 target 的元素
            int need = target - nums[i];
            if (valToIndex.count(need)) {
                return vector<int>{valToIndex[need], i};
            }
            // 存入 val -> index 的映射
            valToIndex[nums[i]] = i;
        }
        return vector<int>{};
    }
};
```

</div></div>

<div data-tab-item="python" class="tab-item " data-tab-group="default"><div class="highlight">

```python
# 注意：python 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
# 本代码已经通过力扣的测试用例，应该可直接成功提交。

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # 维护 val -> index 的映射
        valToIndex = {}
        for i in range(len(nums)):
            # 查表，看看是否有能和 nums[i] 凑出 target 的元素
            need = target - nums[i]
            if need in valToIndex:
                return [valToIndex[need], i]
            # 存入 val -> index 的映射
            valToIndex[nums[i]] = i
        return []
```

</div></div>

<div data-tab-item="java" class="tab-item active" data-tab-group="default"><div class="highlight">

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        // 维护 val -> index 的映射
        HashMap<Integer, Integer> valToIndex = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            // 查表，看看是否有能和 nums[i] 凑出 target 的元素
            int need = target - nums[i];
            if (valToIndex.containsKey(need)) {
                return new int[]{valToIndex.get(need), i};
            }
            // 存入 val -> index 的映射
            valToIndex.put(nums[i], i);
        }
        return null;
    }
}
```

</div></div>

<div data-tab-item="go" class="tab-item " data-tab-group="default"><div class="highlight">

```go
// 注意：go 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

func twoSum(nums []int, target int) []int {
    // 维护 val -> index 的映射
    valToIndex := make(map[int]int)

    for i, num := range nums {
        // 查表，看看是否有能和 nums[i] 凑出 target 的元素
        need := target - num
        if valToIndex[need] != 0 {
            return []int{valToIndex[need] - 1, i}
        }
        // 存入 val -> index 的映射
        valToIndex[num] = i + 1
    }

    return nil
}
```

</div></div>

<div data-tab-item="javascript" class="tab-item " data-tab-group="default"><div class="highlight">

```javascript
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

var twoSum = function(nums, target) {
    // 维护 val -> index 的映射
    var valToIndex = new Map();
    for (var i = 0; i < nums.length; i++) {
        // 查表，看看是否有能和 nums[i] 凑出 target 的元素
        var need = target - nums[i];
        if (valToIndex.has(need)) {
            return [valToIndex.get(need), i];
        }
        // 存入 val -> index 的映射
        valToIndex.set(nums[i], i);
    }
    return null;
};
```

</div></div>
</div></div>

<details open><summary><strong>🌈🌈 算法可视化 🌈🌈</strong></summary><div id="data_two-sum" data="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"></div><div class="resizable aspect-ratio-container" style="height: 100%;">
<div id="iframe_two-sum"></div></div>
</details><hr /><br />

**类似题目**：
  - [15. 三数之和 🟠](/problems/3sum)
  - [167. 两数之和 II - 输入有序数组 🟠](/problems/two-sum-ii-input-array-is-sorted)
  - [18. 四数之和 🟠](/problems/4sum)
  - [剑指 Offer 57. 和为s的两个数字 🟢](/problems/he-wei-sde-liang-ge-shu-zi-lcof)
  - [剑指 Offer II 007. 数组中和为 0 的三个数 🟠](/problems/1fGaJU)

</details>
</div>





