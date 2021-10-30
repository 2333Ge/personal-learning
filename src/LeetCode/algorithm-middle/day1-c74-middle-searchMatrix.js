/**
 * 编写一个高效的算法来判断 m x n 矩阵中，是否存在一个目标值。该矩阵具有如下特性：

每行中的整数从左到右按升序排列。
每行的第一个整数大于前一行的最后一个整数。

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
输出：true

输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
输出：false

[[1,3]] 3

true


提示：

m == matrix.length
n == matrix[i].length
1 <= m, n <= 100
-104 <= matrix[i][j], target <= 104

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-a-2d-matrix
 */
var searchMatrix = function (matrix, target) {
  let left0 = 0,
    right0 = matrix.length - 1,
    arr0Index = -1;
  while (left0 <= right0) {
    const mid = Math.round((left0 + right0) / 2);
    if (matrix[mid][0] === target) return true;
    if (matrix[mid][0] < target) {
      if (mid === matrix.length - 1 || matrix[mid + 1][0] > target) {
        arr0Index = mid;
        break;
      } else {
        left0 = mid + 1;
      }
    } else {
      right0 = mid - 1;
    }
  }
  if (arr0Index === -1) return false;
  let left1 = 0,
    right1 = matrix[arr0Index].length - 1;
  const arr1 = matrix[arr0Index];
  while (left1 <= right1) {
    const mid = Math.round((left1 + right1) / 2);
    if (arr1[mid] === target) return true;
    if (arr1[mid] > target) {
      right1 = mid - 1;
    } else {
      left1 = mid + 1;
    }
  }
  return false;
};

console.log(searchMatrix([[1, 3]], 3));
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    13
  )
);
