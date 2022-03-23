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
const taskQueue = [getTask(1), getTask(2, 2000, false), getTask(3, 2000)];

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
console.log(serialByReduce(taskQueue));
