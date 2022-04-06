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
 * @description 思路一：借助排序，最基础的思路
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
// console.log(findUniqNumberBySort([1, 2, 3, 4, 3, 2, 1]));

/**
 * @description 思路二：借助缓存，缺点是增加空间复杂度
 */
const findUniqNumberByCache = arr => {
  const cache = new Map();

  for (const i of arr) {
    cache.has(i) ? cache.set(i, cache.get(i) + 1) : cache.set(i, 0);
  }

  for (const [k, v] of cache) {
    if (v === 0) {
      return k;
    }
  }
};
// console.log(findUniqNumberByCache([1, 2, 3, 4, 3, 2, 1]));

/**
 * @description 思路三：与思路一类似，只不过借助了 api 来实现
 */
const findUniqNumberByAPI = arr => {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
};
// console.log(findUniqNumberByAPI([1, 2, 3, 4, 3, 2, 1]));

/**
 * @description 思路四：位运算，借助异或
 *
 * 任何数与自身异或结果为 0，比如 3 ^ 3 = 0
 * 0 与任何数异或结果为任何数本身，比如 0 ^ 3 = 3
 *
 * 对于本用例，数组异或之后结果为 1 ^ 1 ^ 2 ^ 2 ^ 3 ^ 3 ^ 4 = 4
 */
const findUniqNumberByByte = arr => {
  return arr.reduce((t, c) => t ^ c, 0);
};
console.log(findUniqNumberByByte([1, 2, 3, 4, 3, 2, 1]));
