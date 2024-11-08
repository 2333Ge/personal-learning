/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * @lcpr version=30204
 *
 * [88] 合并两个有序数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/** ❎
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function (nums1, m, nums2, n) {
  let mLeft = 0,
    nLeft = 0,
    nRight = 0;
  while (nLeft < n && mLeft < m) {
    if (nums1[mLeft] < nums2[nLeft]) {
      mLeft++;
    } else {
      if (nums2[nRight] <= nums1[nLeft]) {
        nRight++;
      } else {
        const rightArr = nums2.slice(nLeft, nRight);
        nums1.splice(mLeft, 0, ...rightArr);
        mLeft += rightArr.length;
        nLeft = nRight + 1;
        nRight = nLeft;
      }
    }
  }
  if (nLeft < n) {
    nums1.splice(mLeft, 0, ...nums2.slice(nLeft, nums2.length));
  }
  nums1.splice(m + n, nums1.length - m - n);
};

var merge2 = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1;
  nums1.splice(m);
  while (j >= 0 && i >= 0) {
    if (nums1[i] <= nums2[j]) {
      // 注意splice的处理范围
      nums1.splice(i + 1, 0, ...nums2.splice(j));
      j--;
      // console.log("nums1====>", i, j, nums1);
    } else {
      i--;
    }
  }
  nums1.splice(0, 0, ...nums2);
};

var merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 || j >= 0) {
    if (nums1[i] > nums2[j] || j < 0) {
      nums1[last] = nums1[i];
      i--;
    } else {
      nums1[last] = nums2[j];
      j--;
    }
    last--;
  }
};

// 2. 双指针，再↑的基础上再加个尾指针
// 3. 合并后排序
// @lc code=end
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */
