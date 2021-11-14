/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

 

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]
 

提示：

0 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
 * @param {*} nums 
 * @returns 
 */
var threeSum = function (nums = []) {
  const sortArr = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sortArr.length - 2; i++) {
    if (sortArr[i] > 0) {
      break;
    }
    if (i > 0 && sortArr[i] === sortArr[i - 1]) {
      continue;
    }
    // console.log('iiii',i, sortArr[i])
    // console.log(sortArr.length - 1, i + 1)
    for (let j = sortArr.length - 1; sortArr[j] >= 0 && j > i + 1; j--) {
      if (j < sortArr.length - 1 && sortArr[j] === sortArr[j + 1]) {
        continue;
      }

      for (let k = j - 1; k > i; k--) {
        // if(sortArr[j] === 2 && sortArr[i] === -4){
        //     console.log(i,j, k)
        //     console.log(sortArr[i],sortArr[j], sortArr[k])
        //     console.log()

        // }
        if (j < k - 2 && sortArr[k] === sortArr[k + 1]) {
          continue;
        }
        if (sortArr[i] + sortArr[j] + sortArr[k] === 0) {
          result.push([sortArr[i], sortArr[j], sortArr[k]]);
          break;
        }
      }
    }
  }
  return result;
};
