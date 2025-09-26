/*
 * @lc app=leetcode.cn id=134 lang=javascript
 * @lcpr version=30204
 *
 * [134] 加油站
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit1 = function (gas, cost) {
  let rest = 0;
  let start = 0;
  let curRest = 0;

  for (let i = 0; i < gas.length; i++) {
    rest += gas[i] - cost[i];
    curRest += gas[i] - cost[i];
    if (curRest < 0) {
      start = i + 1;
      curRest = 0;
    }
  }

  return rest >= 0 ? start : -1;
};

var canCompleteCircuit3 = function (gas, cost) {
  let rest = 0;
  let start = 0;
  let curRest = 0;

  for (let i = 0; i < gas.length; i++) {
    rest = gas[i] + rest - cost[i];
    curRest = gas[i] + curRest - cost[i];
    if (curRest < 0) {
      curRest = 0;
      start = i + 1;
    }
  }
  return rest >= 0 ? start : -1;
};

var canCompleteCircuit = function (gas, cost) {
  if (!gas.length) return -1;
  let totalRest = 0;
  let curRest = 0;
  let res = 0;
  for (let i = 0; i < gas.length; i++) {
    totalRest += gas[i] - cost[i];
    curRest += gas[i] - cost[i];
    if (curRest < 0) {
      res = i + 1;
      curRest = 0;
    }
  }
  if (totalRest >= 0) {
    return res;
  }
  return -1;
};

var canCompleteCircuit = function (gas, cost) {
  let reset = 0;
  let res = 0;
  let totalRest = 0;
  for (let i = 0; i < gas.length; i++) {
    reset = gas[i] - cost[i] + reset;
    totalRest = gas[i] - cost[i] + totalRest;
    if (reset < 0) {
      reset = 0;
      res = i + 1;
    }
  }

  return totalRest >= 0 ? res : -1;
};

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n[3,4,5,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n[3,4,3]\n
// @lcpr case=end

 */
