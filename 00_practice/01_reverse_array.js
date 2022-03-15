/**
 * 旋转数组
 *
 * 示例 1：
 *      输入：[1, 2, 3, 4, 5, 6, 7], k = 3
 *      输出：[5, 6, 7, 1, 2, 3, 4]
 *      说明：
 *          第一次：[7, 1, 2, 3, 4, 5, 6]
 *          第二次：[6, 7, 1, 2, 3, 4, 5]
 *          第三次：[5, 6, 7, 1, 2, 3, 4]
 * 示例 2：
 *      输入：[1, 2, 3, 4, 5, 6, 7], k = 9
 *      输出：[6, 7, 1, 2, 3, 4, 5]
 *      说明：
 *          七次刚好恢复原状
 *          第八次：[7, 1, 2, 3, 4, 5, 6]
 *          第九次：[6, 7, 1, 2, 3, 4, 5]
 */

/**
 * @description 思路一：数组拼接
 *
 * 首先 x 需要对 7 取余
 * 通过观察示例可以知道，k = x，就相当于把前 length - x 个数取出来，放到被截取的数组的后面进行拼接
 */
const reverseBySlice = (arr, k) => {
  k %= arr.length;
  const len = arr.length;
  const next = arr.splice(0, len - k);
  return [...arr, ...next];
};

/**
 * @description 思路二：循环队列
 *
 * reverse 通常可以使用循环【队列/链表】来实现
 * 这里可以实现一个循环队列，k = x，head, tail 指针移动 x 位即可
 */
class CircularQueue {
  constructor(arr) {
    this.queue = arr;
    this.head = 0;
    this.tail = arr.length - 1;
    this.size = arr.length;
  }

  reverse = k => {
    k %= this.size;
    const step = this.size - k;
    this.head += step;
    this.tail += step;
    this.tail %= this.size;
    return this;
  };

  toArray = () => {
    const arr = [];
    for (let i = 0; i < this.size; i++) {
      const idx = (this.head + i) % this.size;
      arr.push(this.queue[idx]);
    }
    return arr;
  };
}

const reverseByQueue = (arr, k) => {
  return new CircularQueue(arr).reverse(k).toArray();
};

/* run */
const arr = Array.from({ length: 7 }, (_, i) => i + 1);
// const result = reverseBySlice(arr, 3);
const result = reverseByQueue(arr, 9);
console.log("result", result);
