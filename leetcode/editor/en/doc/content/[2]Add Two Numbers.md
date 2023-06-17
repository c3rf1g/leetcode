<p>You are given two <strong>non-empty</strong> linked lists representing two non-negative integers. The digits are stored in <strong>reverse order</strong>, and each of their nodes contains a single digit. Add the two numbers and return the sum&nbsp;as a linked list.</p>

<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>

<p>&nbsp;</p> 
<p><strong class="example">Example 1:</strong></p> 
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg" style="width: 483px; height: 342px;" /> 
<pre>
<strong>Input:</strong> l1 = [2,4,3], l2 = [5,6,4]
<strong>Output:</strong> [7,0,8]
<strong>Explanation:</strong> 342 + 465 = 807.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> l1 = [0], l2 = [0]
<strong>Output:</strong> [0]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
<strong>Output:</strong> [8,9,9,9,0,0,0,1]
</pre>

<p>&nbsp;</p> 
<p><strong>Constraints:</strong></p>

<ul> 
 <li>The number of nodes in each linked list is in the range <code>[1, 100]</code>.</li> 
 <li><code>0 &lt;= Node.val &lt;= 9</code></li> 
 <li>It is guaranteed that the list represents a number that does not have leading zeros.</li> 
</ul>

<details><summary><strong>Related Topics</strong></summary>Linked List | Math | Recursion</details><br>

<div>👍 26308, 👎 5090<span style='float: right;'><span style='color: gray;'><a href='https://github.com/labuladong/fucking-algorithm/discussions/939' target='_blank' style='color: lightgray;text-decoration: underline;'>bug 反馈</a> | <a href='https://labuladong.gitee.io/article/fname.html?fname=jb插件简介' target='_blank' style='color: lightgray;text-decoration: underline;'>使用指南</a> | <a href='https://labuladong.github.io/algo/images/others/%E5%85%A8%E5%AE%B6%E6%A1%B6.jpg' target='_blank' style='color: lightgray;text-decoration: underline;'>更多配套插件</a></span></span></div>

<div id="labuladong"><hr>

