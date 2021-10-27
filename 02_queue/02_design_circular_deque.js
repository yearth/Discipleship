/*
 * @Author: Yearth
 * @Date: 2021-10-27 21:41:01
 * @Description: LeetCode 641 设计循环双端队列
 * @Link: https://leetcode-cn.com/problems/design-circular-deque/
 */
class MyCircularDeque {
  constructor(k) {
    this._queue = new Array(k);
    this._len = k;
    this._head = 0;
    this._tail = 0;
    this._count = 0;
  }

  isEmpty = () => {
    return this._count === 0;
  };

  isFull = () => {
    return this._count === this._len;
  };

  insertFront = value => {
    if (this.isFull()) return false;
    this._head = this._head - 1 + this._len;
    this._head %= this._len;
    this._queue[this._head] = value;
    this._count += 1;
    return true;
  };

  insertLast = value => {
    if (this.isFull()) return false;
    this._queue[this._tail] = value;
    this._tail += 1;
    this._tail %= this._len;
    this._count += 1;
    return true;
  };

  deleteFront = () => {
    if (this.isEmpty()) return false;
    this._head += 1;
    this._head %= this._len;
    this._count -= 1;
    return true;
  };

  deleteLast = () => {
    if (this.isEmpty()) return false;
    this._tail = this._tail - 1 + this._len;
    this._tail %= this._len;
    this._count -= 1;
    return true;
  };

  getFront = () => {
    if (this.isEmpty()) return -1;
    return this._queue[this._head];
  };

  getRear = () => {
    if (this.isEmpty()) return -1;
    return this._queue[(this._tail - 1 + this._len) % this._len];
  };
}
