/**
673. 最长递增子序列的个数
给定一个未排序的整数数组，找到最长递增子序列的个数。

示例 1:

输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
示例 2:

输入: [2,2,2,2,2]
输出: 5
解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。 
https://leetcode-cn.com/problems/number-of-longest-increasing-subsequence/
*/
// error
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (nums) {
  let dp = [1];
  let gp = [1];
  let maxIndex = 0;
  for (i = 1; i < nums.length; i++) {
    let maxLength = 1;
    gp[i] = 1;
    for (j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        maxLength = Math.max(maxLength, dp[j] + 1);
        if(maxLength === dp[j] + 1){
          gp[i] ++;
        }
      }
    }
    dp[i] = maxLength;
    if(dp[i] > dp[maxIndex]){
      maxIndex = i;
    }
  }
  console.log(dp)
  console.log(gp)
  return gp[maxIndex]
  // return Math.max(...dp);
};

// console.log(findNumberOfLIS([1, 3, 5, 4, 7]));
// console.log(findNumberOfLIS([2,2,2,2,2]));
console.log(findNumberOfLIS([1,2,4,3,5,4,7,2]));

