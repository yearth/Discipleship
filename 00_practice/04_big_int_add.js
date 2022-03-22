/**
 * 实现一个大数相加
 *
 * 示例 1：
 *      输入：6573857492819342 + 7563728175647285
 *      输出：14137585668466627
 */

/**
 * @description 思路一：借助数组
 *
 * 首先将 x, y 转化为数组，逆序，并找到二者中 length 较长的作为 len 对他们进行遍历
 * 接下来只需要对 [对齐] 的数字进行相加即可，相加有两种情况：
 *      - 大于等于 10：取个位，进一
 *      - 小于 10：直接取个位
 * 如果最后还余进位，则直接加在结果的最前方即可
 */
const addByArray = (x, y) => {
  const result = [];

  x = x.toString().split("").reverse();
  y = y.toString().split("").reverse();
  const len = Math.max(x.length, y.length);
  let count = 0;

  for (let i = 0; i < len; i++) {
    const _x = parseInt(x[i]);
    const _y = parseInt(y[i]);

    let sum = _x + _y + count;

    if (sum >= 10) {
      sum %= 10;
      count = 1;
    } else {
      count = 0;
    }

    result.push(sum);
  }

  if (count === 1) {
    result.push(1);
  }

  return result.reverse().join("");
};
console.log(addByArray(6573857492819342, 7563728175647285));
