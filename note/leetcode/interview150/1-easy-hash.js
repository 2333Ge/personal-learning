/**
 * 两数之和
 * 注意相同的情况
 * 待提交
 */
const sum2 = (nums = [], target) => {
  if (!nums?.length || nums?.length === 1) return [];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const targetValue = target - nums[i];
    if (map[targetValue] !== undefined) {
      return [map[targetValue], i];
    }
    map[nums[i]] = i;
  }
  return [];
};

console.log("name====>", sum2([2, 7, 11, 15], 9));
console.log("name====>", sum2([3, 2, 4], 6));
console.log("name====>", sum2([3, 0, 999, 888, 333, 222, 111, 3], 6));
