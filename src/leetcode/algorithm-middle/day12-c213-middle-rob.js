/**
 * 
 * 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。

 

示例 1：

输入：nums = [2,3,2]
输出：3
解释：你不能先偷窃 1 号房屋（金额 = 2），然后偷窃 3 号房屋（金额 = 2）, 因为他们是相邻的。
示例 2：

输入：nums = [1,2,3,1]
输出：4
解释：你可以先偷窃 1 号房屋（金额 = 1），然后偷窃 3 号房屋（金额 = 3）。
     偷窃到的最高金额 = 1 + 3 = 4 。
示例 3：

输入：nums = [0]
输出：0
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 1000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/house-robber-ii
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 参考题解做出来
 * 题解：https://leetcode-cn.com/problems/house-robber-ii/solution/da-jia-jie-she-ii-by-leetcode-solution-bwja/
 * dp[i]=max(dp[i−2]+nums[i],dp[i−1])
 * dp[i] 表示在下标范围 [\textit{start},i][start,i] 内可以偷窃到的最高总金额
 * 注意圆环
 * @param {*} nums
 */
var rob = function (nums = []) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  const robRange = (start, end) => {
    let first = nums[start],
      second = Math.max(nums[start + 1], first);
    for (let i = start + 2; i < end; i++) {
      const temp = second;
      second = Math.max(first + nums[i], second);
      first = temp;
    }
    return second;
  };
  return Math.max(robRange(0, nums.length - 1), robRange(1, nums.length));
};

console.log(rob([2, 3, 2]));
console.log(rob([1, 2, 3, 1]));

console.log(rob([1]));
console.log(rob([1, 2]));
