/**
 * 一条包含字母 A-Z 的消息通过以下映射进行了 编码 ：

'A' -> 1
'B' -> 2
...
'Z' -> 26
要 解码 已编码的消息，所有数字必须基于上述映射的方法，反向映射回字母（可能有多种方法）。例如，"11106" 可以映射为：

"AAJF" ，将消息分组为 (1 1 10 6)
"KJF" ，将消息分组为 (11 10 6)
注意，消息不能分组为  (1 11 06) ，因为 "06" 不能映射为 "F" ，这是由于 "6" 和 "06" 在映射中并不等价。

给你一个只含数字的 非空 字符串 s ，请计算并返回 解码 方法的 总数 。

题目数据保证答案肯定是一个 32 位 的整数。

 

示例 1：

输入：s = "12"
输出：2
解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
示例 2：

输入：s = "226"
输出：3
解释：它可以解码为 "BZ" (2 26), "VF" (22 6), 或者 "BBF" (2 2 6) 。
示例 3：

输入：s = "0"
输出：0
解释：没有字符映射到以 0 开头的数字。
含有 0 的有效映射是 'J' -> "10" 和 'T'-> "20" 。
由于没有字符，因此没有有效的方法对此进行解码，因为所有数字都需要映射。
示例 4：

输入：s = "06"
输出：0
解释："06" 不能映射到 "F" ，因为字符串含有前导 0（"6" 和 "06" 在映射中并不等价）。
 

提示：

1 <= s.length <= 100
s 只包含数字，并且可能包含前导零。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/decode-ways
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {number}
 * 
 * // 错误解答，没想出来
 */
var numDecodings1 = function (s) {
  if (s.length === 0 || s[0] === "0") return 0;
  if (s.length === 1) return 1;

  const arr = new Array(27).fill(true);
  arr[0] = false;
  const isCodeValid = (curIndex, twoChars = false) => {
    return !!arr[
      s.substr(twoChars ? curIndex - 1 : curIndex, twoChars ? 2 : 1)
    ];
  };
  let firstValid = true;
  let secondValid = isCodeValid(1, true);
  if (s.length === 2)
    return (secondValid ? 1 : 0) + (isCodeValid(1, false) ? 1 : 0);
  let result = (firstValid ? 1 : 0) + (secondValid ? 1 : 0);
  for (let i = 2; i < s.length; i++) {
    if (!firstValid && !secondValid) return 0;
    let newFirstValid = isCodeValid(i, false);
    let newSecondValid = isCodeValid(i, true);
    if (newFirstValid && secondValid && newSecondValid && firstValid) result++;
    console.log(i, s[i], newFirstValid, newSecondValid, result);
    firstValid = newSecondValid;
    secondValid = newFirstValid;
  }
  return result;
};

/**
 * 参考：https://leetcode-cn.com/problems/decode-ways/solution/jie-ma-fang-fa-by-leetcode-solution-p8np/
 * @param {*} s
 * @returns
 */
var numDecodings = function (s) {
  if (s.length === 0 || s[0] === "0") return 0;
  if (s.length === 1) return 1;

  const codeValid = new Array(27).fill(true);
  codeValid[0] = false;

  let result = { 0: 1 };
  for (let i = 1; i < s.length; i++) {
    if (codeValid[s[i]]) {
      result[i] = result[i - 1];
    }
    if (codeValid[s.substr(i - 1, 2)]) {
      if (result[i]) {
        result[i] += result[i - 2] || 1;
      } else {
        result[i] = result[i - 2] || 1;
      }
    }
    if (!result[i]) return 0;
    // console.log(i, codeValid[s[i]], codeValid[s.substr(i - 1, 2)], result[i])
  }
  return result[s.length - 1];
};

/**
 * 上述优化，只存3个变量
 */
var numDecodings = function (s) {
  if (s.length === 0 || s[0] === "0") return 0;
  if (s.length === 1) return 1;

  const codeValid = new Array(27).fill(true);
  codeValid[0] = false;

  let useOne = 1,
    useTwo,
    cur;
  for (let i = 1; i < s.length; i++) {
    if (codeValid[s[i]]) {
      cur = useOne;
    }
    if (codeValid[s.substr(i - 1, 2)]) {
      if (cur) {
        cur += useTwo || 1;
      } else {
        cur = useTwo || 1;
      }
    }
    if (!cur) return 0;
    useTwo = useOne;
    useOne = cur;
    cur = 0;
  }
  return useOne;
};

console.log(numDecodings("226"));
console.log(numDecodings("10")); //1
console.log(numDecodings("2101")); // 1
console.log(numDecodings("1123"));
