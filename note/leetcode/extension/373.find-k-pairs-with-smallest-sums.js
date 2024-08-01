/*
 * @lc app=leetcode.cn id=373 lang=javascript
 * @lcpr version=30204
 *
 * [373] 查找和最小的 K 对数字
 * 最小堆，pass
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * ❎
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairsX = function (nums1, nums2, k) {
  if (k === 0) return [];
  let i = 0;
  let j = 0;
  const result = [];
  while (i < nums1.length && j < nums2.length) {
    result.push([nums1[i], nums2[j]]);
    if (k === result.length) {
      return result;
    }
    if (i === nums1.length - 1) {
      j++;
      continue;
    }
    if (j === nums2.length - 1) {
      i++;
      continue;
    }
    if (nums1[i] + nums2[j + 1] > nums1[i + 1] + nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};
// @lc code=end

/*
// @lcpr case=start
// [1,7,11]\n[2,4,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,1,2]\n[1,2,3]\n2\n
// @lcpr case=end

 */
