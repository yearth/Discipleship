/**
 * 实现一个串行请求队列 serial 函数，接收包含异步请求的数组，按顺序依次执行。
 */
const getTask =
  (data, delay = 500, isErro = false) =>
  preData => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(data);
        isErro ? reject(data) : resolve(data);
      }, delay);
    });
  };
const taskQueue = [getTask(1), getTask(2, 2000, true), getTask(3, 2000)];

/**
 * @description 思路一: async
 *
 * 借助 async/await
 */
async function serialByAsync(queue, fn = (p, v) => [...p, v], initValue = []) {
  async function asyncReduce(queue, fn, initData) {
    let resData = initData;

    for (let i = 0; i < queue.length; i++) {
      const task = queue[i];
      // 保证 task 出错的时候还是能拿到 data
      const data = await task(resData)
        .then(d => d)
        .catch(e => e);
      resData = fn(resData, data);
    }

    return resData;
  }
  return await asyncReduce(queue, fn, initValue);
}
// console.log("------测试 1------");
// serialByAsync(taskQueue).then(console.log);

/**
 * @description 思路二：reduce
 *
 * 核心思路是利用数组的 reduce 方法
 */
const serialByReduce = async queue => {
  return queue.reduce((sequence, next) => sequence.then(() => next()), Promise.resolve());
};

console.log("------测试 2------");
// console.log(serialByReduce(taskQueue));

/**
 * @description 思路三：Symbol.iterator
 *
 * 改变 Symbol.iterator 从而改变程序默认执行流程
 */
class TaskIterator {
  constructor(queue) {
    this.queue = queue;
    this.length = queue.length;
    this.index = 0;
    this.valueList = [];
    this.errList = [];
  }

  async *[Symbol.asyncIterator]() {
    while (this.index < this.length) {
      const task = this.queue[this.index];
      const [value, err] = await task(Math.random())
        .then(d => [d, null])
        .catch(e => [null, e]);
      this.valueList.push(value);
      this.errList.push(err);
      this.index++;
      yield [value, this.valueList, this.errList];
    }
  }
}

const serialByIterator = async queue => {
  const tasks = new TaskIterator(queue);
  for await (const [value, total, err] of tasks) {
    console.log(value, total, err);
  }
};
console.log("------测试 3------");
console.log(serialByIterator(taskQueue));
