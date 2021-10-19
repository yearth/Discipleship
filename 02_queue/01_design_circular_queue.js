/*
 * @Author: Yearth
 * @Date: 2021-10-19 22:29:02
 * @Description: LeetCode 622 设计循环队列
 * @Link: https://leetcode-cn.com/problems/design-circular-queue/
 */

class MyCircularQueue {
  constructor(k) {
    this._queue = new Array(k);
    this._head = 0;
    this._tail = 0;
    this._count = 0;
    this._len = k;
  }

  /**
   * @description: 入队
   * @param {Number}
   * @return {Boolean}
   */
  enQueue = value => {
    if (this.isFull()) return false;
    this._queue[this._tail] = value;
    this._tail += 1;
    this._tail %= this._len;
    this._count += 1;
    return true;
  };

  /**
   * @description: 出队
   * @return {Boolean}
   */
  deQueue = () => {
    if (this.isEmpty()) return false;
    this._count -= 1;
    this._head += 1;
    this._head %= this._len;
    return true;
  };

  /**
   * @description: 返回队列头部元素
   * @return {Number}
   */
  Front = () => {
    if (this.isEmpty()) return -1;
    return this._queue[this._head];
  };

  /**
   * @description: 返回队列尾部元素
   * @return {Number}
   */
  Rear = () => {
    if (this.isEmpty()) return -1;
    return this._queue[(this._tail - 1 + this._len) % this._len];
  };

  /**
   * @description: 判断队列是否为空
   * @return {Boolean}
   */
  isEmpty = () => {
    return this._count === 0;
  };

  /**
   * @description: 判断队列是否为满
   * @return {Boolean}
   */
  isFull = () => {
    return this._count === this._len;
  };
}
