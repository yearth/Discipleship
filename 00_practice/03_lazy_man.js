/**
 * 实现一个 LazyMan 类，它可以实现以下调用效果
 *
 * new LazyMan("John").eat("lunch").eat("dinner").sleepFirst(5).sleep(10).eat("junk food");
 *    - print: I am John
 *    - print: wait 5s...
 *    - print: eat lunch
 *    - print: eat dinner
 *    - print: wait 10s...
 *    - print: eat junk food
 */

const sleepByDate = second => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < second * 1000);
};

const sleepByAsync = async second => {
  await new Promise(resolve => setTimeout(resolve, second * 1000));
};

// 需要注意兼容性
const sleepByAtomics = second => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, second * 1000);
};

class LazyMan {
  constructor(name) {
    this.cbQueue = [];
    this.name = name;
    this.init();
    setTimeout(() => {
      this.execute();
    });
  }

  execute = () => {
    this.cbQueue.forEach(cb => cb?.());
  };

  enQueue = (cb, isFront) => {
    isFront ? this.cbQueue.unshift(cb) : this.cbQueue.push(cb);
  };

  insertFront = cb => {
    this.enQueue(cb, true);
  };

  insertLast = cb => {
    this.enQueue(cb, false);
  };

  init = () => {
    this.insertLast(() => console.log(`I am ${this.name}`));
    return this;
  };

  eat = food => {
    this.insertLast(() => console.log(`eat ${food}`));
    return this;
  };

  sleep = second => {
    this.insertLast(() => sleepByDate(second));
    return this;
  };

  sleepFirst = second => {
    this.insertFront(() => sleepByDate(second));
    return this;
  };
}
new LazyMan("John").eat("lunch").eat("dinner").sleepFirst(5).sleep(3).eat("junk food");