**通知：[数据结构精品课](https://aep.h5.xeknow.com/s/1XJHEO) 已更新到 V2.1，[手把手刷二叉树系列课程](https://aep.xet.tech/s/3YGcq3) 上线。**

<details><summary><strong>labuladong 思路</strong></summary>

## 基本思路

逆序存储很友好了，直接遍历链表就是从个位开始的，符合我们计算加法的习惯顺序。如果是正序存储，那倒要费点脑筋了，可能需要 [翻转链表](https://labuladong.github.io/article/fname.html?fname=递归反转链表的一部分) 或者使用栈来辅助。

这道题主要考察 [链表双指针技巧](https://labuladong.github.io/article/fname.html?fname=链表技巧) 和加法运算过程中对进位的处理。注意这个 `carry` 变量的处理，在我们手动模拟加法过程的时候会经常用到。

**代码中还用到一个链表的算法题中是很常见的「虚拟头结点」技巧，也就是 `dummy` 节点**。你可以试试，如果不使用 `dummy` 虚拟节点，代码会稍显复杂，而有了 `dummy` 节点这个占位符，可以避免处理初始的空指针情况，降低代码的复杂性。

**标签：[数据结构](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxODQxMDM0Mw==&action=getalbum&album_id=1318892385270808576)，[链表双指针](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAxODQxMDM0Mw==&action=getalbum&album_id=2120596033251475465)**

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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        // 在两条链表上的指针
        ListNode *p1 = l1, *p2 = l2;
        // 虚拟头结点（构建新链表时的常用技巧）
        ListNode *dummy = new ListNode(-1);
        // 指针 p 负责构建新链表
        ListNode *p = dummy;
        // 记录进位
        int carry = 0;
        // 开始执行加法，两条链表走完且没有进位时才能结束循环
        while (p1 != nullptr || p2 != nullptr || carry > 0) {
            // 先加上上次的进位
            int val = carry;
            if (p1 != nullptr) {
                val += p1->val;
                p1 = p1->next;
            }
            if (p2 != nullptr) {
                val += p2->val;
                p2 = p2->next;
            }
            // 处理进位情况
            carry = val / 10;
            val = val % 10;
            // 构建新节点
            p->next = new ListNode(val);
            p = p->next;
        }
        // 返回结果链表的头结点（去除虚拟头结点）
        return dummy->next;
    }
};
```

</div></div>

<div data-tab-item="python" class="tab-item " data-tab-group="default"><div class="highlight">

```python
# 注意：python 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
# 本代码已经通过力扣的测试用例，应该可直接成功提交。

class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # 在两条链表上的指针
        p1, p2 = l1, l2
        # 虚拟头结点（构建新链表时的常用技巧）
        dummy = ListNode(-1)
        # 指针 p 负责构建新链表
        p = dummy
        # 记录进位
        carry = 0
        # 开始执行加法，两条链表走完且没有进位时才能结束循环
        while p1 or p2 or carry:
            # 先加上上次的进位
            val = carry
            if p1:
                val += p1.val
                p1 = p1.next
            if p2:
                val += p2.val
                p2 = p2.next
            # 处理进位情况
            carry, val = divmod(val, 10)
            # 构建新节点
            p.next = ListNode(val)
            p = p.next
        # 返回结果链表的头结点（去除虚拟头结点）
        return dummy.next
```

</div></div>

<div data-tab-item="java" class="tab-item active" data-tab-group="default"><div class="highlight">

```java
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // 在两条链表上的指针
        ListNode p1 = l1, p2 = l2;
        // 虚拟头结点（构建新链表时的常用技巧）
        ListNode dummy = new ListNode(-1);
        // 指针 p 负责构建新链表
        ListNode p = dummy;
        // 记录进位
        int carry = 0;
        // 开始执行加法，两条链表走完且没有进位时才能结束循环
        while (p1 != null || p2 != null || carry > 0) {
            // 先加上上次的进位
            int val = carry;
            if (p1 != null) {
                val += p1.val;
                p1 = p1.next;
            }
            if (p2 != null) {
                val += p2.val;
                p2 = p2.next;
            }
            // 处理进位情况
            carry = val / 10;
            val = val % 10;
            // 构建新节点
            p.next = new ListNode(val);
            p = p.next;
        }
        // 返回结果链表的头结点（去除虚拟头结点）
        return dummy.next;
    }
}
```

</div></div>

<div data-tab-item="go" class="tab-item " data-tab-group="default"><div class="highlight">

```go
// 注意：go 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
    // 在两条链表上的指针
    p1, p2 := l1, l2
    // 虚拟头结点（构建新链表时的常用技巧）
    dummy := &ListNode{-1, nil}
    // 指针 p 负责构建新链表
    p := dummy
    // 记录进位
    carry := 0
    // 开始执行加法，两条链表走完且没有进位时才能结束循环
    for p1 != nil || p2 != nil || carry > 0 {
        // 先加上上次的进位
        val := carry
        if p1 != nil {
            val += p1.Val
            p1 = p1.Next
        }
        if p2 != nil {
            val += p2.Val
            p2 = p2.Next
        }
        // 处理进位情况
        carry = val / 10
        val = val % 10
        // 构建新节点
        p.Next = &ListNode{val, nil}
        p = p.Next
    }
    // 返回结果链表的头结点（去除虚拟头结点）
    return dummy.Next
}
```

</div></div>

<div data-tab-item="javascript" class="tab-item " data-tab-group="default"><div class="highlight">

```javascript
// 注意：javascript 代码由 chatGPT🤖 根据我的 java 代码翻译，旨在帮助不同背景的读者理解算法逻辑。
// 本代码已经通过力扣的测试用例，应该可直接成功提交。

var addTwoNumbers = function(l1, l2) {
    // 在两条链表上的指针
    let p1 = l1, p2 = l2;
    // 虚拟头结点（构建新链表时的常用技巧）
    let dummy = new ListNode(-1);
    // 指针 p 负责构建新链表
    let p = dummy;
    // 记录进位
    let carry = 0;
    // 开始执行加法，两条链表走完且没有进位时才能结束循环
    while (p1 !== null || p2 !== null || carry > 0) {
        // 先加上上次的进位
        let val = carry;
        if (p1 !== null) {
            val += p1.val;
            p1 = p1.next;
        }
        if (p2 !== null) {
            val += p2.val;
            p2 = p2.next;
        }
        // 处理进位情况
        carry = Math.floor(val / 10);
        val = val % 10;
        // 构建新节点
        p.next = new ListNode(val);
        p = p.next;
    }
    // 返回结果链表的头结点（去除虚拟头结点）
    return dummy.next;
};
```

</div></div>
</div></div>

<details open><summary><strong>🌟🌟 算法可视化 🌟🌟</strong></summary><div id="data_add-two-numbers" data="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"></div><div class="resizable aspect-ratio-container" style="height: 100%;">
<div id="iframe_add-two-numbers"></div></div>
</details><hr /><br />

**类似题目**：
  - [445. 两数相加 II 🟠](/problems/add-two-numbers-ii)
  - [67. 二进制求和 🟢](/problems/add-binary)
  - [剑指 Offer II 025. 链表中的两数相加 🟠](/problems/lMSNwu)

</details>
</div>





