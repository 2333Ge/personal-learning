/*
 * @lc app=leetcode.cn id=97 lang=javascript
 * @lcpr version=30204
 *
 * [97] 交错字符串
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 错误，边界情况不对，第一次选空字符串的情况
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  if ((s1 || s2) === s3) return true;
  //  const dp = 

};

var isInterleave2 = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const dp = new Array(s1.length + 1)
    .fill(0)
    .map(() => new Array(s2.length + 1).fill(false));
  dp[0][0] = true;
  for (let i = 1; i <= s1.length; i++) {
    if (s1[i - 1] === s3[i - 1] && dp[i - 1][0]) {
      dp[i][0] = true;
    }
  }
  for (let i = 1; i <= s2.length; i++) {
    if (s2[i - 1] === s3[i - 1] && dp[0][i - 1]) {
      dp[0][i] = true;
    }
  }
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) {
        dp[i][j] = true;
      } else if (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]) {
        dp[i][j] = true;
      }
    }
  }
  return dp[s1.length][s2.length];
};

var isInterleave3 = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false;
  }
  let dp = [[true]];
  for (let i = 1; i <= s1.length; i++) {
    dp[i] = [dp[i - 1][0] && s1[i - 1] === s3[i - 1]];
  }
  for (let i = 1; i <= s2.length; i++) {
    dp[0][i] = dp[0][i - 1] && s2[i - 1] === s3[i - 1];
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] = false;
      if (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) {
        dp[i][j] = true;
      } else if (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]) {
        dp[i][j] = true;
      }
    }
  }
  return dp[s1.length][s2.length];
};

// @lc code=end
console.log("name====>", isInterleave("aabcc", "dbbca", "aadbbcbcac"));
/*
// @lcpr case=start
// "aabcc"\n"dbbca"\n"aadbbcbcac"\n
// @lcpr case=end

// @lcpr case=start
// "aabcc"\n"dbbca"\n"aadbbbaccc"\n
// @lcpr case=end

// @lcpr case=start
// ""\n""\n""\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = isInterleave;
// @lcpr-after-debug-end
