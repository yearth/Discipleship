/**
 * 实现一个函数，找到数组中唯一一个不重复的数字
 *
 * 示例 1：
 *      输入：[1, 2, 3, 4, 3, 2, 1, 5]
 *      输出：4
 *
 * 示例 2：
 *      输入：[2, 2, 2, 2, 2, 2, 1]
 *      输出：1
 */

/**
 * @description 思路一：
 */
const findUniqNumberBySort = arr => {
  const sortedArr = arr.sort((a, b) => a - b);

  if (sortedArr[0] !== sortedArr[1]) {
    return sortedArr[0];
  }

  if (sortedArr[sortedArr.length - 1] !== sortedArr[sortedArr.length - 2]) {
    return sortedArr[sortedArr.length - 1];
  }

  let slow = 0,
    fast = 1;
  while (sortedArr[fast]) {
    if (sortedArr[slow] === sortedArr[fast]) {
      fast++;
      continue;
    }
    if (fast - slow === 1) {
      return sortedArr[slow];
    } else {
      slow = fast;
    }
  }
};
console.log(findUniqNumberBySort([1, 2, 3, 4, 3, 2, 1]));
