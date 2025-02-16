/*
 * @lc app=leetcode.cn id=153 lang=javascript
 * @lcpr version=30204
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin1 = function (nums = []) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[r];
};

var findMin2 = function (nums = []) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[l];
};

// 记这个
const findMin3 = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  // 如果数组没有旋转或只有一个元素
  if (nums[left] <= nums[right]) {
    return nums[left];
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    // 如果中间值大于第一个元素，说明最小值在右半部分
    if (nums[mid] >= nums[0]) {
      left = mid + 1;
    }
    // 否则最小值在左半部分
    else {
      right = mid;
    }
  }
  return nums[left];
};

const findMin = function (nums) {
  
};
// @lc code=end

/*
// @lcpr case=start
// [3,4,5,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6,7,0,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [11,13,15,17]\n
// @lcpr case=end

 */
