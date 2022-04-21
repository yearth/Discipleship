class Heap {
  constructor(data = []) {
    this._data = [];
    this._count = 0;
    for (const n of data) {
      this.push(n);
    }
  }
  get end() {
    return this._count - 1;
  }
  _swap(i, j) {
    [this._data[i], this._data[j]] = [this._data[j], this._data[i]];
  }
  _getPushIndex(i) {
    return [i, Math.floor((i - 1) / 2)];
  }
  _getPopIndex(i) {
    return [i, i * 2 + 1, i * 2 + 2];
  }
  size() {
    return this._count;
  }
  push(n) {
    this._data[this._count++] = n;
    let [i, j] = this._getPushIndex(this.end);
    while (i && this._data[i] > this._data[j]) {
      this._swap(i, j);
      [i, j] = this._getPushIndex(j);
    }
  }
  pop() {
    if (this.size() === 0) return;
    const data = this._data;
    this._swap(0, this.end);
    this._count--;
    let [i, l, r] = this._getPopIndex(0);
    while (l <= this.end) {
      let t = i;
      if (data[i] < data[l]) t = l;
      if (r <= this.end && data[t] < data[r]) t = r;
      if (t === i) break;
      this._swap(i, t);
      [i, l, r] = this._getPopIndex(t);
    }
  }
}
const heap = new Heap();
for (let i = 0; i < 10; i++) {
  console.log("heap: ", heap.push(i), heap);
}
for (let i = 0; i < 10; i++) {
  console.log("heap: ", heap.pop(), heap);
}
