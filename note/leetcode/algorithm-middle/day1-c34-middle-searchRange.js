/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？
 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 

提示：

0 <= nums.length <= 10^9
-10^9 <= nums[i] <= 10^9
nums 是一个非递减数组
-10^9 <= target <= 10^9

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
 */

var searchRange2 = function (nums = [], target) {
  const start = nums.findIndex((item) => item === target);
  if (start === -1) return [-1, -1];
  let end = start;
  for (let i = start + 1; i < nums.length; i++) {
    if (nums[i] !== nums[start]) {
      end = i - 1;
      break;
    } else {
      end = i;
    }
  }
  return [start, end];
};
/**
 * 二分法
 */
var searchRange = function (nums = [], target) {
  let left = 0,
    right = nums.length - 1;
  let targetIndex = -1;
  // !小于等于
  while (left <= right) {
    const midIndex = Math.round((left + right)/2);

    if (nums[midIndex] < target) {
      // !注意+1
      left = midIndex + 1;
    } else if (nums[midIndex] > target) {
      // !注意-1
      right = midIndex - 1;
    } else {
      targetIndex = midIndex;
      break;
    }
  }
  if (targetIndex === -1) {
    return [-1, -1];
  }
  let targetLeft = targetIndex;
  let targetRight = targetIndex;

  for (let i = targetIndex - 1; i >= 0; i--) {
    if (target === nums[i]) {
      targetLeft = i;
    } else {
      break;
    }
  }
  for (let i = targetIndex + 1; i < nums.length; i++) {
    if (target === nums[i]) {
      targetRight = i;
    } else {
      break;
    }
  }
  return [targetLeft, targetRight];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
