/*
 * @lc app=leetcode.cn id=128 lang=javascript
 * @lcpr version=30204
 *
 * [128] 最长连续序列
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 冒泡排序的话超时
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;

  // const swap = (i, j) => {
  //   const temp = nums[i];
  //   nums[i] = nums[j];
  //   nums[j] = temp;
  // };
  // for (let i = 0; i < nums.length - 1; i++) {
  //   for (let j = 0; j < nums.length - i; j++) {
  //     if (nums[j] > nums[j + 1]) {
  //       swap(j, j + 1);
  //     }
  //   }
  // }
  nums.sort((a, b) => a - b);

  let longestLength = 1;
  let curLength = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      continue;
    }
    if (nums[i] === nums[i + 1] - 1) {
      curLength += 1;
      longestLength = Math.max(curLength, longestLength);
    } else {
      curLength = 1;
    }
  }

  return longestLength;
};

/**
 * 哈希表的解法
 * 1.转set
 * 2.从边界开始计算长度
 */
var longestConsecutive1 = function (nums) {
  if (!nums.length) return 0;
  const numSet = new Set(nums);
  let res = 1;
  for (let value of numSet) {
    if (numSet.has(value + 1)) continue;
    let length = 1;
    let cur = value;
    while (numSet.has(cur - 1)) {
      cur--;
      length++;
    }
    res = Math.max(length, res);
  }
  return res;
};

var longestConsecutive = function (nums = []) {
  let set = new Set(nums);
  let res = 0;
  for (let value of set) {
    if (set.has(value - 1)) continue;
    let cur = value;
    let step = 1;
    while (set.has(cur + 1)) {
      cur++;
      step++;
    }
    res = Math.max(res, step);
  }
  return res;
};

var longestConsecutive = function (nums = []) {
  const set = new Set(nums);
  let len = 0;
  for (let value of nums) {
    if (!set.has(value - 1)) {
      let temp = value;
      while (set.has(temp + 1)) {
        temp++;
      }
      len = Math.max(len, temp - value + 1);
    }
  }
  return len;
};

// @lc code=end

/*
// @lcpr case=start
// [100,4,200,1,3,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,3,7,2,5,8,4,6,0,1]\n
// @lcpr case=end

 */
