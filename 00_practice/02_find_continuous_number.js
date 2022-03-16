/**
 * 找到连续的数字
 *  输入一串字符串，如果数字连续，就用 ~ 连接，否则用 , 隔开
 *
 * 示例 1：
 *      输入："1, 2, 3, 5, 7, 8, 10"
 *      输出："1~3, 5, 7~8, 10"
 */

/**
 * @description 思路一：常规思路
 *
 * 首先字符串转数组，用一个临时变量存储数组的第一位（及 x~y 中的起始位）
 * 遍历数组，有以下几种情况
 *    - cur == nxt: 不用做任何处理，直接找下一位
 *    - cur != nxt:
 *      - cur != temp: 说明是类似 1, 2, 3 这样的连续数字（因为 cur 在变，temp 还没变），所以 push temp~cur 进结果集
 *      - cur == temp: 说明是单独的数字，所以 push cur 进结果集即可
 *      - 最后用当前 cur 的值去更新 temp
 */
const findContinuousNumberByTemp = str => {
  const result = [];

  const arr = str.split(", ");
  const len = arr.length;
  let temp = arr[0];

  for (let i = 0; i < len; i++) {
    const cur = Number(arr[i]);
    const nxt = Number(arr[i + 1]);
    if (nxt === cur + 1) {
      continue;
    } else {
      temp === cur ? result.push(`${cur}`) : result.push(`${temp}~${cur}`);
      temp = nxt;
    }
  }

  return result.join(", ");
};

/**
 * @description 思路二：正则替换
 *
 * 首先把字符串转换成 "1~2~3,5,7~8,10" 的形式
 * 然后用正则替换连续出现 ~ 的地方，比如 1~2~3 => 1~3
 */
const findContinuousNumberByRegExp = str => {
  return str
    .split(", ")
    .map(i => Number(i))
    .reduce((result, cur, idx, self) => {
      if (idx === 0) {
        return cur;
      } else {
        const pre = self[idx - 1];
        return pre === cur - 1 ? `${result}~${cur}` : `${result},${cur}`;
      }
    }, "")
    .split(",")
    .map(s => {
      // 1~2~3,5,7~8,10
      const reg = /(\d{1,})(~\d{1,})*(~\d{1,})/;
      return s.replace(reg, "$1$3");
    })
    .join(", ");
};

/**
 * @description 思路三：双指针
 *
 * 首先字符串转数组
 * 用 fast 和 slow 遍历数组，有以下几种情况:
 *    - arr[fast] + 1 == arr[fast + 1]: 说明是连续的，fast 继续往后走即可
 *    - else
 *      - fast != slow: 说明是类似 1, 2, 3, 4 这样的连续字符，push ${slow}~${fast}，fast 继续向后遍历，并且移动 slow 到 fast 的位置
 *      - fast == slow: 说明是不连续数字，直接 push slow 即可，fast 和 slow 都向后移动
 */
const findContinuousNumberByPointor = str => {
  const result = [];
  const arr = str.split(",").map(i => Number(i));
  const len = arr.length;
  let fast = 0,
    slow = 0;
  while (fast < len) {
    if (arr[fast] + 1 === arr[fast + 1]) {
      fast++;
    } else {
      if (fast === slow) {
        result.push(arr[slow]);
        slow++;
        fast++;
      } else {
        result.push(`${arr[slow]}~${arr[fast]}`);
        fast++;
        slow = fast;
      }
    }
  }

  return result.join(", ");
};
console.log(findContinuousNumberByPointor("1, 2, 3, 5, 7, 8, 10"));
