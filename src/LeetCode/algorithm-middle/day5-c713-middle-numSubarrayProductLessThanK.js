/**
 * 给定一个正整数数组 nums和整数 k 。

请找出该数组内乘积小于 k 的连续的子数组的个数。

 

示例 1:

输入: nums = [10,5,2,6], k = 100
输出: 8
解释: 8个乘积小于100的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
示例 2:

输入: nums = [1,2,3], k = 0
输出: 0
 

提示: 

1 <= nums.length <= 3 * 10^4
1 <= nums[i] <= 1000
0 <= k <= 10^6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/subarray-product-less-than-k
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK1 = function (nums, k) {
  if (k < 1) return 0;
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= k) continue;
    result++;
    let multi = nums[i];
    for (let j = i - 1; j >= 0; j--) {
      multi *= nums[j];
      if (multi < k) {
        result++;
      } else {
        break;
      }
    }
  }

  return result;
};

/**
 * 参考：https://leetcode-cn.com/problems/subarray-product-less-than-k/solution/cheng-ji-xiao-yu-kde-zi-shu-zu-by-leetcode/
 *  + 个人跳过了当前值大于 k时的计算
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k < 1) return 0;
  let result = 0,
    multi = 1,
    left = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= k) {
      multi = 1;
      left = -1;
      continue;
    }
    if (left < 0) {
      result++;
      left = i;
      multi = nums[i];
      continue;
    }
    multi *= nums[i];
    while (multi >= k) {
      multi /= nums[left];
      left++;
    }
    result += i - left + 1;
  }

  return result;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
