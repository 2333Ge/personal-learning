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
 * ❎，超时
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuitX = function (gas, cost) {
  let totalRest = 0;
  const rest = [];
  for (let i = 0; i < gas.length; i++) {
    totalRest = totalRest + gas[i] - cost[i];
    rest[i] = gas[i] - cost[i];
  }
  if (totalRest < 0) {
    return -1;
  }
  for (let i = 0; i < gas.length; i++) {
    let cur = 0;
    for (let j = i; j < gas.length + i; j++) {
      cur = cur + rest[j % gas.length];
      if (cur < 0) {
        break;
      }
    }
    if (cur >= 0) {
      return i;
    }
  }
  return -1;
};

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

var canCompleteCircuit = function (gas, cost) {
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

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n[3,4,5,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n[3,4,3]\n
// @lcpr case=end

 */
