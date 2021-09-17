/*
 * @Author: Yearth
 * @Date: 2021-09-16 21:41:56
 * @Description: LeetCode 202 快乐数
 * @Link: https://leetcode-cn.com/problems/happy-number/
 */

const next = n => {
  let res = 0;
  while (n) {
    res += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return res;
};

const isHappy = n => {
  let slow = n,
    fast = n;
  do {
    slow = next(slow);
    fast = next(next(fast));
  } while (slow !== fast && fast !== 1);
  return fast === 1;
};
