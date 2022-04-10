/**
 * 给你一个非负整数数组 nums ，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

假设你总是可以到达数组的最后一个位置。

 

示例 1:

输入: nums = [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
示例 2:

输入: nums = [2,3,0,1,4]
输出: 2
 

提示:

1 <= nums.length <= 10^4
0 <= nums[i] <= 1000


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-ii
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums = []) {
  if (nums.length <= 1) return 0;
  let result = 1;
  let maxCanArriveIndex = nums[0];
  let nextMaxCanArriveIndex = 0;
  for (let i = 1; i < nums.length - 1; i++) {
    nextMaxCanArriveIndex = Math.max(nextMaxCanArriveIndex, i + nums[i]);
    if (i === maxCanArriveIndex) {
      maxCanArriveIndex = nextMaxCanArriveIndex;
      result++;
    }
  }
  return result;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
console.log(jump([1, 2, 3])); // 2
console.log(jump([1, 1, 2, 1, 1])); // 3
console.log(jump([1, 1, 1, 1])); // 3
