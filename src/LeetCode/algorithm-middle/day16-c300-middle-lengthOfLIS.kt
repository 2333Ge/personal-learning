/**
给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1
 

提示：

1 <= nums.length <= 2500
-104 <= nums[i] <= 10^4

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
 */
class Solution {
        fun lengthOfLIS(nums: IntArray): Int {
            val dp = nums.map { 1 }.toMutableList()
            for (i in 1 until nums.size) {
                var maxLength = dp[i]
                for (j in 0 until i) {
                    if (nums[i] > nums[j]) {
                        maxLength = maxLength.coerceAtLeast(dp[j] + 1)
                    }
                }
                dp[i] = maxLength
            }
            return dp.max() ?: 1
        }
    }

    // +贪心的方法待看