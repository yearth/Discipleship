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
const taskQueue = [getTask(1), getTask(2, 2000, false), getTask(3, 500)];

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
console.log("------测试Demo1------");
serialByAsync(taskQueue).then(console.log);
