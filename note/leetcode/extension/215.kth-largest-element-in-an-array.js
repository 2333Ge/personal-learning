/*
 * @lc app=leetcode.cn id=215 lang=javascript
 * @lcpr version=30204
 *
 * [215] 数组中的第K个最大元素
 * 重要
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest1 = function (nums, k) {
  const big = [],
    small = [],
    equal = [];
  const randomX = nums[Math.floor(Math.random() * nums.length)];
  nums.forEach((num) => {
    if (num > randomX) {
      big.push(num);
    } else if (num < randomX) {
      small.push(num);
    } else {
      equal.push(num);
    }
  });
  if (big.length >= k) {
    return findKthLargest(big, k);
  }
  if (big.length + equal.length >= k) {
    return randomX;
  }
  if (big.length + equal.length < k) {
    return findKthLargest(small, k - big.length - equal.length);
  }
};

var findKthLargest2 = function (nums, k) {
  if (k > nums.length) return;
  const equal = [];
  const bigger = [];
  const smaller = [];
  const random = nums[0];
  for (value of nums) {
    if (value > random) {
      bigger.push(value);
    }
    if (value < random) {
      smaller.push(value);
    }
    if (value === random) {
      equal.push(value);
    }
  }
  if (bigger.length >= k) {
    return findKthLargest(bigger, k);
  }
  if (equal.length && bigger.length + equal.length >= k) {
    return random;
  }
  return findKthLargest(smaller, k - bigger.length - equal.length);
};

var findKthLargest3 = function (nums, k) {
  if (k > nums.length) return;
  let equal = [nums[0]];
  let smaller = [];
  let bigger = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[0]) {
      equal.push(nums[i]);
    } else if (nums[i] > nums[0]) {
      bigger.push(nums[i]);
    } else {
      smaller.push(nums[i]);
    }
  }
  if (k <= bigger.length) return findKthLargest(bigger, k);
  if (k <= bigger.length + equal.length) return equal[0];
  return findKthLargest(smaller, k - bigger.length - equal.length);
};

var findKthLargest = function (nums, k) {
  const smaller = [];
  const bigger = [];
  const equal = [];
  let target = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === target) {
      equal.push(nums[i]);
    } else if (nums[i] > target) {
      bigger.push(nums[i]);
    } else {
      smaller.push(nums[i]);
    }
  }

  if (bigger.length >= k) {
    return findKthLargest(bigger, k);
  }
  if (bigger.length + equal >= k) {
    return target;
  }
  return findKthLargest(smaller, k - equal.length - smaller.length);
};

// @lc code=end

/*
// @lcpr case=start
//  [3,2,1,5,6,4]\n2\n
// @lcpr case=end

// @lcpr case=start
// [3,2,3,1,2,4,5,5,6]\n4\n
// @lcpr case=end

 */

// @lcpr-after-debug-begin
module.exports = findKthLargest;
// @lcpr-after-debug-end
